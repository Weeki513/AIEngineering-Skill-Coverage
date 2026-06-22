import { useEffect, useMemo, useState } from 'react'
import { skills, SOURCE_URL, type Skill, type SkillCategory } from './data/aiEngineeringSkills'
import { categoryLabels, levelLabels, localizedQuestion, skillDescription, ui, type Locale } from './i18n'

type SkillLevel = 'unknown' | 'awareness' | 'basic' | 'usable' | 'strong'
type Levels = Record<string, SkillLevel>
type TestMode = { type: 'skill'; skill: Skill } | { type: 'full' }

const STORAGE_KEY = 'ai-engineering-skill-coverage:v1'
const levelValues: Record<SkillLevel, number> = { unknown:0, awareness:.25, basic:.5, usable:.75, strong:1 }
const levelOptions = Object.keys(levelValues) as SkillLevel[]
const initialLevels = (): Levels => Object.fromEntries(skills.map(skill => [skill.id,'unknown']))

function scoreToLevel(score: number): SkillLevel {
  if (score <= 20) return 'unknown'
  if (score <= 40) return 'awareness'
  if (score <= 60) return 'basic'
  if (score <= 80) return 'usable'
  return 'strong'
}

function loadLevels(): Levels {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '') as { levels?: Levels }
    return { ...initialLevels(), ...(parsed.levels || {}) }
  } catch { return initialLevels() }
}

function ExternalArrow() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14"><path d="M6 3h7v7M13 3 5 11M11 8v5H3V5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function Modal({ title, onClose, closeLabel, wide=false, children }: { title:string; onClose:()=>void; closeLabel:string; wide?:boolean; children:React.ReactNode }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown',onKey); document.body.classList.add('modal-open')
    return () => { document.removeEventListener('keydown',onKey); document.body.classList.remove('modal-open') }
  },[onClose])
  return <div className="modal-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <section className={`modal ${wide?'modal-wide':''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <header className="modal-header"><h2 id="modal-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label={closeLabel}>×</button></header>
      <div className="modal-body">{children}</div>
    </section>
  </div>
}

function TestModal({ mode, locale, onClose, onComplete }: { mode:TestMode; locale:Locale; onClose:()=>void; onComplete:(levels:Levels)=>void }) {
  const t=ui[locale]
  const questions = useMemo(() => mode.type === 'skill' ? mode.skill.questions : skills.flatMap(skill => skill.questions),[mode])
  const [index,setIndex] = useState(0)
  const [answers,setAnswers] = useState<Record<string,number>>({})
  const [finished,setFinished] = useState(false)
  const question = questions[index]
  const questionSkill = skills.find(skill => skill.id === question.skillId)!
  const content = localizedQuestion(question,questionSkill,locale)
  const selected = question ? answers[question.id] : undefined

  const results = useMemo(() => {
    const ids = mode.type === 'skill' ? [mode.skill.id] : skills.map(skill => skill.id)
    return Object.fromEntries(ids.map(id => {
      const subset = questions.filter(q => q.skillId === id)
      const correct = subset.filter(q => answers[q.id] === q.correctOptionIndex).length
      const percent = Math.round((correct / subset.length) * 100)
      return [id,{ correct, total:subset.length, percent, level:scoreToLevel(percent) }]
    })) as Record<string,{correct:number;total:number;percent:number;level:SkillLevel}>
  },[answers,mode,questions])

  function finish() {
    onComplete(Object.fromEntries(Object.entries(results).map(([id,result]) => [id,result.level])))
    setFinished(true)
  }

  if (finished) {
    const resultRows = Object.entries(results)
    return <Modal title={mode.type === 'skill' ? `${mode.skill.name} ${t.skillResult}` : t.fullResults} closeLabel={t.closeModal} onClose={onClose} wide={mode.type==='full'}>
      <div className="result-intro"><strong>{t.saved}</strong><span>{t.updated}</span></div>
      <div className="result-list">{resultRows.map(([id,result]) => <div className="result-row" key={id}>
        <span>{skills.find(skill => skill.id === id)?.name}</span><strong>{result.percent}% · {levelLabels[locale][result.level]}</strong>
      </div>)}</div>
      {mode.type === 'skill' && <div className="answer-review"><h3>{t.answerReview}</h3>{questions.map((q,i) => {
        const correct = answers[q.id] === q.correctOptionIndex
        const reviewContent=localizedQuestion(q,mode.skill,locale)
        return <article key={q.id} className={correct?'review-correct':'review-wrong'}><strong>{i+1}. {correct?t.correct:t.incorrect}</strong><p>{reviewContent.explanation}</p></article>
      })}</div>}
      <div className="modal-actions"><button className="button button-primary" onClick={onClose}>{t.done}</button></div>
    </Modal>
  }

  const skillName = skills.find(skill => skill.id === question.skillId)?.name
  return <Modal title={mode.type === 'skill' ? `${mode.skill.name} ${t.skillTest}` : t.fullSkillTest} closeLabel={t.closeModal} onClose={onClose} wide>
    <div className="test-meta"><span>{skillName}</span><span>{t.question} {index+1} {t.of} {questions.length}</span></div>
    <div className="progress" aria-label={`${Math.round((index/questions.length)*100)}% ${t.progress}`}><span style={{width:`${(index/questions.length)*100}%`}} /></div>
    <fieldset className="question"><legend>{content.question}</legend>
      <div className="options">{content.options.map((option,optionIndex) => <label className={`option ${selected===optionIndex?'option-selected':''}`} key={option}>
        <input type="radio" name={question.id} checked={selected===optionIndex} onChange={() => setAnswers(current => ({...current,[question.id]:optionIndex}))}/><span>{option}</span>
      </label>)}</div>
    </fieldset>
    <div className="modal-actions test-actions"><button className="button" disabled={index===0} onClick={() => setIndex(index-1)}>{t.previous}</button>
      {index < questions.length-1 ? <button className="button button-primary" disabled={selected===undefined} onClick={() => setIndex(index+1)}>{t.next}</button> : <button className="button button-primary" disabled={selected===undefined} onClick={finish}>{t.finish}</button>}
    </div>
  </Modal>
}

