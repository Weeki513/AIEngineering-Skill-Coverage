import fs from 'node:fs'

const source = fs.readFileSync(new URL('../src/data/aiEngineeringSkills.ts', import.meta.url), 'utf8')
const seedsStart = source.indexOf('const seeds:')
const seedsEnd = source.indexOf("type QuestionDraft =", seedsStart)
const bankStart = source.indexOf('const questionBank:', seedsEnd)
const bankEnd = source.indexOf('function buildQuestions', bankStart)

if ([seedsStart, seedsEnd, bankStart, bankEnd].some(index => index < 0)) {
  throw new Error('Could not locate seeds or questionBank in aiEngineeringSkills.ts')
}

const seedIds = [...source.slice(seedsStart, seedsEnd).matchAll(/\{ id:'([^']+)'/g)].map(match => match[1])
const bankExpression = source
  .slice(bankStart, bankEnd)
  .replace(/^const questionBank: Record<string, QuestionDraft\[\]> = /, 'return ')
const questionBank = Function(bankExpression)()
const bankIds = Object.keys(questionBank)
const unknownIds = bankIds.filter(id => !seedIds.includes(id))
const missingIds = seedIds.filter(id => !bankIds.includes(id) || questionBank[id].length === 0)

if (unknownIds.length) {
  throw new Error(`questionBank contains ids missing from seeds: ${unknownIds.join(', ')}`)
}

if (missingIds.length) {
  console.warn(`Skills without questions: ${missingIds.join(', ')}`)
}

const questionCount = Object.values(questionBank).reduce((sum, questions) => sum + questions.length, 0)
console.log(`questionBank valid: ${bankIds.length} skill ids, ${questionCount} questions`)