function Methodology({ locale, onClose }: { locale:Locale; onClose:()=>void }) {
  const t=ui[locale]
  return <Modal title={t.methodology} closeLabel={t.closeModal} onClose={onClose} wide><div className="prose">
    <p>{locale==='ru'?'Инструмент основан на ': 'This tool is based on '}<a href={SOURCE_URL} target="_blank" rel="noreferrer">{t.basedLink}</a>. {locale==='ru'?'В репозитории собраны результаты анализа вакансий AI Engineer и материалы для подготовки к собеседованиям. Частота навыков рассчитана по упоминаниям в вакансиях.':'The source repository analyzes AI Engineer job descriptions and interview preparation materials. Skill frequencies are based on its job-description skill analysis.'}</p>
    <h3>{t.normalization}</h3><p>{locale==='ru'?'Близкие термины объединены в одну карточку. Например, API, REST, REST API и API design считаются одним навыком; PostgreSQL и Postgres — другим. Используется зафиксированный снимок исходных данных.':'Related terms are sometimes combined into one skill card. API, REST, REST APIs, and API design are grouped together; PostgreSQL and Postgres are grouped together. The source snapshot is treated as static.'}</p>
    <h3>{t.scoring}</h3><p>{locale==='ru'?'Соответствие рынку = сумма произведений частоты навыка и коэффициента выбранного уровня, делённая на сумму частот. Коэффициенты: «Не знаком» — 0; «Понимаю концепцию» — 0,25; «Применял на практике» — 0,5; «Работаю самостоятельно» — 0,75; «Уверенно применяю» — 1.':'Market coverage = sum(skill market frequency × selected skill level) / sum(skill market frequency). Not familiar = 0, Understand the concept = 0.25, Some practical use = 0.5, Work independently = 0.75, Strong production use = 1.'}</p>
    <h3>{t.limitations}</h3><p>{locale==='ru'?'Результат — взвешенная самооценка, а не сертификация и не гарантия трудоустройства. Он помогает расставить приоритеты и выбрать темы для дальнейшего изучения.':'This is a market-weighted self-assessment, not a certification or hiring guarantee. It is intended to help identify skill gaps and choose what to learn next.'}</p>
    <div className="modal-actions"><button className="button button-primary" onClick={onClose}>{t.close}</button></div>
  </div></Modal>
}

export default function App() {
  const [levels,setLevels] = useState<Levels>(loadLevels)
  const [locale,setLocale] = useState<Locale>(() => (localStorage.getItem('ai-engineering-skill-coverage:locale') as Locale) || 'en')
  const [theme,setTheme] = useState<'light'|'dark'>(() => (localStorage.getItem('ai-engineering-skill-coverage:theme') as 'light'|'dark') || 'light')
  const [test,setTest] = useState<TestMode|null>(null)
  const [methodology,setMethodology] = useState(false)
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState<SkillCategory|'all'>('all')

  const t=ui[locale]
  useEffect(() => localStorage.setItem(STORAGE_KEY,JSON.stringify({levels,updatedAt:new Date().toISOString()})),[levels])
  useEffect(() => { document.documentElement.dataset.theme=theme; localStorage.setItem('ai-engineering-skill-coverage:theme',theme) },[theme])
  useEffect(() => { document.documentElement.lang=locale; localStorage.setItem('ai-engineering-skill-coverage:locale',locale) },[locale])
  const totalWeight = skills.reduce((sum,skill) => sum+skill.frequencyPercent,0)
  const coverage = Math.round(skills.reduce((sum,skill) => sum+skill.frequencyPercent*levelValues[levels[skill.id]],0)/totalWeight*100)
  const assessed = skills.filter(skill => levels[skill.id] !== 'unknown').length
  const gaps = skills.filter(skill => ['unknown','awareness','basic'].includes(levels[skill.id])).sort((a,b) => b.frequencyPercent-a.frequencyPercent)
  const visibleSkills = skills.filter(skill => (category==='all'||skill.category===category) && `${skill.name} ${skillDescription(skill,locale)}`.toLowerCase().includes(query.toLowerCase()))

  function updateLevel(id:string,level:SkillLevel) { setLevels(current => ({...current,[id]:level})) }
  function reset() { if (window.confirm(t.clearConfirm)) { localStorage.removeItem(STORAGE_KEY); setLevels(initialLevels()) } }
  function completeTest(changes:Levels) { setLevels(current => ({...current,...changes})) }
  function exportMarkdown() {
    const date = new Intl.DateTimeFormat(locale,{dateStyle:'long'}).format(new Date())
    const rows = skills.map(s => `| ${s.name} | ${s.frequencyPercent.toFixed(1)}% | ${levelLabels[locale][levels[s.id]]} |`).join('\n')
    const gapRows = gaps.map(s => `- **${s.name}** — ${s.frequencyPercent.toFixed(1)}%; ${t.level.toLowerCase()}: ${levelLabels[locale][levels[s.id]]}`).join('\n') || `- ${t.noGaps}`
    const md = `# ${t.title}\n\n${t.date}: ${date}\n\n**${t.marketCoverage}: ${coverage}%**  \n**${t.assessed}: ${assessed} / ${skills.length}**\n\n## ${t.skillsCoverage}\n\n| ${t.skill} | ${t.frequency} | ${t.level} |\n|---|---:|---|\n${rows}\n\n## ${t.gaps}\n\n${gapRows}\n\n## ${t.sourceMethod}\n\n${locale==='ru'?'Взвешенная самооценка на основе AI Engineering Field Guide Алексея Григорьева. Это не сертификация и не гарантия найма.':'Weighted self-assessment based on Alexey Grigorev’s AI Engineering Field Guide. This is not a certification or hiring guarantee.'}\n\nSource: ${SOURCE_URL}\n`
    const url = URL.createObjectURL(new Blob([md],{type:'text/markdown'})); const link = document.createElement('a')
    link.href=url; link.download='ai-engineering-skill-coverage.md'; link.click(); URL.revokeObjectURL(url)
  }

  return <div className="app-shell">
    <header className="hero print-section">
      <div className="hero-controls no-print" aria-label={t.displaySettings}><button className="theme-toggle" onClick={()=>setTheme(theme==='light'?'dark':'light')} aria-pressed={theme==='dark'}><svg aria-hidden="true" viewBox="0 0 20 20"><path d={theme==='light'?'M10 3a7 7 0 1 0 7 7 5.8 5.8 0 0 1-7-7Z':'M10 3v2m0 10v2M3 10h2m10 0h2M5 5l1.4 1.4m7.2 7.2L15 15m0-10-1.4 1.4m-7.2 7.2L5 15M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>{theme==='light'?t.dark:t.light}</button><div className="locale-switch" role="group" aria-label={t.language}><button className={locale==='en'?'active':''} onClick={()=>setLocale('en')}>EN</button><button className={locale==='ru'?'active':''} onClick={()=>setLocale('ru')}>RU</button></div></div>
      <div className="hero-copy"><a className="brand" href="https://pivnev.design">pivnev.design</a><h1>{locale==='ru'?<>Покрытие навыков<br/>AI Engineering</>:<>AI Engineering<br/>Skill Coverage</>}</h1><p className="lead">{t.lead}</p><p className="source-copy">{t.basedBefore}<a href={SOURCE_URL} target="_blank" rel="noreferrer">{t.basedLink}</a>{t.basedAfter}</p><div className="plain-points"><span>{t.noLogin}</span><span>{t.noCourses}</span><span>{t.noPaywall}</span></div></div>
      <aside className="score-panel" aria-label={t.marketCoverage}><div className="score-label">{t.marketCoverage}</div><div className="score-value">{coverage}<span>%</span></div><div className="score-track"><span style={{width:`${coverage}%`}} /></div><div className="score-meta"><span>{t.assessed}</span><strong>{assessed} / {skills.length}</strong></div><p>{t.weighted}</p></aside>
    </header>

    <main>
      <section className="toolbar no-print" aria-label={t.actions}><div className="primary-actions"><button className="button button-primary" onClick={() => setTest({type:'full'})}>{t.fullTest}</button><button className="button" onClick={reset}>{t.reset}</button></div><div className="export-actions"><button className="text-button" onClick={exportMarkdown}>{t.exportMd}</button><button className="text-button" onClick={() => window.print()}>{t.exportPdf}</button><button className="text-button" onClick={() => setMethodology(true)}>{t.methodology}</button></div></section>

      <section className="skills-section print-section"><div className="section-heading"><div><h2>{t.skillsCoverage}</h2></div><p>{t.skillsHelp}</p></div>
        <div className="filters no-print"><label className="search"><span>{t.search}</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.searchPlaceholder} /></label><label><span>{t.category}</span><select value={category} onChange={e=>setCategory(e.target.value as SkillCategory|'all')}><option value="all">{t.allCategories}</option>{[...new Set(skills.map(s=>s.category))].map(c=><option key={c} value={c}>{categoryLabels[locale][c]}</option>)}</select></label><span className="filter-count">{visibleSkills.length} {t.skills}</span></div>
        <div className="table-wrap"><table><thead><tr><th>{t.skill}</th><th>{t.explanation}</th><th>{t.demand}</th><th>{t.assessment}</th><th>{t.resources}</th></tr></thead><tbody>{visibleSkills.map(skill => <tr key={skill.id}>
          <td data-label={t.skill}><div className="skill-name">{skill.name}</div><span className="category">{categoryLabels[locale][skill.category]}</span></td><td data-label={t.explanation} className="description">{skillDescription(skill,locale)}</td><td data-label={t.demand}><div className="demand-value"><strong>{skill.frequencyPercent.toFixed(1)}%</strong>{skill.sourceCount&&<span>{skill.sourceCount} {t.mentions}</span>}</div><div className="demand-bar"><span style={{width:`${skill.frequencyPercent}%`}} /></div></td><td data-label={t.assessment}><div className="assessment-cell"><select className={`level level-${levels[skill.id]}`} value={levels[skill.id]} onChange={e=>updateLevel(skill.id,e.target.value as SkillLevel)} aria-label={`${skill.name} ${t.level}`}><option value="unknown">{levelLabels[locale].unknown}</option><option value="awareness">{levelLabels[locale].awareness}</option><option value="basic">{levelLabels[locale].basic}</option><option value="usable">{levelLabels[locale].usable}</option><option value="strong">{levelLabels[locale].strong}</option></select><button className="row-action no-print" disabled={!skill.questions.length} onClick={() => setTest({type:'skill',skill})}>{skill.questions.length?t.takeTest:t.noQuestions}</button></div></td><td data-label={t.resources}><div className="resources">{skill.resources.length?skill.resources.map(resource=><a href={resource.url} key={resource.url} target="_blank" rel="noreferrer"><span>{resource.title}</span><ExternalArrow/></a>):<span className="muted">—</span>}</div></td>
        </tr>)}</tbody></table></div>
      </section>

      <section className="gaps-section print-section"><div className="section-heading inverted"><div><h2>{t.gaps}</h2></div><p>{t.gapsHelp}</p></div>
        <div className="gap-list">{gaps.length ? gaps.slice(0,10).map((skill,index) => <article className="gap-item" key={skill.id}><span className="gap-rank">{String(index+1).padStart(2,'0')}</span><div><h3>{skill.name}</h3><p>{skillDescription(skill,locale)}</p><div className="gap-links no-print">{skill.resources.slice(0,1).map(r=><a key={r.url} href={r.url} target="_blank" rel="noreferrer">{r.title} <ExternalArrow/></a>)}</div></div><div className="gap-stats"><strong>{skill.frequencyPercent.toFixed(1)}%</strong><span>{levelLabels[locale][levels[skill.id]]}</span></div></article>) : <p className="empty-state">{t.noGaps}</p>}</div>
      </section>

      <section className="method-note print-only"><h2>{t.sourceMethod}</h2><p>{locale==='ru'?'На основе AI Engineering Field Guide Алексея Григорьева. Покрытие — взвешенная самооценка или тест. Это не сертификация и не гарантия найма.':'Based on Alexey Grigorev’s AI Engineering Field Guide. Coverage is a weighted self/test assessment. This is not a certification or hiring guarantee.'}</p><p>{SOURCE_URL}</p></section>
    </main>
    <footer><p>{t.sourceSnapshot}</p><a href={SOURCE_URL} target="_blank" rel="noreferrer">{t.viewRepo} <ExternalArrow/></a></footer>
    {methodology&&<Methodology locale={locale} onClose={()=>setMethodology(false)}/>} {test&&<TestModal mode={test} locale={locale} onClose={()=>setTest(null)} onComplete={completeTest}/>} 
  </div>
}
