export type SkillCategory = 'language' | 'cloud' | 'ops' | 'genai' | 'framework' | 'web' | 'database' | 'ml'
export type ResourceType = 'docs' | 'tutorial' | 'academy' | 'quickstart'
export type Resource = { title: string; url: string; type: ResourceType }
export type Question = { id: string; skillId: string; question: string; options: string[]; correctOptionIndex: number; explanation: string }
export type Skill = {
  id: string
  name: string
  description: string
  category: SkillCategory
  frequencyPercent: number
  sourceCount?: number
  normalizedFrom?: string[]
  resources: Resource[]
  questions: Question[]
}

type SkillSeed = Omit<Skill, 'questions'>
const docs = (title: string, url: string, type: ResourceType = 'docs'): Resource => ({ title, url, type })

const seeds: SkillSeed[] = [
  { id:'python', name:'Python', frequencyPercent:82.5, sourceCount:738, category:'language', description:'General-purpose language used across data pipelines, model integration, APIs, and automation.', resources:[docs('Python documentation','https://docs.python.org/3/')] },
  { id:'aws', name:'AWS', frequencyPercent:40.1, sourceCount:359, category:'cloud', description:'Cloud platform for deploying, scaling, securing, and observing production AI systems.', resources:[docs('AWS documentation','https://docs.aws.amazon.com/'),docs('AWS Skill Builder','https://skillbuilder.aws/','academy')] },
  { id:'rag', name:'RAG', frequencyPercent:35.9, sourceCount:321, category:'genai', description:'Retrieval-augmented generation grounds model responses in selected external knowledge.', resources:[docs('OpenAI retrieval guide','https://platform.openai.com/docs/guides/retrieval')] },
  { id:'docker', name:'Docker', frequencyPercent:30.9, sourceCount:277, category:'ops', description:'Packages applications and dependencies into reproducible, portable containers.', resources:[docs('Docker documentation','https://docs.docker.com/'),docs('Docker get started','https://docs.docker.com/get-started/','tutorial')] },
  { id:'cicd', name:'CI/CD', frequencyPercent:29.3, sourceCount:262, category:'ops', description:'Automates validation and controlled delivery of code, models, and infrastructure changes.', resources:[docs('GitHub Actions documentation','https://docs.github.com/en/actions')] },
  { id:'kubernetes', name:'Kubernetes', frequencyPercent:29.1, sourceCount:260, category:'ops', description:'Orchestrates containerized workloads with scheduling, scaling, health checks, and rollout controls.', resources:[docs('Kubernetes documentation','https://kubernetes.io/docs/'),docs('Kubernetes basics','https://kubernetes.io/docs/tutorials/kubernetes-basics/','tutorial')] },
  { id:'prompt-engineering', name:'Prompt engineering', frequencyPercent:29.1, sourceCount:260, category:'genai', description:'Designs instructions, context, and output constraints for reliable model behavior.', resources:[docs('OpenAI prompt engineering','https://platform.openai.com/docs/guides/prompt-engineering')] },
  { id:'llms', name:'LLMs', frequencyPercent:25.4, sourceCount:227, category:'genai', description:'Practical understanding of large language model capabilities, limitations, context, and inference.', resources:[docs('Hugging Face LLM course','https://huggingface.co/learn/llm-course/chapter1/1','academy')] },
  { id:'azure', name:'Azure', frequencyPercent:23.9, sourceCount:214, category:'cloud', description:'Microsoft cloud services for application hosting, data, identity, and managed AI workloads.', resources:[docs('Azure documentation','https://learn.microsoft.com/azure/'),docs('Microsoft Learn for Azure','https://learn.microsoft.com/training/azure/','academy')] },
  { id:'typescript', name:'TypeScript', frequencyPercent:23.4, sourceCount:209, category:'language', description:'Typed JavaScript for safer web applications, SDK integrations, and service development.', resources:[docs('TypeScript handbook','https://www.typescriptlang.org/docs/handbook/intro.html')] },
  { id:'gcp', name:'GCP', frequencyPercent:22.9, sourceCount:205, category:'cloud', description:'Google Cloud services for compute, data processing, model deployment, and operations.', resources:[docs('Google Cloud documentation','https://cloud.google.com/docs'),docs('Google Cloud training','https://cloud.google.com/learn/training','academy')] },
  { id:'pytorch', name:'PyTorch', frequencyPercent:22.0, sourceCount:197, category:'ml', description:'Deep learning framework for tensor computation, training, and model experimentation.', resources:[docs('PyTorch documentation','https://pytorch.org/docs/stable/'),docs('PyTorch tutorials','https://pytorch.org/tutorials/','tutorial')] },
  { id:'langchain', name:'LangChain', frequencyPercent:18.8, sourceCount:168, category:'framework', description:'Framework for composing model calls, tools, retrieval, and application workflows.', resources:[docs('LangChain documentation','https://docs.langchain.com/')] },
  { id:'java', name:'Java', frequencyPercent:14.9, sourceCount:133, category:'language', description:'JVM language used for robust enterprise services and AI platform integrations.', resources:[docs('Java documentation','https://docs.oracle.com/en/java/')] },
  { id:'react', name:'React', frequencyPercent:14.7, sourceCount:132, category:'web', description:'Component-based library for building interactive interfaces for AI-enabled products.', resources:[docs('React documentation','https://react.dev/')] },
  { id:'agents', name:'Agents / agentic workflows', frequencyPercent:14.4, sourceCount:129, category:'genai', description:'Model-driven workflows that choose tools and actions while managing state and control boundaries.', resources:[docs('OpenAI agents guide','https://platform.openai.com/docs/guides/agents')] },
  { id:'tensorflow', name:'TensorFlow', frequencyPercent:12.8, sourceCount:115, category:'ml', description:'Machine learning framework for model development, training, and production deployment.', resources:[docs('TensorFlow documentation','https://www.tensorflow.org/guide'),docs('TensorFlow tutorials','https://www.tensorflow.org/tutorials','tutorial')] },
  { id:'mlops', name:'MLOps', frequencyPercent:12.0, sourceCount:107, category:'ops', description:'Practices for reproducible model delivery, evaluation, monitoring, and lifecycle management.', resources:[docs('Google Cloud MLOps guide','https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning')] },
  { id:'terraform', name:'Terraform', frequencyPercent:11.6, sourceCount:104, category:'ops', description:'Infrastructure-as-code tool for declarative, reviewable cloud resource provisioning.', resources:[docs('Terraform documentation','https://developer.hashicorp.com/terraform/docs'),docs('Terraform tutorials','https://developer.hashicorp.com/terraform/tutorials','tutorial')] },
  { id:'go', name:'Go', frequencyPercent:11.3, sourceCount:101, category:'language', description:'Compiled language suited to efficient network services, platform tooling, and concurrent systems.', resources:[docs('Go documentation','https://go.dev/doc/'),docs('A Tour of Go','https://go.dev/tour/','tutorial')] },
  { id:'vector-databases', name:'Vector databases', frequencyPercent:10.8, sourceCount:97, category:'database', description:'Stores and searches embeddings for semantic retrieval and recommendation workloads.', resources:[docs('Pinecone learning center','https://www.pinecone.io/learn/','academy')] },
  { id:'fastapi', name:'FastAPI', frequencyPercent:10.7, sourceCount:96, category:'web', description:'Python web framework for typed, high-performance APIs and model-serving endpoints.', resources:[docs('FastAPI documentation','https://fastapi.tiangolo.com/')] },
  { id:'sql-postgresql', name:'SQL / PostgreSQL', frequencyPercent:9.8, sourceCount:88, category:'database', normalizedFrom:['SQL','PostgreSQL','Postgres'], description:'Relational querying and durable data storage for application and analytics workloads.', resources:[docs('PostgreSQL documentation','https://www.postgresql.org/docs/')] },
  { id:'openai-api', name:'OpenAI API', frequencyPercent:8.7, sourceCount:78, category:'genai', description:'API platform for integrating OpenAI models, tools, structured outputs, and evaluations.', resources:[docs('OpenAI API documentation','https://platform.openai.com/docs/'),docs('OpenAI quickstart','https://platform.openai.com/docs/quickstart','quickstart')] },
  { id:'fine-tuning', name:'Fine-tuning', frequencyPercent:8.5, sourceCount:76, category:'ml', description:'Adapts a model to examples for specialized behavior when prompting alone is insufficient.', resources:[docs('OpenAI fine-tuning guide','https://platform.openai.com/docs/guides/fine-tuning')] },
  { id:'langgraph', name:'LangGraph', frequencyPercent:8.0, sourceCount:72, category:'framework', description:'Framework for stateful, controllable agent graphs with persistence and human review.', resources:[docs('LangGraph documentation','https://docs.langchain.com/oss/python/langgraph/overview'),docs('LangChain Academy','https://academy.langchain.com/','academy')] },
  { id:'api-rest', name:'APIs / REST / API design', frequencyPercent:6.5, sourceCount:58, category:'web', normalizedFrom:['APIs','REST APIs','REST','API design'], description:'Designs stable service contracts, HTTP semantics, validation, errors, and versioning.', resources:[docs('Microsoft REST API guidelines','https://github.com/microsoft/api-guidelines')] },
  { id:'model-training', name:'Model training', frequencyPercent:6.4, sourceCount:57, category:'ml', description:'Builds repeatable data, optimization, validation, and checkpointing workflows for models.', resources:[docs('PyTorch training tutorial','https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html','tutorial')] },
  { id:'pinecone', name:'Pinecone', frequencyPercent:5.9, sourceCount:53, category:'database', description:'Managed vector database for semantic search and retrieval workloads.', resources:[docs('Pinecone documentation','https://docs.pinecone.io/')] },
  { id:'llamaindex', name:'LlamaIndex', frequencyPercent:5.8, sourceCount:52, category:'framework', description:'Framework for connecting private data to model-powered retrieval and agent applications.', resources:[docs('LlamaIndex documentation','https://docs.llamaindex.ai/')] },
  { id:'anthropic-api', name:'Anthropic API', frequencyPercent:5.5, sourceCount:49, category:'genai', description:'API for building applications with Claude models, tools, and structured prompts.', resources:[docs('Anthropic API documentation','https://docs.anthropic.com/'),docs('Anthropic quickstarts','https://docs.anthropic.com/en/docs/quickstarts','quickstart')] },
  { id:'redis', name:'Redis', frequencyPercent:4.8, sourceCount:43, category:'database', description:'In-memory data store used for caching, queues, rate limits, and low-latency application state.', resources:[docs('Redis documentation','https://redis.io/docs/latest/')] },
  { id:'weaviate', name:'Weaviate', frequencyPercent:4.6, sourceCount:41, category:'database', description:'Open-source vector database for hybrid and semantic search applications.', resources:[docs('Weaviate documentation','https://docs.weaviate.io/weaviate')] },
  { id:'model-evaluation', name:'Model evaluation / evals', frequencyPercent:4.5, sourceCount:40, category:'ml', description:'Measures model and system quality with representative cases, metrics, and regression checks.', resources:[docs('OpenAI evaluation guide','https://platform.openai.com/docs/guides/evals')] },
  { id:'scikit-learn', name:'scikit-learn', frequencyPercent:3.7, sourceCount:33, category:'ml', description:'Python toolkit for classical machine learning, preprocessing, pipelines, and metrics.', resources:[docs('scikit-learn documentation','https://scikit-learn.org/stable/')] },
  { id:'embeddings', name:'Embeddings', frequencyPercent:3.7, sourceCount:33, category:'genai', description:'Vector representations that capture semantic similarity for retrieval and clustering.', resources:[docs('OpenAI embeddings guide','https://platform.openai.com/docs/guides/embeddings')] },
  { id:'crewai', name:'CrewAI', frequencyPercent:3.1, sourceCount:28, category:'framework', description:'Framework for orchestrating role-based agents, tasks, and multi-agent flows.', resources:[docs('CrewAI documentation','https://docs.crewai.com/')] },
  { id:'autogen', name:'AutoGen', frequencyPercent:1.9, sourceCount:17, category:'framework', description:'Microsoft framework for event-driven and conversational multi-agent applications.', resources:[docs('Microsoft AutoGen documentation','https://microsoft.github.io/autogen/stable/')] },
]


type QuestionDraft = Omit<Question, 'id' | 'skillId'>

const questionBank: Record<string, QuestionDraft[]> = {
  "python": [
    {
      "question": "A payment webhook handler receives JSON, uses type hints internally, and then reads `payload[\"event\"][\"id\"]`. Rare real payloads crash with `KeyError`. What is the best review comment?",
      "options": [
        "Catch `KeyError`, log it, and return 200 so the payment provider does not retry malformed events forever",
        "Validate the external payload at the boundary and convert it into an internal typed object before business logic uses it",
        "Add a stricter type annotation to the handler parameter so malformed JSON is rejected before runtime",
        "Replace indexed access with `.get()` everywhere and continue processing when fields are missing"
      ],
      "correctOptionIndex": 1,
      "explanation": "External JSON is untrusted runtime data. Type hints do not validate it. The right boundary is explicit validation, typed internal data, and a clear failure path that does not silently lose payment events."
    },
    {
      "question": "A Python job processes 500k rows. CPU stays below 20%, Postgres receives thousands of small SELECTs per minute, and runtime grows almost linearly with row count. What should be investigated first?",
      "options": [
        "Rewrite the job in a compiled language because low CPU means Python overhead dominates",
        "Batch database access or remove an N+1 query pattern before changing language/runtime",
        "Increase worker count so more SELECTs can run concurrently and hide network latency",
        "Move the job to a larger instance before touching the query pattern"
      ],
      "correctOptionIndex": 1,
      "explanation": "The symptoms point to database round trips, not Python CPU execution. More workers or bigger machines may amplify load. The first useful investigation is query shape, batching, and N+1 behavior."
    },
    {
      "question": "A helper is defined as `def collect(item, bucket=[]): ...`. In production, different requests sometimes see items from previous requests. What is the right fix?",
      "options": [
        "Use `bucket=None` and create a new list inside the function unless shared state is explicitly intended",
        "Call `bucket.clear()` at the start of the function so the shared default list is reset each time",
        "Add a type annotation like `bucket: list = []` so Python treats the default as request-local",
        "Move the helper into the request handler so default arguments are recreated for each request"
      ],
      "correctOptionIndex": 0,
      "explanation": "Mutable default arguments are created once when the function is defined. Use `None` and allocate per call. Clearing a shared object can create its own cross-request bugs."
    },
    {
      "question": "A FastAPI app calls a Python ML preprocessing function from several endpoints. A developer adds a module-level cache dict to speed it up. What is the main production concern?",
      "options": [
        "The cache will be shared consistently across all Gunicorn/Uvicorn workers because Python modules are global",
        "Cache lifetime, memory growth, invalidation, and behavior across multiple workers must be designed explicitly",
        "The cache should be moved into a mutable function default so it survives reloads more reliably",
        "The GIL makes the cache safe enough, so only the cache key format needs review"
      ],
      "correctOptionIndex": 1,
      "explanation": "A process-local cache can be useful, but it needs explicit limits, invalidation, concurrency awareness, and multi-worker expectations. The GIL does not solve cache design or cross-worker consistency."
    }
  ],
  "aws": [
    {
      "question": "An ECS task in a private subnet reads a secret during startup. AWS returns `AccessDeniedException`; VPC endpoints and DNS resolution work. What should you check first?",
      "options": [
        "Whether the ECS task role has `secretsmanager:GetSecretValue` for that secret and KMS access if needed",
        "Whether the IAM user that deployed the service has enough permissions in the AWS console",
        "Whether the security group allows inbound HTTPS from the Secrets Manager endpoint",
        "Whether the task has enough CPU to complete IAM credential resolution before startup timeout"
      ],
      "correctOptionIndex": 0,
      "explanation": "AccessDenied after successful AWS API reachability points to runtime identity/permissions. ECS uses the task role at runtime, not the deployer’s personal IAM identity."
    },
    {
      "question": "A Lambda in a VPC calls a third-party API. After launch, p95 duration rises and some calls time out. NAT exists. App code and SDK both retry failed calls. What is the best first investigation?",
      "options": [
        "Increase memory and timeout first, then look at networking only if errors continue",
        "Move the Lambda out of the VPC immediately, even though it also talks to private RDS",
        "Inspect timeout budget, retry multiplication, external API latency, NAT/egress metrics, and connection reuse",
        "Disable all retries because duplicate retries are always worse than failed requests"
      ],
      "correctOptionIndex": 2,
      "explanation": "The scenario suggests latency and retry amplification. Blindly increasing timeout may hide the problem; moving out of VPC can break private access; disabling retries without understanding failure modes can reduce resilience."
    },
    {
      "question": "GitHub Actions must deploy to AWS. Security rejects long-lived AWS access keys in repository secrets. Which design is strongest?",
      "options": [
        "Use GitHub OIDC to assume a scoped IAM role with branch/environment conditions",
        "Use one shared IAM user key, rotate it monthly, and restrict repository admin access",
        "Store credentials only in protected GitHub environments and keep using access keys",
        "Use a developer’s personal IAM key with MFA on the AWS account"
      ],
      "correctOptionIndex": 0,
      "explanation": "OIDC avoids static credentials and supports scoped trust policies. Protected environments help, but long-lived access keys still create secret-management risk."
    },
    {
      "question": "User-uploaded images are stored on EC2 instance disk. Scaling to multiple instances causes missing files depending on which instance serves the request. What is the better AWS design?",
      "options": [
        "Store images in S3 and serve through CloudFront or signed URLs when appropriate",
        "Use larger EBS volumes on every EC2 instance and sync files during deploys",
        "Use sticky sessions so each user keeps reaching the instance that has their files",
        "Add an Auto Scaling lifecycle hook that copies uploads between instances before traffic starts"
      ],
      "correctOptionIndex": 0,
      "explanation": "Uploaded objects should not depend on a specific instance filesystem. S3 gives shared durable object storage; CloudFront/signed URLs solve serving and access patterns."
    }
  ],
  "rag": [
    {
      "question": "A RAG answer cites three chunks, but none of them support the final claim. Retrieval found related documents, not evidence for the answer. What failed?",
      "options": [
        "Faithfulness/grounding of generation against retrieved evidence",
        "Vector storage, because citations make retrieval quality less important",
        "Temperature selection, because low temperature should guarantee factuality",
        "Citation rendering, because citations should be hidden when confidence is low"
      ],
      "correctOptionIndex": 0,
      "explanation": "RAG requires both relevant retrieval and faithful synthesis. Citations are only useful if the cited text actually supports the claim."
    },
    {
      "question": "A policy assistant answers from a 2024 policy even though a 2026 version exists in the index. Both are semantically similar. What control is most relevant?",
      "options": [
        "Increase top_k and rely on the model to choose the current version from more context",
        "Use metadata/version/date filtering or ranking rules that prefer the active policy",
        "Fine-tune the model on policy language so it better understands company style",
        "Remove dates from chunks so embeddings focus only on semantic content"
      ],
      "correctOptionIndex": 1,
      "explanation": "Freshness is a retrieval/indexing problem. Without version/date metadata, stale but semantically similar documents can outrank current sources."
    },
    {
      "question": "A RAG system misses exact invoice IDs like `INV-2026-00419`, but retrieves semantically similar billing docs. What is the strongest improvement?",
      "options": [
        "Use hybrid retrieval or an exact-match/metadata lookup path for identifiers",
        "Increase top_k so the invoice ID has a better chance of appearing somewhere",
        "Store only summaries of chunks because raw IDs distract embeddings",
        "Ask the model to infer missing invoice numbers from nearby billing context"
      ],
      "correctOptionIndex": 0,
      "explanation": "Embeddings are weak for exact identifiers. IDs, SKUs, and invoice numbers often need lexical, hybrid, or metadata-based retrieval."
    },
    {
      "question": "A team chunks PDFs by fixed 500-token windows. Answers often miss definitions that appear just before the retrieved chunk. What should be reviewed?",
      "options": [
        "Chunking strategy, overlap, document structure, and whether retrieval returns enough surrounding context",
        "Only the final answer prompt because retrieval already returned a relevant chunk",
        "Embedding model size first because chunk boundaries rarely affect answer quality",
        "UI copy around citations because users may be misreading correct answers"
      ],
      "correctOptionIndex": 0,
      "explanation": "Chunk boundaries shape the context the model sees. Structure-aware chunking, overlap, parent-child retrieval, or neighbor expansion may be needed."
    },
    {
      "question": "A RAG service p95 latency doubled after a deploy. Token usage is stable, but vector search p95 and reranker p95 both increased. What should be investigated first?",
      "options": [
        "Retrieval/reranking latency, index changes, filters, top_k, and downstream service health",
        "The wording of the final answer prompt because answer style often affects latency",
        "The frontend cache because backend p95 is often caused by repeated client requests",
        "The model provider because token usage staying stable proves retrieval cannot be the issue"
      ],
      "correctOptionIndex": 0,
      "explanation": "The changed latency is visible in retrieval and reranking spans. Observability should guide investigation toward the slow subsystem first."
    },
    {
      "question": "A RAG assistant can answer questions over internal documents. A user asks it to ignore previous instructions and print any secrets in retrieved context. What must the system rely on?",
      "options": [
        "Access control, retrieval filtering, secret redaction, and output validation outside the prompt",
        "A stronger system prompt saying secrets are confidential",
        "Lower temperature so the model becomes more resistant to prompt injection",
        "Hiding document titles from the frontend while keeping full chunks in context"
      ],
      "correctOptionIndex": 0,
      "explanation": "Prompt injection is expected. Sensitive data protection must be enforced by system design, not only by model instructions."
    }
  ],
  "docker": [
    {
      "question": "A Docker image for a Python API is 2.4GB and contains build tools, pip cache, tests, and temporary build artifacts. Production only needs the installed app. What is the best improvement?",
      "options": [
        "Use a multi-stage build and copy only runtime dependencies/artifacts into the final image",
        "Add cleanup commands near the end of the Dockerfile while keeping the same build layers",
        "Use a larger base image with more preinstalled dependencies to reduce failed builds",
        "Compress the final image artifact in CI before pushing it to the registry"
      ],
      "correctOptionIndex": 0,
      "explanation": "Multi-stage builds separate build-time and runtime dependencies. Removing files in later layers often does not remove earlier layer history meaningfully."
    },
    {
      "question": "A Docker build is slow and the build context includes `.env`, screenshots, and local datasets. The Dockerfile does not copy those files. What is still wrong?",
      "options": [
        "Nothing; files not copied by `COPY` are never sent to the Docker daemon or builder",
        "The image should delete `.env` after dependency installation to avoid leaking it",
        "A `.dockerignore` should exclude local/sensitive files before the context is sent",
        "The files should be copied only in the final stage so earlier cache layers stay stable"
      ],
      "correctOptionIndex": 2,
      "explanation": "The build context is prepared before Dockerfile COPY decisions. `.dockerignore` prevents unnecessary and sensitive local files from being sent at all."
    },
    {
      "question": "A containerized app writes uploads to `/app/uploads`. Everything works until redeploy replaces the container, then files disappear. What is the correct design change?",
      "options": [
        "Use persistent storage outside the container lifecycle, such as a volume or object storage",
        "Set `restart: always` so Docker preserves the writable layer across replacements",
        "Bake uploads into the image during the next build so future containers contain them",
        "Mount the application source directory as read-write so uploads stay near the code"
      ],
      "correctOptionIndex": 0,
      "explanation": "Container writable layers are not durable application storage. Uploads need a volume, object storage, or another persistent system."
    },
    {
      "question": "A production container runs as root. The app only needs to listen on port 8080 and read config files. What is the best security review comment?",
      "options": [
        "Run as a non-root user and grant only the filesystem/network permissions the process actually needs",
        "Root is acceptable because containers already isolate the process from the host completely",
        "Root is acceptable if the image is built in CI and scanned before deployment",
        "Keep root but mount the filesystem read-only to remove all privilege risk"
      ],
      "correctOptionIndex": 0,
      "explanation": "Least privilege still matters inside containers. Image scanning and read-only filesystems help, but they do not replace running the process with minimal privileges."
    }
  ],
  "cicd": [
    {
      "question": "A flaky integration test fails about 8% of the time. The team reruns CI until it passes because production seems fine. What is the best engineering response?",
      "options": [
        "Quarantine or mark ownership for the test, investigate the failure mode, and stop treating reruns as clean signal",
        "Delete the test immediately because flaky tests are always worse than no tests",
        "Increase the timeout globally and consider the issue resolved if CI becomes green",
        "Move the test to a nightly job and ignore failures unless customers complain"
      ],
      "correctOptionIndex": 0,
      "explanation": "Flakes destroy trust in CI but may reveal real races, timing bugs, or environment assumptions. They need ownership and isolation, not blind reruns."
    },
    {
      "question": "A deploy pipeline pushes directly to production. There is no smoke test, health check, traffic gate, or rollback command. What is the main risk?",
      "options": [
        "A bad release is discovered by users and recovery depends on improvisation",
        "The pipeline will be too slow because rollback logic consumes CI minutes",
        "Unit tests become less useful once deployment health checks are added",
        "A staging environment is impossible to create after production already exists"
      ],
      "correctOptionIndex": 0,
      "explanation": "The core issue is lack of controlled validation and recovery. Staging is one option, but the real need is health detection, traffic control, and rollback."
    },
    {
      "question": "A model-serving app passes unit tests but fails after deploy because `MODEL_PATH` points to a missing artifact in production. What would catch this best?",
      "options": [
        "More unit tests for pure functions that do not touch runtime configuration",
        "A runtime smoke test in the target environment before shifting traffic",
        "Moving `MODEL_PATH` into source code so config cannot differ by environment",
        "A build-time check that only verifies the variable is present in CI"
      ],
      "correctOptionIndex": 1,
      "explanation": "Unit tests do not prove that production config, secrets, model artifacts, and runtime paths are wired correctly. Environment smoke tests do."
    },
    {
      "question": "A CI job needs a package registry token only for publishing releases. Currently the token is available to all pull request jobs. What should change?",
      "options": [
        "Scope the secret to the release job/environment and avoid exposing it to untrusted PR workflows",
        "Keep the token global because CI systems mask secrets in logs",
        "Use the same token for local development and CI so failures are easier to reproduce",
        "Put the token in a repository variable instead of a secret so access is easier to audit"
      ],
      "correctOptionIndex": 0,
      "explanation": "Secrets should be scoped to the smallest workflow/environment that needs them. Masking helps logs but does not make broad secret exposure safe."
    },
    {
      "question": "An automated workflow sometimes charges a customer twice. Metrics show retries increased after transient payment API failures. What observability signal is most important?",
      "options": [
        "Correlation between retries, idempotency keys, external payment responses, and side-effect attempts",
        "Average response length of the model-generated customer message",
        "Frontend click frequency on the checkout button alone",
        "Whether retry logs use consistent severity names"
      ],
      "correctOptionIndex": 0,
      "explanation": "For side-effecting workflows, you need traceability across attempts, idempotency keys, and external API outcomes. Otherwise duplicate effects are hard to prove and prevent."
    }
  ],
  "kubernetes": [
    {
      "question": "A Pod loads model weights for 45 seconds. The manifest has a liveness probe with `initialDelaySeconds: 5`, and the Pod enters CrashLoopBackOff. What is the likely fix?",
      "options": [
        "Add or tune a startup probe and adjust liveness timing so Kubernetes does not kill normal startup",
        "Increase replica count so at least one Pod survives aggressive liveness checks",
        "Remove the Service so traffic cannot reach the Pod before startup finishes",
        "Raise CPU limits first because liveness failures usually mean the node is too small"
      ],
      "correctOptionIndex": 0,
      "explanation": "An aggressive liveness probe can kill slow-starting apps. Startup probes and realistic timings separate startup delay from a deadlocked process."
    },
    {
      "question": "During rollout, Pods start successfully but receive traffic before cache warmup finishes. Users intermittently get 503s. What should be checked first?",
      "options": [
        "Readiness probe behavior and rollout strategy",
        "Whether the image was built on the same platform as the previous release",
        "Whether the namespace name matches the deployment environment",
        "Whether the app should warm the cache in a background thread after serving starts"
      ],
      "correctOptionIndex": 0,
      "explanation": "Readiness decides whether a Pod should receive traffic. Startup alone does not mean the app is ready to serve."
    },
    {
      "question": "A Deployment uses `image: app:latest`. A rollback to yesterday’s manifest still pulls today’s broken image. What is the core issue?",
      "options": [
        "Mutable tags make the manifest non-reproducible; use immutable tags or digests",
        "Kubernetes rollbacks require a custom controller when images are hosted outside the cluster",
        "Readiness probes prevent rollback from selecting an older ReplicaSet",
        "The image pull policy should be disabled so nodes keep whatever image they already have"
      ],
      "correctOptionIndex": 0,
      "explanation": "Rollback only works reliably when the manifest points to immutable image content. `latest` can mean different images at different times."
    },
    {
      "question": "A Pod can reach a database by IP, but other Pods cannot reliably reach this app because its Pod IP changes after rescheduling. What is missing?",
      "options": [
        "A Kubernetes Service selecting the app Pods to provide stable discovery/routing",
        "A PersistentVolume so the Pod keeps the same IP after restart",
        "A fixed node assignment so the Pod is always scheduled onto the same machine",
        "A ConfigMap containing the current Pod IP that clients can read before each request"
      ],
      "correctOptionIndex": 0,
      "explanation": "Pods are ephemeral and their IPs can change. Services provide a stable network abstraction over changing Pod sets."
    }
  ],
  "prompt-engineering": [
    {
      "question": "A prompt classifies support tickets into `billing`, `bug`, `feature`, or `other`. It works on five demo examples but fails on messy real tickets with multiple intents. What is missing?",
      "options": [
        "Representative eval cases, edge cases, and explicit rules for ambiguous or multi-intent inputs",
        "More forceful wording so the model treats the labels as mandatory",
        "A longer business context paragraph before the classification task",
        "Fewer examples so the model is not biased by the demo tickets"
      ],
      "correctOptionIndex": 0,
      "explanation": "Prompt quality needs realistic evals, not demo success. Ambiguous and multi-intent cases need a defined policy."
    },
    {
      "question": "A model output is consumed by code expecting `{ \"action\": \"...\", \"confidence\": number }`. Occasional malformed responses break production. What is strongest?",
      "options": [
        "Ask for JSON in the prompt and manually test several examples before release",
        "Use structured output/schema constraints where available and validate before downstream execution",
        "Parse the response with a tolerant regex and default missing fields",
        "Retry the same prompt until the model returns parseable JSON"
      ],
      "correctOptionIndex": 1,
      "explanation": "Programmatic consumption needs schema enforcement and validation. Prompts alone are not a reliable parser; retries can help but do not replace validation."
    },
    {
      "question": "A prompt says “always be concise” and “quote the full policy section verbatim”. Outputs alternate between too short and too long. What is the issue?",
      "options": [
        "The instructions create an unresolved priority conflict",
        "The task requires fine-tuning before any prompt can work reliably",
        "The temperature is too low to balance both writing goals",
        "The examples should be removed so the model follows only the latest instruction"
      ],
      "correctOptionIndex": 0,
      "explanation": "Conflicting goals need priority rules or conditional behavior, for example concise summary plus exact quote only when requested."
    },
    {
      "question": "A prompt includes examples where the label contradicts the written instruction. The model follows the examples more often than the instruction. What should be fixed?",
      "options": [
        "Make examples and instructions consistent, or remove misleading examples",
        "Add more examples with mixed labels so the model averages them out",
        "Increase temperature so the model explores both interpretations",
        "Move the instruction after the examples and keep the contradictory examples"
      ],
      "correctOptionIndex": 0,
      "explanation": "Few-shot examples are strong behavioral signals. Contradictory examples create unstable outputs and should be corrected or removed."
    }
  ],
  "llms": [
    {
      "question": "An LLM gives a confident answer with a citation-looking URL, but no retrieval tool was used and the URL does not exist. What does this demonstrate?",
      "options": [
        "The model has implicit browsing access whenever it writes a URL",
        "A citation-shaped string is not grounding; factual workflows need retrieved or verified evidence",
        "The answer is probably correct if the rest of the explanation sounds specific",
        "The citation should be hidden from users so the answer is judged on content only"
      ],
      "correctOptionIndex": 1,
      "explanation": "LLMs can generate plausible references. Grounded workflows require actual retrieved/tool evidence, not merely citation-shaped text."
    },
    {
      "question": "A 90-page document fits in the context window, but the model misses a constraint in the middle and gives the wrong recommendation. What is the best interpretation?",
      "options": [
        "Large context capacity does not guarantee reliable use of every relevant detail",
        "The model cannot process long documents unless they are converted to JSON first",
        "The only reliable fix is fine-tuning on that exact document",
        "The missed constraint proves the document should have been summarized into one paragraph"
      ],
      "correctOptionIndex": 0,
      "explanation": "Large context windows help but do not guarantee perfect attention or reasoning. Focused extraction, retrieval, or structured passes may still be needed."
    },
    {
      "question": "A classification task needs stable repeatable outputs for downstream automation. Which setup is most appropriate?",
      "options": [
        "Lower randomness, constrained output format, validation, and evals on representative cases",
        "Higher temperature so borderline cases get more creative labels",
        "No schema because natural language labels are easier for the model",
        "Manual review of a few examples because deterministic settings remove the need for evals"
      ],
      "correctOptionIndex": 0,
      "explanation": "Stable automation needs constrained outputs, low randomness, validation, and evaluation. Deterministic settings alone do not prove correctness."
    },
    {
      "question": "A model can call a `refund_customer` tool. The model receives user chat text and decides whether to call it. What must the application enforce?",
      "options": [
        "Authorization, amount limits, input validation, audit logs, and approval rules outside the model",
        "A system prompt saying refunds are sensitive and should be handled carefully",
        "A low temperature so the model is less likely to make unsafe tool calls",
        "A second model call that asks whether the first model seemed confident"
      ],
      "correctOptionIndex": 0,
      "explanation": "Tool calls can have real side effects. Safety and permissions must be enforced by the application, not trusted to the model prompt."
    }
  ],
  "azure": [
    {
      "question": "Azure Function reads a secret from Key Vault using Managed Identity. It works locally with developer credentials, but fails in Azure with 403. Network access to Key Vault is available. What should be checked first?",
      "options": [
        "Is the Function App managed identity assigned the required role/access policy for the specific secret",
        "Does the developer have Owner role on the subscription from which the deployment was made",
        "Is the Function timeout long enough for the identity to issue a token",
        "Do we need to copy the secret value into App Settings to avoid using Key Vault at runtime"
      ],
      "correctOptionIndex": 0,
      "explanation": "In Azure runtime, identity refers to the managed identity of the resource, not developer credentials. When network access to Key Vault is working, a 403 error typically indicates an RBAC/access policy or scope issue."
    },
    {
      "question": "App Service connects to Azure SQL. The connection string is stored in plain App Settings, and deployment logs occasionally print environment variables. What's the best review comment?",
      "options": [
        "Move the secret to a Key Vault reference or managed secret path and restrict access to the managed identity",
        "Leave App Settings, as Azure automatically treats all variables as secure",
        "Base64-encode the connection string to prevent it from appearing as a secret in logs",
        "Rename the variable to something less obvious to avoid scanners finding it"
      ],
      "correctOptionIndex": 0,
      "explanation": "Connection strings and credentials should be stored as secrets with access control and redaction. Base64 encoding and obscure names do not provide security."
    },
    {
      "question": "AKS workload connects to Azure Storage. The team wants to place the storage account key in a Kubernetes Secret. Security requests to remove long-lived keys. What's stronger?",
      "options": [
        "Use workload identity/managed identity and grant minimal RBAC permissions for storage",
        "Keep the account key but rotate it manually more frequently after each deployment",
        "Place the key in a ConfigMap to simplify secret management for DevOps",
        "Allow public container access so the application doesn't need credentials"
      ],
      "correctOptionIndex": 0,
      "explanation": "Managed/workload identity eliminates long-lived shared secrets and allows scoped permissions. Storage account keys are too broad and difficult to control."
    },
    {
      "question": "Azure ML endpoint sometimes returns an old model after deployment, even though a new version is registered. Traffic split and deployment name haven't changed. What should be checked?",
      "options": [
        "Which model version is actually bound to the active deployment and where traffic is routed",
        "Is there a new model artifact in the developer's local folder",
        "Is it enough to restart the browser because Azure Portal caches predictions",
        "Do we need to delete all old model versions from the registry so the endpoint selects the new one"
      ],
      "correctOptionIndex": 0,
      "explanation": "Registering a new model version does not automatically switch serving. We need to explicitly check the binding of deployment → model version and traffic routing."
    }
  ],
  "typescript": [
    {
      "question": "A frontend receives JSON from `/api/user`, casts it as `User`, and renders `user.plan.name`. A backend deploy starts returning `plan: null` for free users. What is the best fix?",
      "options": [
        "Add a runtime decoder/schema at the API boundary and model `plan` as nullable in TypeScript",
        "Keep the cast and add a React error boundary so the page recovers after crashing",
        "Change `plan` to `any` so the frontend can tolerate future backend changes",
        "Move the `User` interface into a shared package and keep using `as User` at runtime"
      ],
      "correctOptionIndex": 0,
      "explanation": "TypeScript types do not validate runtime data. The API boundary needs runtime validation/decoding, and the static type must reflect the real nullable contract."
    },
    {
      "question": "A UI handles `status: \"queued\" | \"running\" | \"failed\" | \"done\"`. The backend adds `\"cancelled\"`, and the UI silently shows it as done because of a default branch. What would make this safer?",
      "options": [
        "Keep the default branch but render the most optimistic state so users are not blocked",
        "Use `string` instead of a union so the frontend can accept future backend values",
        "Use an exhaustive switch with a `never` check and handle unknown runtime values at the boundary",
        "Normalize unknown statuses to `\"done\"` only after logging them"
      ],
      "correctOptionIndex": 2,
      "explanation": "Exhaustive handling catches missing variants during development. Since backend data is runtime input, unknown values also need safe boundary handling instead of silently becoming success states."
    },
    {
      "question": "A codebase uses `any` for most API responses because backend contracts change often. Bugs appear only after release when fields are missing. What is the best direction?",
      "options": [
        "Replace `any` with `unknown` at boundaries, validate/decode responses, then expose typed domain objects internally",
        "Keep `any`, but add comments and examples near every API call",
        "Use `as User` casts consistently so incorrect assumptions are easier to search for",
        "Disable strict mode in integration-heavy modules because changing contracts make strict typing too noisy"
      ],
      "correctOptionIndex": 0,
      "explanation": "`any` removes compiler protection exactly where integration bugs happen. `unknown` plus runtime validation keeps the boundary honest while preserving internal type safety."
    },
    {
      "question": "A library function returns `{ ok: true, data } | { ok: false, error }`. A caller accesses `.data` without checking `.ok`. What TypeScript pattern should be used?",
      "options": [
        "A discriminated union with narrowing on `ok` before accessing success-only fields",
        "A class with nullable `data` and nullable `error` fields so both states share one shape",
        "A type assertion at call sites where success is expected by product logic",
        "An exception inside the library so callers do not need to model failure in the return type"
      ],
      "correctOptionIndex": 0,
      "explanation": "A discriminated union makes success and failure states explicit. Nullable fields and assertions make invalid states easier to represent and miss."
    }
  ],
  "gcp": [
    {
      "question": "Cloud Run service calls Cloud SQL. The local service account key works, but requests fail in production with permission denied. What should be checked first?",
      "options": [
        "Runtime service account for Cloud Run and its IAM roles/Cloud SQL permissions",
        "IAM permissions of the user who deployed in the console",
        "Is the max instances for Cloud Run high enough?",
        "Can the local service account key be placed inside the container image?"
      ],
      "correctOptionIndex": 0,
      "explanation": "In production, GCP uses the runtime service account for the service. Developer credentials do not prove that the deployed workload has the necessary permissions."
    },
    {
      "question": "Cloud Run accepts public HTTP requests and calls Vertex AI. After launch, costs have spiked sharply: bots are hammering the endpoint, but authentication is not failing. What should be added?",
      "options": [
        "Authentication/authorization, quotas/rate limits, and cost monitoring for expensive model calls",
        "A cheaper region, because public access itself does not affect costs",
        "More min instances to make the model respond faster and cheaper",
        "A prompt that asks users not to abuse the endpoint"
      ],
      "correctOptionIndex": 0,
      "explanation": "Expensive AI calls cannot be left behind an unauthenticated public endpoint without limits. Cost control must be enforced at the infrastructure level."
    },
    {
      "question": "The pipeline writes training data to a GCS bucket. Data scientists manually overwrite `latest.csv`, and experiment reproducibility breaks. What's better?",
      "options": [
        "Version datasets/artifacts and reference immutable paths or object versions",
        "Keep `latest.csv` but agree to write more carefully in Slack",
        "Download the dataset to a VM and train only from local disk",
        "Disable object versioning to avoid accidentally using old files"
      ],
      "correctOptionIndex": 0,
      "explanation": "ML pipelines require reproducible input artifacts. Mutable `latest` is useful as an alias, but the training run must reference a specific version of the data."
    },
    {
      "question": "Pub/Sub consumer sometimes processes the same message twice. The developer considers this a GCP bug and wants to disable retries. What's the better approach?",
      "options": [
        "Make the handler idempotent and explicitly design ack/retry/dead-letter behavior",
        "Disable retries completely, because duplicate processing is always worse than lost messages",
        "Increase the ack deadline to a day to make duplicates impossible",
        "Store processed IDs only in the memory of the consumer process"
      ],
      "correctOptionIndex": 0,
      "explanation": "At-least-once delivery means duplicate processing is possible. Reliable consumers must be idempotent and have a clear retry/DLQ strategy."
    }
  ],
  "pytorch": [
    {
      "question": "PyTorch training loop calls `loss.backward()` for each batch but does not call `optimizer.zero_grad()`. The loss behaves unstably. What is happening?",
      "options": [
        "Gradients accumulate between batches if not explicitly reset",
        "PyTorch automatically resets gradients after each `optimizer.step()`",
        "`backward()` directly updates weights, so the optimizer is redundant",
        "The problem is only with the learning rate; gradients cannot accumulate by default"
      ],
      "correctOptionIndex": 0,
      "explanation": "In PyTorch, gradients accumulate in `.grad`. They need to be reset before a new step if accumulation is not explicitly intended."
    },
    {
      "question": "During validation, GPU memory grows even though the model is not training. The code performs a forward pass without `torch.no_grad()` and saves predictions. What should be fixed?",
      "options": [
        "Run validation/inference in `torch.no_grad()` or `torch.inference_mode()` and do not save graph tensors when unnecessary",
        "Reduce the batch size because validation always requires as much memory as training",
        "Call `model.train()` before validation to free the computation graph",
        "Move predictions to a GPU list to prevent CPU from blocking memory release"
      ],
      "correctOptionIndex": 0,
      "explanation": "Without disabling autograd, PyTorch builds the computation graph even during validation. This consumes memory and may be held if tensors are saved."
    },
    {
      "question": "A model with Dropout and BatchNorm gives different results on the same input in production. What should be checked first?",
      "options": [
        "Is `model.eval()` called before inference?",
        "Is `optimizer.step()` used after each prediction?",
        "Are the training dataset saved alongside model weights?",
        "Is the number of DataLoader workers increased enough?"
      ],
      "correctOptionIndex": 0,
      "explanation": "`model.eval()` switches Dropout/BatchNorm to inference behavior. Without this, production predictions may behave like training passes."
    },
    {
      "question": "Training on GPU is slow. The DataLoader reads images from disk, CPU is busy, and GPU is idle. What should be checked first?",
      "options": [
        "Data pipeline: batching, preprocessing, num_workers, pinned memory, caching, and I/O bottleneck",
        "Replace the optimizer because GPU idle almost always indicates a bad optimizer",
        "Increase the model size to finally occupy the GPU",
        "Move labels to GPU in advance without changing image loading"
      ],
      "correctOptionIndex": 0,
      "explanation": "If the GPU is idle, the bottleneck is often in the input pipeline. Need to measure DataLoader/I/O/preprocessing, not just model compute."
    }
  ],
  "langchain": [
    {
      "question": "A LangChain RAG app returns weak answers. Traces show the final prompt is reasonable, but retrieved documents are off-topic. Where should you look first?",
      "options": [
        "Retriever configuration, chunking, embeddings, filters, and query transformation",
        "Only the final answer prompt, because generation can compensate for noisy retrieval",
        "The frontend state layer, because UI bugs often change which documents are shown",
        "The model temperature, because retrieval relevance is mostly controlled by randomness"
      ],
      "correctOptionIndex": 0,
      "explanation": "If the context is wrong, answer prompting cannot reliably fix the system. Retrieval diagnostics come first."
    },
    {
      "question": "A simple endpoint sends one prompt to one model and returns the result. A proposed LangChain rewrite adds chains, memory, callbacks, and agents. What is the best review concern?",
      "options": [
        "The abstraction may add complexity without solving a real orchestration problem",
        "LangChain should be avoided whenever the app uses direct model calls",
        "Every LLM call should become an agent so it can be extended later",
        "Direct model calls cannot be logged, traced, or tested"
      ],
      "correctOptionIndex": 0,
      "explanation": "Frameworks are valuable when they reduce orchestration complexity. For simple calls, direct API usage may be clearer."
    },
    {
      "question": "A LangChain chain hides prompt formatting, retrieval, reranking, and tool calls behind one helper. Incidents are hard to debug. What should be improved?",
      "options": [
        "Tracing, explicit step boundaries, testable components, and observable inputs/outputs",
        "Fewer logs so the chain behaves consistently across environments",
        "More memory variables so all steps share hidden context",
        "Moving prompts into frontend components so product teams can edit them quickly"
      ],
      "correctOptionIndex": 0,
      "explanation": "LLM workflows need inspectable boundaries. Traces and component-level tests make failures diagnosable."
    },
    {
      "question": "A LangChain app uses conversational memory in a support workflow. Users sometimes see answers influenced by previous unrelated tickets. What should be checked?",
      "options": [
        "Memory scoping, session isolation, and what history is injected into each prompt",
        "Whether the vector database has enough dimensions for long conversations",
        "Whether all previous conversations should be summarized into one global memory",
        "Whether the final prompt is long enough to override leaked context"
      ],
      "correctOptionIndex": 0,
      "explanation": "Memory must be scoped correctly. Cross-session or cross-ticket context leakage is a serious correctness and privacy problem."
    }
  ],
  "java": [
    {
      "question": "Java service creates a new HTTP client for each request to the model API. Under load, latency spikes and socket exhaustion occur. Which review comment is best?",
      "options": [
        "Reuse thread-safe HTTP client/connection pool and configure timeouts",
        "Create client in each method to avoid shared mutable state",
        "Increase heap memory because Java network clients are mostly memory-bound",
        "Wrap all API calls in synchronized to open sockets sequentially"
      ],
      "correctOptionIndex": 0,
      "explanation": "HTTP clients are typically designed for reuse and connection pooling. Creating a client for each request breaks pooling and can exhaust sockets."
    },
    {
      "question": "Spring Boot endpoint accepts `Map<String, Object>` and passes fields to billing logic. Errors occur when the client sends `amount` as a string. What's better?",
      "options": [
        "Use a typed request DTO with Bean Validation and explicit error at the boundary",
        "Keep the Map and convert `amount` via `toString()` before calculation",
        "Catch `ClassCastException` in the billing layer and return 200",
        "Check types only in the frontend to keep the backend flexible"
      ],
      "correctOptionIndex": 0,
      "explanation": "External JSON payloads should be validated at the API boundary. Typed DTO and validation make the contract explicit before business logic."
    },
    {
      "question": "Java batch job processes a parallel stream of 100k items, each item triggers a database query. The DB starts timing out. What's wrong?",
      "options": [
        "Parallelism increased N+1/database round trips; need batch/query design and controlled concurrency",
        "Parallel stream is always safer than a regular loop for I/O-heavy jobs",
        "Need to increase ForkJoinPool to the size of the table",
        "Need to add `synchronized` around each query to prevent the database from overheating"
      ],
      "correctOptionIndex": 0,
      "explanation": "Parallel stream does not fix a poor access pattern. For databases, batching, connection pool limits, and query shape are important."
    },
    {
      "question": "Service catches `Exception`, logs the stack trace, and returns a generic success response to prevent upstream retries. Later, lost orders are found. Which fix is better?",
      "options": [
        "Separate recoverable/non-recoverable errors, return correct statuses, and save failures for retry/DLQ",
        "Keep the catch-all but add more log fields",
        "Remove logging to avoid exceptions slowing the happy path",
        "Return success only for NullPointerExceptions because they are usually harmless"
      ],
      "correctOptionIndex": 0,
      "explanation": "Catch-and-success can silently lose business events. Error handling should express retry semantics and save failed work."
    }
  ],
  "react": [
    {
      "question": "A React component makes an API call directly in the render body. With each state update, the request repeats, causing a flood of calls to the backend. What should be fixed?",
      "options": [
        "Move side effects to `useEffect`/data-fetching layer with correct dependencies and cancellation handling",
        "Wrap fetch in `useMemo` to ensure React executes it only once",
        "Add debounce to setState without changing the location of the API call",
        "Make the component class-based, since hooks cause unnecessary renders"
      ],
      "correctOptionIndex": 0,
      "explanation": "Render should be pure. Network side effects must live in the effect/data layer, otherwise any render can trigger a new request."
    },
    {
      "question": "The UI shows old search results: the user quickly enters a new query, but the slower response from the previous query arrives last and overwrites the state. What should be considered?",
      "options": [
        "Race conditions between requests: abort/cancel, request IDs, or stale-response guards",
        "React state updates always apply in the order of HTTP requests",
        "Increase the backend timeout to make responses arrive more steadily",
        "Store results in localStorage to prevent React from losing order"
      ],
      "correctOptionIndex": 0,
      "explanation": "Asynchronous responses may arrive out of request order. The UI must protect against stale updates."
    },
    {
      "question": "A React app receives `user.plan.name`, but the backend sometimes returns `plan: null`. The error boundary hides the entire page crash, but users see an empty block. What should be done?",
      "options": [
        "Make the API contract/validation honest and explicitly handle nullable/loading/error states in the UI",
        "Keep the error boundary because it already prevents the entire app from crashing",
        "Use optional chaining everywhere and show undefined as a normal value",
        "Ask the backend to never change the shape without updating frontend code"
      ],
      "correctOptionIndex": 0,
      "explanation": "Error boundaries are the last line of defense; they don't follow normal control flow. The UI should model real data states."
    },
    {
      "question": "A large table in React renders 20k rows, each key is the array index. When sorting rows, checkboxes sometimes get the wrong state. What's wrong?",
      "options": [
        "Index keys break identity during reordering; a stable item ID is needed, and possibly virtualization",
        "React doesn't support interactive tables with more than 1k rows",
        "Checkbox state should be stored only within the row component",
        "Sort on the backend so keys no longer matter"
      ],
      "correctOptionIndex": 0,
      "explanation": "Keys define element identity. Index keys are dangerous during reorder/filter/insert; for large lists, virtualization/performance design is also needed."
    }
  ],
  "agents": [
    {
      "question": "An internal agent can search docs, update CRM records, and request refunds. A PM wants it to run without review. What must be designed before launch?",
      "options": [
        "Approval gates, permission scopes, audit logs, limits, and reversal procedures for high-impact actions",
        "A clearer agent persona so support staff know when it is acting autonomously",
        "A longer system prompt explaining that refunds and CRM writes are sensitive",
        "A fallback model so the agent can retry risky actions with another provider"
      ],
      "correctOptionIndex": 0,
      "explanation": "Agents with side effects need explicit product and system boundaries. Money, customer data, and irreversible actions require controls outside the model."
    },
    {
      "question": "An agent loops between “search docs” and “summarize findings” until the request times out. Logs show no explicit stop rule. What is missing?",
      "options": [
        "A step budget, termination condition, or state transition guard",
        "A bigger context window so the agent remembers it already searched",
        "A second research agent to verify whether the first agent is finished",
        "A lower temperature so the agent becomes less likely to choose another step"
      ],
      "correctOptionIndex": 0,
      "explanation": "Agentic workflows need explicit control flow and stop conditions. More context may help some cases, but it does not replace termination logic."
    },
    {
      "question": "A coding agent can edit files and run shell commands in a repository. It occasionally deletes generated files that another process needs. What is the best production control?",
      "options": [
        "Sandbox execution, scoped filesystem permissions, diff review, allowlists, and audit logs",
        "Tell the model not to delete files unless the user explicitly asks",
        "Give the agent access to the whole filesystem so it can restore deleted files itself",
        "Run the agent only at night so accidental deletions affect fewer active users"
      ],
      "correctOptionIndex": 0,
      "explanation": "Code/file agents need hard boundaries and reviewable actions. Prompting the model to be careful is not enough."
    },
    {
      "question": "A business asks for “an agent that handles refunds end-to-end”. What should be clarified before implementation?",
      "options": [
        "Which decisions are automated, which require approval, how exceptions are handled, and how mistakes are detected/reversed",
        "Which model has the strongest agent benchmark score for financial workflows",
        "Whether the agent should hide low-confidence decisions from operators",
        "How to make the workflow fully autonomous before defining refund policy"
      ],
      "correctOptionIndex": 0,
      "explanation": "Before building an agent, define decision rights, risk boundaries, exception handling, and recovery. “End-to-end” is not a sufficient spec."
    },
    {
      "question": "An agent has a `fetch_url` tool and summarizes webpages. Users can provide arbitrary URLs. What security risk should be considered?",
      "options": [
        "SSRF, internal metadata access, malicious content, and data exfiltration through fetched pages",
        "The summary may be too long if the fetched page has a lot of text",
        "The model may become slower because URLs contain uncommon tokens",
        "The frontend may render unsafe characters in the visible URL"
      ],
      "correctOptionIndex": 0,
      "explanation": "User-controlled fetching can expose internal networks or secrets and can feed malicious instructions into the model. URL tools need allowlists, network controls, and sanitization."
    },
    {
      "question": "A stakeholder asks to “make an agent” for a workflow that is currently three deterministic API calls and one approval step. What is the best first response?",
      "options": [
        "Clarify the actual decision points and consider whether a simpler workflow engine is enough",
        "Use an autonomous agent because agents are more flexible than deterministic workflows",
        "Remove the approval step first so the agent has enough autonomy to be useful",
        "Fine-tune a model before designing the workflow so it understands the business domain"
      ],
      "correctOptionIndex": 0,
      "explanation": "Not every automation needs an agent. First identify where judgment, uncertainty, tools, and human review are actually needed."
    },
    {
      "question": "A product manager wants to remove human review from an AI workflow because 95% of cases are correct. The remaining 5% can affect billing. What is the safest framing?",
      "options": [
        "Use risk-based automation: auto-handle low-risk cases and require approval or limits for high-impact cases",
        "Remove review because 95% is high enough for most business workflows",
        "Hide low-confidence cases from operators so the system feels more autonomous",
        "Increase context window so financial mistakes become less likely"
      ],
      "correctOptionIndex": 0,
      "explanation": "Automation level should depend on impact and confidence. High-impact financial actions need stronger controls even if average accuracy is high."
    }
  ],
  "tensorflow": [
    {
      "question": "TensorFlow model was trained with a preprocessing layer inside a Keras graph, but the production endpoint uses a separate Python preprocessing that slightly differs. Predictions are drifting. What should be done?",
      "options": [
        "Keep and serve the preprocessing together with the model artifact or strictly version the identical preprocessing",
        "Leave two preprocessing paths if shape unit tests pass",
        "Increase the batch size for inference to average out the drift",
        "Decrease the learning rate and retrain the model"
      ],
      "correctOptionIndex": 0,
      "explanation": "Training-serving skew often arises from different preprocessing paths. Preprocessing must be part of the artifact or strictly versioned."
    },
    {
      "question": "A Keras model with BatchNormalization gives strange results during inference in a custom loop. The developer calls the model with `training=True`. What should be fixed?",
      "options": [
        "For inference, call the model with `training=False` or use the standard predict/serving path",
        "Remove BatchNormalization because it is incompatible with production",
        "Make labels available during inference so the layer can correctly normalize the batch",
        "Increase epochs to make BatchNormalization no longer depend on mode"
      ],
      "correctOptionIndex": 0,
      "explanation": "Some layers behave differently in training and inference. The wrong flag changes the behavior of Dropout/BatchNorm."
    },
    {
      "question": "The training pipeline uses `tf.data.Dataset.map()` with heavy preprocessing, and the GPU is idle. What should be checked first?",
      "options": [
        "Parallelism, prefetch/cache, vectorization, and where the real bottleneck is in the input pipeline",
        "Replace the loss function because GPU idle is almost always related to loss",
        "Make the model deeper to keep the GPU busy longer",
        "Disable shuffle because shuffle is always the main source of latency"
      ],
      "correctOptionIndex": 0,
      "explanation": "`tf.data` pipeline can become a bottleneck. Profile the input pipeline and use parallel map/prefetch/cache intentionally."
    },
    {
      "question": "SavedModel exported without a signature that the serving infrastructure expects. Deployment passes, but requests fail at runtime due to shape/name mismatch. What should have been checked?",
      "options": [
        "Serving signature/input-output contract on the artifact before traffic switch",
        "Only training accuracy because export doesn't affect the runtime contract",
        "Presence of a `.h5` file alongside the SavedModel",
        "Number of epochs in metadata"
      ],
      "correctOptionIndex": 0,
      "explanation": "A production artifact is not just weights but also a callable signature. The contract needs to be checked with smoke/integration tests."
    }
  ],
  "mlops": [
    {
      "question": "The model in the notebook shows a high score. After a month, no one can reproduce the results: the dataset has changed, package versions are unknown. What is missing?",
      "options": [
        "Data, code, environment, parameters, and model artifact versioning for each run",
        "More detailed README about what the author ran",
        "Moving the notebook to a private folder to reduce changes by others",
        "Increasing the random seed to make results more stable"
      ],
      "correctOptionIndex": 0,
      "explanation": "MLOps requires reproducibility: artifact lineage must link code, data, parameters, environment, and the output model."
    },
    {
      "question": "The production classifier does not technically fail, but business metrics are deteriorating: new inputs differ from the training distribution. What should be monitored?",
      "options": [
        "Data drift, prediction distribution, confidence, slice quality, and human review samples",
        "Only HTTP 500 errors, because model problems always manifest as backend errors",
        "Only CPU server usage, because drift is related to load",
        "The size of the model artifact after deployment"
      ],
      "correctOptionIndex": 0,
      "explanation": "The ML system can degrade without infrastructure errors. Quality/drift metrics are needed, not just uptime."
    },
    {
      "question": "The team manually copies the model file to the server via SSH. Sometimes the serving uses the wrong model version. What design is better?",
      "options": [
        "Model registry/artifact store, versioned deployments, and automated rollout/rollback",
        "Write in Slack which model was copied to have a history",
        "Always name the file `model_final.pkl` to avoid confusion for the service",
        "Store the model file in the home directory of the most experienced ML engineer"
      ],
      "correctOptionIndex": 0,
      "explanation": "Production ML artifacts should be deployed as versioned artifacts with controlled rollout/rollback, not manually."
    },
    {
      "question": "The retraining job automatically deploys a new model if the offline metric improves by 0.2%. After deployment, complaints increase. What's wrong?",
      "options": [
        "Promotion gates: holdout/slice evaluations, shadow/canary, business metrics, and rollback",
        "Any improvement in offline metrics should automatically go to production",
        "Remove monitoring complaints because users are often subjective",
        "Retrain more frequently to have the new model fix itself faster"
      ],
      "correctOptionIndex": 0,
      "explanation": "Offline metrics are not a complete production quality signal. Model promotion should consider slices, online impact, and safe rollout."
    }
  ],
  "terraform": [
    {
      "question": "A Terraform plan shows `-/+` replacement for a production Postgres instance after a module change. What is the safest next step?",
      "options": [
        "Apply immediately because a valid Terraform plan means the provider selected the safest path",
        "Delete the state entry so Terraform stops planning replacement for the existing instance",
        "Investigate why replacement is planned, assess downtime/data loss risk, and choose a migration/lifecycle/import strategy",
        "Temporarily disable backups so replacement is faster and easier to retry"
      ],
      "correctOptionIndex": 2,
      "explanation": "Replacement of stateful resources can cause data loss or downtime. The plan must be understood before apply."
    },
    {
      "question": "A teammate changes an AWS security group manually in the console. The next Terraform plan wants to revert it. What happened?",
      "options": [
        "Configuration drift between declared infrastructure and real infrastructure",
        "Terraform automatically imported the manual change but kept the old HCL for compatibility",
        "Manual console changes permanently override Terraform configuration",
        "The AWS provider cannot track security group rules after they are edited manually"
      ],
      "correctOptionIndex": 0,
      "explanation": "Manual changes create drift. Teams need a process to import intentional changes or revert accidental ones through code."
    },
    {
      "question": "A Terraform state file is stored on one developer laptop for shared production infrastructure. What is the main concern?",
      "options": [
        "State loss, locking conflicts, and possible exposure of sensitive resource data",
        "Terraform only uses state during the first apply, so the file is mostly archival",
        "Local state makes cloud resources cheaper because no remote backend is used",
        "State can always be regenerated perfectly from HCL and provider APIs"
      ],
      "correctOptionIndex": 0,
      "explanation": "State maps configuration to real resources and can include sensitive values. Teams typically need protected remote state with locking."
    },
    {
      "question": "A module update changes several resource names. Terraform wants to destroy and recreate resources that should be logically unchanged. What should be considered?",
      "options": [
        "Whether state moves/imports are needed so Terraform understands the rename instead of replacing resources",
        "Applying first and fixing names later because Terraform can infer intent after the apply",
        "Deleting and recreating the whole module so the plan is easier to reason about",
        "Switching providers because Terraform cannot safely support resource renames"
      ],
      "correctOptionIndex": 0,
      "explanation": "Terraform tracks resource addresses. Renames may require state moves or imports to avoid unnecessary destruction."
    }
  ],
  "go": [
    {
      "question": "Go service starts a goroutine for each request to handle background work, but does not pass a context. After client disconnect, the work continues writing to the database. What should be fixed?",
      "options": [
        "Pass context/cancellation and explicitly design the lifetime of background work",
        "Use a global bool flag that all goroutines check every minute",
        "Leave as is, because goroutines automatically terminate on disconnect",
        "Increase GOMAXPROCS to make extra goroutines terminate faster"
      ],
      "correctOptionIndex": 0,
      "explanation": "Goroutines do not automatically cancel. Context is needed for cancellation, deadlines, and controlling the lifetime."
    },
    {
      "question": "The Go HTTP handler ignores errors from the JSON decoder and database call, returning 200 with an empty object. What is the main risk?",
      "options": [
        "Silent data loss and false success; errors must be handled with correct status/retry semantics",
        "The Go compiler will automatically stop the program when ignored errors occur",
        "An empty object is better for clients because the contract is more stable",
        "Replace JSON with protobuf so errors disappear"
      ],
      "correctOptionIndex": 0,
      "explanation": "In Go, errors are part of the control flow. Ignoring errors turns real failures into false success responses."
    },
    {
      "question": "Go code writes to a shared map from multiple goroutines. Sometimes production crashes with concurrent map writes. What is correct?",
      "options": [
        "Protect shared state with mutex/RWMutex, use sync.Map, or change ownership through channels",
        "Add `recover()` around the handler to prevent panics from crashing the process",
        "Make the map global because global variables in Go are thread-safe",
        "Reduce the number of CPU cores to prevent goroutines from overlapping"
      ],
      "correctOptionIndex": 0,
      "explanation": "Standard maps in Go are not safe for concurrent writes. Synchronization or another state ownership model is needed."
    },
    {
      "question": "The Go client to an external LLM API is created without timeouts. Sometimes requests hang and occupy workers for a long time. What should be added?",
      "options": [
        "Context deadlines/timeouts and a configured HTTP client timeout",
        "More goroutines to prevent hanging requests from interfering with new ones",
        "Panic on any slow response to quickly restart the process",
        "Retry without limit to eventually get a response"
      ],
      "correctOptionIndex": 0,
      "explanation": "Network calls without a deadline can hang too long. Timeouts and bounded retries are basic production hygiene."
    }
  ],
  "vector-databases": [
    {
      "question": "Semantic search returns highly relevant chunks, but some belong to another customer account. The app filters after generation. What is wrong?",
      "options": [
        "Permission/tenant filtering must happen during retrieval or before unauthorized context reaches the model",
        "The model can ignore unauthorized chunks if the system prompt clearly says so",
        "A higher vector dimension will usually separate customer accounts naturally",
        "Post-generation filtering is enough because users only see the final answer"
      ],
      "correctOptionIndex": 0,
      "explanation": "Access control must be enforced before context enters the model. Vector similarity is not a permission system."
    },
    {
      "question": "After switching embedding models, new documents retrieve well but old documents mostly disappear from results. Old vectors were not regenerated. What is likely wrong?",
      "options": [
        "Old and new embeddings may live in incompatible vector spaces",
        "The frontend cache cannot display results from two embedding models at once",
        "The database needs IDs to be re-sorted after embedding model changes",
        "The answer model temperature is too low for mixed embeddings"
      ],
      "correctOptionIndex": 0,
      "explanation": "Embedding model changes usually require re-embedding the corpus or separating indexes. Mixed vector spaces degrade retrieval."
    },
    {
      "question": "A semantic search system returns near-duplicates and misses exact product codes. What retrieval design may help?",
      "options": [
        "Hybrid search combining vector similarity with lexical/exact matching and reranking",
        "Removing metadata so vectors are compared more purely",
        "Increasing answer temperature so the model considers more product-code possibilities",
        "Lowering top_k to one so duplicate chunks cannot appear"
      ],
      "correctOptionIndex": 0,
      "explanation": "Exact codes and rare terms often need lexical matching. Hybrid retrieval can combine semantic and exact-match signals."
    },
    {
      "question": "A vector index stores chunks from multiple document versions. Answers sometimes mix old and new policy text. What should be added?",
      "options": [
        "Version/date metadata filters or ranking rules so retrieval respects the active source set",
        "A larger chunk size so old and new policies are less fragmented",
        "A prompt instruction telling the model to prefer whichever chunk seems newer",
        "Random sampling across versions so the model sees a balanced policy history"
      ],
      "correctOptionIndex": 0,
      "explanation": "Versioning must be represented in retrieval metadata or ranking. Otherwise semantically similar stale chunks can enter the context."
    },
    {
      "question": "A vector database stores chunks from multiple tenants. The app retrieves broadly, lets the model answer, then removes forbidden details from the final text. What is the core security flaw?",
      "options": [
        "Unauthorized data reaches the model; tenant filtering must happen before retrieval results enter context",
        "The model should be asked to be discreet when seeing other tenants’ chunks",
        "The vector database should use a stronger embedding model to separate tenants naturally",
        "Final-answer filtering is safer because users only see the final generated text"
      ],
      "correctOptionIndex": 0,
      "explanation": "The model context is part of the exposure surface. Access control must happen before unauthorized data is retrieved or injected."
    }
  ],
  "fastapi": [
    {
      "question": "A FastAPI `async def` endpoint calls a slow synchronous SDK directly. Under load, latency spikes across unrelated requests. What is likely happening?",
      "options": [
        "The blocking call is tying up event loop or worker capacity; use an async client, threadpool, or separate worker path",
        "FastAPI disables async scheduling when any sync SDK is imported by the application",
        "Async endpoints run one at a time by design, so the slowdown is expected",
        "Response model validation is usually the bottleneck when async latency spikes"
      ],
      "correctOptionIndex": 0,
      "explanation": "Async endpoints can still block if they call blocking I/O directly. Blocking work should be isolated or replaced with async clients."
    },
    {
      "question": "An internal model API returns `{error: \"bad\"}` for validation failures, `{message: ...}` for provider failures, and plain text for timeouts. What is the API risk?",
      "options": [
        "Clients cannot reliably handle failures, retry, alert, or show useful messages",
        "All API errors should return HTTP 200 so clients only parse one status code",
        "FastAPI cannot return consistent JSON error bodies without a custom web server",
        "The problem is mostly cosmetic because humans can read all three formats"
      ],
      "correctOptionIndex": 0,
      "explanation": "Error contracts are part of API reliability. Inconsistent shapes create fragile clients and weak observability."
    },
    {
      "question": "A FastAPI endpoint accepts a raw `dict` body and passes it into business logic. Different clients send slightly different shapes. What is the best boundary improvement?",
      "options": [
        "Use Pydantic request/response models to validate and document the contract",
        "Keep `dict` but add comments showing the expected keys",
        "Accept a raw JSON string and parse fields manually in business logic",
        "Move validation into the database layer after writes fail"
      ],
      "correctOptionIndex": 0,
      "explanation": "FastAPI is strongest when request and response contracts are explicit. Pydantic validation catches shape/type problems before business logic."
    },
    {
      "question": "A FastAPI service exposes an endpoint that triggers long-running document processing. Requests often exceed client timeouts. What API design is usually better?",
      "options": [
        "Return a job ID/status resource and process asynchronously, with polling/webhook/streaming as appropriate",
        "Raise the HTTP timeout to several hours so the same request can eventually finish",
        "Run the processing in the request handler and let the frontend keep showing a spinner",
        "Return 200 immediately and process later without exposing status or failure information"
      ],
      "correctOptionIndex": 0,
      "explanation": "Long-running work should usually be modeled as an asynchronous job with observable state, not a fragile long HTTP request."
    }
  ],
  "sql-postgresql": [
    {
      "question": "A query `WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50` is slow on an 80M-row table. There is an index on `user_id` only. What should be inspected?",
      "options": [
        "Whether a composite index matching the filter/order pattern improves the query plan",
        "Whether PostgreSQL can use `LIMIT` efficiently only when tables are small",
        "Whether the API should cache all user records in memory before filtering",
        "Whether increasing the connection pool would let more slow queries finish concurrently"
      ],
      "correctOptionIndex": 0,
      "explanation": "The query filters and orders. A single-column index may still require sorting many rows; the actual plan should guide index design."
    },
    {
      "question": "A backend builds SQL as `SELECT * FROM users WHERE email = \"${email}\"`. The team says the UI validates email format. What is the correct review comment?",
      "options": [
        "Frontend validation is not a security boundary; use parameterized queries on the server",
        "String interpolation is acceptable if the field has a unique index",
        "Escape only quote characters manually because emails cannot contain SQL keywords",
        "Move the validation into a shared frontend/backend helper and keep interpolation"
      ],
      "correctOptionIndex": 0,
      "explanation": "Untrusted input must be parameterized server-side. UI validation can be bypassed and does not make SQL construction safe."
    },
    {
      "question": "Two writes must happen together: create an invoice and decrement account balance. Sometimes one succeeds and the other fails. What is missing?",
      "options": [
        "A database transaction around the related writes, with clear error handling/rollback behavior",
        "A retry loop around each query independently so eventual success is more likely",
        "A background reconciliation job as the only consistency mechanism",
        "A frontend loading state so users cannot click the payment button twice"
      ],
      "correctOptionIndex": 0,
      "explanation": "Related writes that must succeed or fail together belong in a transaction. Independent retries can worsen consistency problems."
    },
    {
      "question": "A product search query uses `ILIKE \"%term%\"` across millions of rows and becomes slow. What should be considered?",
      "options": [
        "The right search/indexing approach for the query pattern, such as trigram/full-text/search service depending on needs",
        "Adding a normal btree index on the text column and assuming all wildcard searches will use it",
        "Moving filtering to the frontend after loading candidate rows from the database",
        "Increasing connection pool size so more slow scans can run in parallel"
      ],
      "correctOptionIndex": 0,
      "explanation": "Contains-style text search often needs specialized indexing or search architecture. More connections can amplify database load."
    }
  ],
  "openai-api": [
    {
      "question": "A backend lets users send arbitrary prompts to a model that can call internal tools. The only protection is a system prompt saying “never perform dangerous actions”. What is the main issue?",
      "options": [
        "Server-side authorization, tool schemas, input validation, rate limits, and approval rules are needed outside the model",
        "The endpoint is safe if users cannot see the hidden system prompt",
        "Tool calls are safe enough because their arguments are structured",
        "Low temperature removes most prompt injection risk"
      ],
      "correctOptionIndex": 0,
      "explanation": "Tool-enabled systems need hard server-side controls. Prompt instructions are useful, but they are not a security boundary."
    },
    {
      "question": "After launch, OpenAI API costs triple. Request count doubled, prompts include full chat history, retries are unbounded, and a large model handles every task. What should be reviewed first?",
      "options": [
        "Token usage, history truncation/summarization, retry policy, caching, and model routing",
        "Frontend bundle size, because heavier UI usually increases API cost",
        "Whether the API key has a clear name in the dashboard for cost attribution",
        "Whether responses use Markdown, because formatting is often the main token driver"
      ],
      "correctOptionIndex": 0,
      "explanation": "Cost is driven by volume, token count, model choice, retries, and architecture. Measure those before cutting blindly."
    },
    {
      "question": "A product stores model output directly as structured database rows. The prompt asks for JSON, but rare malformed or semantically invalid values appear. What should happen before storage?",
      "options": [
        "Validate against a schema and business rules; reject, repair, or route failures explicitly",
        "Store the raw output first and write cleanup migrations when bad rows are found",
        "Lower temperature to zero and remove validation once JSON becomes stable in tests",
        "Extract fields with a tolerant parser and silently default missing values"
      ],
      "correctOptionIndex": 0,
      "explanation": "Model output is untrusted data. Storage requires structural validation and domain validation, not just syntactic JSON extraction."
    },
    {
      "question": "An app streams model responses to users. Sometimes the model starts answering before tool results arrive, causing contradictions. What should the orchestration ensure?",
      "options": [
        "Tool-call phases and final-answer phases are separated so user-visible text is grounded in completed tool results",
        "Streaming should always begin immediately because perceived latency matters more than internal sequencing",
        "The model should receive tool results after the first draft so it can correct itself later",
        "The frontend should replace contradictory partial text when tool results arrive"
      ],
      "correctOptionIndex": 0,
      "explanation": "Streaming UX must not outrun the system’s evidence. If tools are required, final user-visible claims should be based on completed tool outputs."
    },
    {
      "question": "An AI support assistant gets complaints about “wrong answers”, but logs only store the final response text. What is the biggest observability gap?",
      "options": [
        "Missing trace data for input, retrieval results, tool calls, model parameters, and intermediate decisions",
        "Missing screenshots of the support agent UI at the time of each answer",
        "Missing frontend theme and browser metadata for affected users",
        "Missing CPU and memory metrics from developer machines used during testing"
      ],
      "correctOptionIndex": 0,
      "explanation": "For LLM systems, the final answer alone is rarely enough. You need traces of retrieval, prompts, tool calls, model configuration, and decisions to debug quality issues."
    },
    {
      "question": "A workflow logs full prompts, retrieved chunks, tool arguments, and model outputs for debugging. Some prompts contain customer PII and API tokens pasted by users. What should be changed?",
      "options": [
        "Redact or avoid storing sensitive data, apply retention controls, and restrict access to traces/logs",
        "Keep all logs forever because debugging AI systems requires complete history",
        "Move logs to frontend localStorage so they are outside backend compliance scope",
        "Base64-encode logs so sensitive values are no longer stored as plain text"
      ],
      "correctOptionIndex": 0,
      "explanation": "LLM traces often contain sensitive data. Observability must be balanced with redaction, retention, and access control."
    },
    {
      "question": "A team builds a beautiful AI demo that works on curated examples but has no failure UI, no escalation path, and no monitoring. What is the product risk?",
      "options": [
        "The product may fail in real usage without a safe way for users or operators to recover",
        "The demo will be slower because monitoring always blocks model output",
        "The product cannot be marketed unless every response is generated by an agent",
        "The UI should hide errors because users prefer confident products"
      ],
      "correctOptionIndex": 0,
      "explanation": "AI product design must include failure handling, escalation, and monitoring. Real users will hit cases outside the demo path."
    }
  ],
  "fine-tuning": [
    {
      "question": "Team wants to fine-tune the LLM because RAG sometimes returns outdated policy facts. What's the review concern?",
      "options": [
        "Fine-tuning doesn't adequately address freshness or grounding; fix retrieval, metadata, and source-of-truth flow first",
        "Fine-tuning is always cheaper than RAG for policy documents",
        "Fine-tuning automatically teaches the model to reference up-to-date documents",
        "RAG cannot be used for policy answers if there are more than 100 documents"
      ],
      "correctOptionIndex": 0,
      "explanation": "Fine-tuning is useful for behavior, format, and style, but it doesn't replace current retrieval for changing facts."
    },
    {
      "question": "The fine-tuning dataset was collected from support answers where agents sometimes hallucinated or violated policy. What should be done before training?",
      "options": [
        "Clean/curate examples, remove wrong behavior, and add quality criteria for training data",
        "Train as is, because the model will inherently average out bad examples",
        "Add more epochs to help the model better remember domain style",
        "Mix errors with correct answers to let the model see both variants"
      ],
      "correctOptionIndex": 0,
      "explanation": "Fine-tuning amplifies patterns from data. Bad examples teach bad behavior; they shouldn't be blindly added to training data."
    },
    {
      "question": "After fine-tuning, the model responds well to training-like examples but worse on new edge cases. What likely happened?",
      "options": [
        "Overfitting or too narrow/unrepresentative dataset; need held-out evaluations and broader data",
        "Fine-tuning always degrades generalization, so it shouldn't be used",
        "Increase temperature to help the model forget training examples",
        "Remove the validation set because it hinders optimization"
      ],
      "correctOptionIndex": 0,
      "explanation": "Performance on training-like examples doesn't prove generalization. Held-out evaluations and checks for important slices are needed."
    },
    {
      "question": "The product wants to fine-tune the model to always return strictly valid JSON. What should be said?",
      "options": [
        "Fine-tuning can help with behavior, but schema/structured output validation is still necessary",
        "Fine-tuning fully replaces JSON schema validation",
        "Fine-tune only on malformed JSON to teach the model to fix errors",
        "Setting temperature to 0 is enough to ensure JSON is always valid"
      ],
      "correctOptionIndex": 0,
      "explanation": "Reliable structured output requires schema constraints and validation. Fine-tuning is not a hard guarantee for downstream parsers."
    }
  ],
  "langgraph": [
    {
      "question": "A workflow must retrieve evidence, draft an answer, ask for human approval, revise if rejected, and resume after worker restart. Why is LangGraph a reasonable fit?",
      "options": [
        "Explicit state, transitions, interrupts, and checkpointing match the workflow shape",
        "It makes every answer factual even if retrieval returns weak evidence",
        "It removes the need to design tool permissions separately",
        "It is best when all workflow logic is hidden inside one long prompt"
      ],
      "correctOptionIndex": 0,
      "explanation": "LangGraph is useful when state, branching, human-in-the-loop, and resumability need to be explicit rather than buried in an opaque chain."
    },
    {
      "question": "A LangGraph node calls an LLM, writes to Salesforce, chooses the next route, and mutates shared state. Failures are hard to replay. What is the design smell?",
      "options": [
        "Too much responsibility in one node; split decision, side effect, and routing boundaries where practical",
        "External systems should never be called from LangGraph nodes",
        "Routing should be moved into free-form model text to make the graph more flexible",
        "The whole graph should be replaced by one autonomous agent prompt"
      ],
      "correctOptionIndex": 0,
      "explanation": "Large mixed-responsibility nodes are hard to test, audit, and retry safely. Clear node boundaries improve observability and recovery."
    },
    {
      "question": "A graph resumes from a checkpoint after a crash. One node sends an external email and may run again during retry. What should the design account for?",
      "options": [
        "Idempotency, side-effect tracking, or moving irreversible effects behind explicit confirmation",
        "Disabling checkpoints because side effects and persistence cannot coexist",
        "Increasing temperature so the model chooses a different path after retry",
        "Removing state from the graph so the node cannot remember failed attempts"
      ],
      "correctOptionIndex": 0,
      "explanation": "Checkpointing makes replay/resume possible, but side effects need idempotency or explicit guards to avoid duplicate external actions."
    },
    {
      "question": "A LangGraph workflow routes based on free-form model text like “looks good” or “probably needs review”. Routing bugs appear after prompt changes. What is stronger?",
      "options": [
        "Have the model produce a constrained route decision/schema and validate it before selecting the next node",
        "Keep parsing natural language because it is more flexible for future routes",
        "Add more examples with similar wording so the parser sees fewer surprises",
        "Let the next node decide whether the previous route was correct"
      ],
      "correctOptionIndex": 0,
      "explanation": "Routing should use constrained, validated decisions. Free-form text parsing makes control flow brittle."
    }
  ],
  "api-rest": [
    {
      "question": "REST endpoint `POST /process` sometimes creates a charge, sometimes only validates the request, sometimes returns a job status. Clients keep failing. What's wrong?",
      "options": [
        "The endpoint mixes different responsibilities; API contract and resource/action semantics need to be separated",
        "REST endpoints must be named only with nouns, otherwise HTTP doesn't work",
        "Clients should read the backend implementation code before integration",
        "Always return 200 to prevent clients from getting confused with status codes"
      ],
      "correctOptionIndex": 0,
      "explanation": "API design should make side effects, resources, and states understandable. A single ambiguous endpoint creates fragile clients."
    },
    {
      "question": "The API returns 200 OK with `{ \"error\": \"not authorized\" }` because the frontend prefers to parse a single status. What's the best review comment?",
      "options": [
        "Use correct HTTP status codes and a stable error response shape",
        "Keep 200 because HTTP status codes have become outdated for JSON APIs",
        "Return 500 for all errors to make monitoring see failures",
        "Hide the error body and return an empty response"
      ],
      "correctOptionIndex": 0,
      "explanation": "Status code is part of the API contract. Clients, retries, caches, and monitoring depend on the correct response semantics."
    },
    {
      "question": "Mobile app uses `GET /items?page=2`. After adding sorting, new items sometimes duplicate or disappear between pages. What should be considered?",
      "options": [
        "Cursor-based pagination or a stable ordering contract for changing datasets",
        "Increase page size to reduce the number of times users go to page 2",
        "Return items in random order to make duplicates less noticeable",
        "Cache the first page permanently"
      ],
      "correctOptionIndex": 0,
      "explanation": "Offset/page pagination on changing data can cause duplicates or skips. Cursor pagination and stable ordering make behavior more reliable."
    },
    {
      "question": "A new API version removes the `planName` field, which older clients still read. Production clients break. What should have been done?",
      "options": [
        "Versioning/deprecation plan, backwards compatibility, or migration window",
        "Delete fields immediately if the frontend main branch is already updated",
        "Rename the field without a changelog because TypeScript will catch clients",
        "Return null instead of the field to ensure older clients don't crash"
      ],
      "correctOptionIndex": 0,
      "explanation": "Public/consumed API requires compatibility and deprecation lifecycle. Backend deployment is not synchronized with all clients."
    }
  ],
  "model-training": [
    {
      "question": "Training accuracy increases to 99%, but validation accuracy drops after several epochs. What does this usually indicate?",
      "options": [
        "Overfitting; need validation monitoring, regularization, early stopping, or more/better data",
        "The model is not large enough because training accuracy should be 100%",
        "Remove the validation set because it hinders loss optimization",
        "The learning rate is always too low if validation performance is worse than training"
      ],
      "correctOptionIndex": 0,
      "explanation": "The gap between training and validation performance is a classic signal of overfitting or distribution mismatch."
    },
    {
      "question": "The dataset is highly imbalanced: 98% normal, 2% fraud. The model shows 98% accuracy but almost misses fraud cases. What's wrong?",
      "options": [
        "Accuracy hides minority class performance; need precision/recall, class weighting/resampling, and slice evaluations",
        "98% accuracy is sufficient because fraud is rare",
        "Remove fraud examples to make the model more stable",
        "Only evaluate loss, not the confusion matrix"
      ],
      "correctOptionIndex": 0,
      "explanation": "Aggregate accuracy can be meaningless with imbalance. Class-specific metrics and business-risk slices are important."
    },
    {
      "question": "Validation score is suspiciously high. Later it turns out that the same users appear in both train and validation sets through different rows. What happened?",
      "options": [
        "Data leakage due to improper split; need to split by entity/time where relevant",
        "The model became too good and found hidden patterns",
        "The validation set was too large",
        "Need to shuffle data more aggressively after split"
      ],
      "correctOptionIndex": 0,
      "explanation": "If related entities end up in both train and validation, the model may effectively see the answer. The split should reflect the production scenario."
    },
    {
      "question": "Training run is not reproducible: identical code produces different results, and hardware/data order changed. What needs to be fixed?",
      "options": [
        "Seeds, data/artifact versions, environment, framework settings, and non-deterministic operations where possible",
        "Only the final model file, because intermediate details don't matter",
        "Only the notebook name from which training was run",
        "Nothing: ML training cannot be reproducible even approximately"
      ],
      "correctOptionIndex": 0,
      "explanation": "Full determinism is not always possible, but reproducibility requires control over seeds, data, environment, and pipeline metadata."
    }
  ],
  "pinecone": [
    {
      "question": "Pinecone index stores documents for all customers in one namespace. The app retrieves top_k results, and the tenant filter applies after the model response. What's wrong?",
      "options": [
        "Tenant/access filter should be applied during retrieval: namespace/filter before context enters the LLM",
        "Pinecone similarity will naturally separate tenants if embeddings are high quality",
        "Post-generation filtering is sufficient if the prompt prohibits revealing other data",
        "Increase top_k to allow the model to see more documents and select the correct ones"
      ],
      "correctOptionIndex": 0,
      "explanation": "Unauthorized context cannot be returned to the model. Tenant isolation must be part of the retrieval query/index design."
    },
    {
      "question": "After switching embedding models, new vectors are loaded into the same Pinecone index over the old ones. Retrieval became chaotic. What's likely wrong?",
      "options": [
        "Vectors from different embedding spaces have been mixed; a re-embed or separate index/namespace strategy is needed",
        "Pinecone requires identical document IDs for all embedding models",
        "Top_k is too small because mixed embeddings always require a larger top_k",
        "LLM temperature affects the order of Pinecone results"
      ],
      "correctOptionIndex": 0,
      "explanation": "Different embedding models create incompatible vector spaces. The corpus usually needs to be re-indexed or separated."
    },
    {
      "question": "Pinecone query searches for product code `SKU-91X-A` but returns semantically related descriptions without the exact SKU. What should be added?",
      "options": [
        "Hybrid/exact-match path or metadata lookup for identifiers",
        "Only increase the vector dimension",
        "Remove SKU from documents to prevent embedding noise",
        "Ask the LLM to guess the SKU based on a similar description"
      ],
      "correctOptionIndex": 0,
      "explanation": "Vector search is weak for exact identifiers. SKU/order IDs require lexical, hybrid, or metadata-based retrieval."
    },
    {
      "question": "RAG on Pinecone became slower after increasing top_k from 5 to 80. Quality hardly improved. What's the best review comment?",
      "options": [
        "Measure recall/precision/latency and use reranking/filters instead of blindly increasing top_k",
        "Always keep top_k as high as possible because more context cannot hurt",
        "Decrease chunk size to one sentence to make top_k=80 cheaper",
        "Disable metadata filters because they may slow down retrieval"
      ],
      "correctOptionIndex": 0,
      "explanation": "A larger top_k increases latency/cost/noise. Retrieval should be tuned based on evaluations and trace metrics."
    }
  ],
  "llamaindex": [
    {
      "question": "LlamaIndex RAG app gives weak responses. Traces show that retrieved nodes do not contain the needed evidence. What to check first?",
      "options": [
        "Ingestion/chunking, node metadata, retriever settings, filters and query transformation",
        "Only the final response synthesizer prompt",
        "UI citation colors, because users might misread the answer",
        "Temperature LLM, because retrieval depends on generation randomness"
      ],
      "correctOptionIndex": 0,
      "explanation": "If nodes do not contain evidence, the synthesizer won't help. First, debug ingestion and retrieval path."
    },
    {
      "question": "PDFs are indexed with fixed chunks, tables are split across chunks. LlamaIndex answers incorrectly with numbers from tables. What to improve?",
      "options": [
        "Document parsing/chunking strategy: structure-aware parsing, table handling, metadata and adjacent context",
        "Increase verbosity prompt to let the model reconstruct tables itself",
        "Remove tables from index because embeddings don't work well with numbers",
        "Decrease top_k to 1 to prevent model confusion"
      ],
      "correctOptionIndex": 0,
      "explanation": "RAG quality starts with ingestion. Tables and structured content require special handling, not simple token chunking."
    },
    {
      "question": "LlamaIndex chat engine uses memory, and questions from one user sometimes affect another. What to check?",
      "options": [
        "Session/user scoping memory and storage context isolation",
        "Embedding vector size, because larger vectors might mix users",
        "Do we need to add more system prompt to prohibit remembering other user context?",
        "Do we need to store all memory in one global index for convenience?"
      ],
      "correctOptionIndex": 0,
      "explanation": "Memory and context must be scoped by session/user/tenant. Cross-user leakage is a correctness and privacy bug."
    },
    {
      "question": "LlamaIndex query engine returns citations, but cited nodes do not support the final claim. What to evaluate?",
      "options": [
        "Faithfulness of the response to retrieved nodes and citation support per claim",
        "Only the presence of citation IDs in the response",
        "Only the latency of the retrieval step",
        "Only the natural language quality of the response"
      ],
      "correctOptionIndex": 0,
      "explanation": "Citation-shaped output does not guarantee a grounded answer. Need to check that cited content actually supports the claims."
    }
  ],
  "anthropic-api": [
    {
      "question": "The backend provides a Claude tool `refund_customer`. The only protection is a system message: 'be careful with refunds'. What should be outside the model?",
      "options": [
        "Server-side authorization, amount limits, validation, audit logs, and approval gates",
        "A longer system prompt with legal consequences of refunds",
        "Temperature 0 to make tool calls safer",
        "A second Claude call that asks if the first is sure"
      ],
      "correctOptionIndex": 0,
      "explanation": "Tool usage with real side effects requires hard application controls. The prompt is not a security boundary."
    },
    {
      "question": "Claude API responses sometimes contain a tool_use block, but orchestration immediately shows the user partial assistant text. Then the tool result contradicts the already shown text. What should be fixed?",
      "options": [
        "Separate the tool-use phase and final-answer phase; show claims after the necessary tools complete",
        "Always stream the first text immediately, because UX is more important than consistency",
        "Ignore tool_use if the model has already started generating natural language responses",
        "Ask the user to compare the answer and tool result themselves"
      ],
      "correctOptionIndex": 0,
      "explanation": "If the answer depends on tools, orchestration must wait for tool results before final user-visible statements."
    },
    {
      "question": "The app sends Claude the entire chat history without truncation. Costs increase, latency increases, but quality does not improve. What should be reviewed first?",
      "options": [
        "Token budget, history truncation/summarization, retrieval of relevant context, and model routing",
        "CSS frontend, because long history is often associated with larger UI",
        "API key name, because it affects cost attribution",
        "Increase max_tokens to allow the model to better understand the entire chat"
      ],
      "correctOptionIndex": 0,
      "explanation": "Costs and latency are managed by token volume, model choice, and retry/context strategy. The full history is rarely needed in full."
    },
    {
      "question": "The product saves Claude output as JSON rows. The prompt asks for 'return JSON only', but sometimes business fields are invalid. What should be done?",
      "options": [
        "Use structured/schema validation and domain validation before writing",
        "Consider the output valid if it starts with `{`",
        "Save raw output and clean bad rows manually later",
        "Set temperature to 0 and remove validation after smoke testing"
      ],
      "correctOptionIndex": 0,
      "explanation": "LLM output is untrusted data. Even syntactically valid JSON can violate business rules."
    }
  ],
  "redis": [
    {
      "question": "Redis cache stores user profile under key `user:{id}` without tenant prefix. After migration to multi-tenant, users see each other's cached data. What's wrong?",
      "options": [
        "Cache keys do not include tenant/security boundary; key design should reflect access scope",
        "Redis automatically isolates tenants if values are serialized in JSON",
        "Increase TTL to make cache change less frequently",
        "Switch from GET to MGET to make reads atomic"
      ],
      "correctOptionIndex": 0,
      "explanation": "Cache key design is part of correctness/security. Tenant/user scope must be explicitly included in the key or isolated via namespace/database."
    },
    {
      "question": "Job uses Redis lock via `SET lock value`, then `EXPIRE lock 60`. Sometimes the lock remains forever after a crash between commands. What's better?",
      "options": [
        "Use atomic `SET key value NX EX ...` and safe release by token/value",
        "Increase EXPIRE to days to make lock more stable",
        "Delete lock in cron every night",
        "Store lock in a regular hash without TTL"
      ],
      "correctOptionIndex": 0,
      "explanation": "Lock acquisition must be atomic. Release must check ownership token to avoid deleting another lock."
    },
    {
      "question": "API cache in Redis stores model responses without TTL. After a month, answers by policy become stale but continue to be served. What should be fixed?",
      "options": [
        "TTL/invalidation strategy, versioned keys, and cache busting when source data/model changes",
        "Increase Redis memory to prevent old answers from being evicted",
        "Disable logging to make cache hits faster",
        "Make cache key shorter"
      ],
      "correctOptionIndex": 0,
      "explanation": "Cache must have a lifetime and invalidation. For AI/RAG responses, it's especially important to consider source and model versions."
    },
    {
      "question": "Redis is used as a queue via list pop. Worker crashes after pop but before processing, losing the job. What's needed?",
      "options": [
        "Reliable queue pattern: pending/ack, Redis Streams, or dedicated queue with retry/DLQ",
        "More workers to process jobs faster",
        "Reduce payload size to make crashes less frequent",
        "Store jobs only in memory process to avoid Redis bottleneck"
      ],
      "correctOptionIndex": 0,
      "explanation": "Simple pop deletes the job before successful processing. A reliable queue requires ack/retry semantics."
    }
  ],
  "weaviate": [
    {
      "question": "Weaviate class stores documents from different customers. The query uses semantic search without a where-filter on customer_id, and filtering occurs after generation. What is the core issue?",
      "options": [
        "Access control should be applied in the retrieval query via filters/tenant isolation before the LLM context",
        "Weaviate vectorizer automatically separates customers by semantic distance",
        "Post-generation filtering is safer because the model sees more context",
        "Increase the certainty threshold to prevent foreign documents from accidentally being included"
      ],
      "correctOptionIndex": 0,
      "explanation": "Unauthorized data should not enter the model's context. Filters/tenant isolation must be part of the retrieval."
    },
    {
      "question": "After changing the schema property name, old queries in Weaviate started returning empty results. What should be checked?",
      "options": [
        "Schema migration, reindexing/backfill, and ensuring query filters match the current property names/types",
        "Only the prompt final answer, because the schema does not affect retrieval",
        "The size of the LLM context window",
        "Whether all metadata needs to be removed from objects"
      ],
      "correctOptionIndex": 0,
      "explanation": "Vector DB schema is part of the retrieval contract. Changes to properties/types require data migration and query code updates."
    },
    {
      "question": "Weaviate hybrid search improved exact term recall but started returning more noisy chunks. What is the next reasonable step?",
      "options": [
        "Configure hybrid weighting, filters, reranking, and evaluate using representative queries",
        "Disable all metadata filters to make hybrid search as free as possible",
        "Go back to pure vector search always, because lexical search is incompatible with RAG",
        "Ask the LLM to ignore noisy chunks without changing the retrieval"
      ],
      "correctOptionIndex": 0,
      "explanation": "Hybrid retrieval requires tuning the trade-off between semantic and lexical signals. This is done through evaluations and tracing, not by guesswork."
    },
    {
      "question": "Weaviate objects are loaded via batch import. Some objects ended up without vectors due to partial failures, but the pipeline considers the import successful. What should be added?",
      "options": [
        "Check batch errors, counts, retry failed objects, and post-import validation",
        "Ignore partial failures because the vector DB will recover vectors later",
        "Reduce batch size to 1 and stop logging failures",
        "Delete source documents after the first import attempt"
      ],
      "correctOptionIndex": 0,
      "explanation": "The ingestion pipeline must check for partial failures and the actual state of the index. Otherwise, retrieval silently loses documents."
    }
  ],
  "model-evaluation": [
    {
      "question": "A production classifier silently drifts: volume is stable, error rate is low, but business users say labels are getting worse. What should be monitored?",
      "options": [
        "Input distribution, label distribution, confidence/uncertainty, sampled human review, and eval regression results",
        "Only HTTP 500 rate because model quality problems usually appear as server errors",
        "Only average token count because shorter inputs usually imply better classification",
        "Only deploy frequency because unchanged code cannot create model-quality drift"
      ],
      "correctOptionIndex": 0,
      "explanation": "Model quality can degrade without infrastructure errors. Drift requires quality-oriented monitoring, not only uptime metrics."
    },
    {
      "question": "An AI automation saves support agents 30 seconds per ticket but adds occasional wrong actions requiring manual cleanup. What should be measured before scaling?",
      "options": [
        "Net time saved, error cost, review burden, user impact, and rollback/recovery effort",
        "Only model latency because faster automation is automatically better",
        "Only number of tokens per request because token savings equal business value",
        "Only demo success rate because production users will adapt to the tool"
      ],
      "correctOptionIndex": 0,
      "explanation": "AI ROI depends on net operational value, not raw automation count. Wrong actions and cleanup can erase apparent savings."
    },
    {
      "question": "A team says their prompt is good because it passed ten hand-picked examples. After launch, real users find many failures. What is the main eval problem?",
      "options": [
        "The eval set was too small and unrepresentative of real input distribution and edge cases",
        "The eval should have used a higher temperature so the model could try harder",
        "The eval should avoid expected outputs because they make testing too strict",
        "The prompt should be judged only by the person who wrote the first version"
      ],
      "correctOptionIndex": 0,
      "explanation": "Hand-picked examples are useful for development but weak as an eval. Production readiness needs representative cases, edge cases, and regression coverage."
    },
    {
      "question": "A judge model rates answers as correct if they sound fluent. It often rewards unsupported claims in RAG answers. What should the eval check include?",
      "options": [
        "Faithfulness to retrieved evidence and whether cited sources support each claim",
        "Only grammar and tone because factuality is too subjective to evaluate",
        "Whether the answer contains enough citations regardless of citation content",
        "Whether the answer sounds confident and complete to a non-expert reader"
      ],
      "correctOptionIndex": 0,
      "explanation": "RAG evals must separate fluency from grounded correctness. A polished answer can still be unsupported."
    },
    {
      "question": "A classification eval shows 96% accuracy, but almost all examples are easy “billing” tickets. The product cares most about rare fraud tickets. What is wrong?",
      "options": [
        "Aggregate accuracy hides performance on important minority classes; evaluate per class and business-critical slices",
        "Accuracy above 95% means the classifier is production-ready unless latency is bad",
        "Rare classes should be removed from the eval because they make metrics noisy",
        "The model should merge fraud into billing so the dataset becomes less imbalanced"
      ],
      "correctOptionIndex": 0,
      "explanation": "Overall accuracy can hide bad performance on rare but important cases. Slice-based metrics are necessary when business risk is uneven."
    },
    {
      "question": "A team tunes prompts directly against the same eval set for weeks. Scores improve, but production quality does not. What likely happened?",
      "options": [
        "The system overfit to the eval set; a held-out test set and fresh production samples are needed",
        "The eval became more reliable because the prompt was repeatedly optimized against it",
        "The model needs higher temperature so it does not memorize eval-like patterns",
        "The prompt should be longer because long prompts are less likely to overfit"
      ],
      "correctOptionIndex": 0,
      "explanation": "Repeatedly optimizing against the same eval set can overfit. Keep held-out cases and refresh evals with real failure examples."
    }
  ],
  "scikit-learn": [
    {
      "question": "scikit-learn pipeline applies scaling to the entire dataset before the train/test split. The test score is suspiciously high. What's the issue?",
      "options": [
        "Data leakage; preprocessing should only fit on the train data through Pipeline/CV",
        "Scaling can always be done before the split since it doesn't use labels",
        "The test score is high only because the model is too simple",
        "Remove the test set and trust cross_val_score"
      ],
      "correctOptionIndex": 0,
      "explanation": "Even unsupervised preprocessing can leak test set statistics into training. The Pipeline prevents leakage within CV."
    },
    {
      "question": "The team trains a LogisticRegression on categorical columns, manually one-hot encodes train and test separately. In production, missing/extra columns appear. What's better?",
      "options": [
        "Use ColumnTransformer/OneHotEncoder with handle_unknown and a unified fitted pipeline",
        "Sort columns alphabetically in each dataset and hope for matching",
        "Remove all unseen categories from production requests",
        "Retrain the model on each request"
      ],
      "correctOptionIndex": 0,
      "explanation": "Feature preprocessing should be part of the fitted pipeline. Categories and columns must be processed identically in train and inference."
    },
    {
      "question": "Model evaluation uses a random train/test split for time-series sales forecasting. Production predicts the future, but the test set contains rows from the future relative to the train. What's wrong?",
      "options": [
        "Temporal leakage; a time-based split/backtesting is needed",
        "Random splits are always more honest because they uniformly shuffle data",
        "Increase the test size to average out future leakage",
        "Use accuracy instead of MAE"
      ],
      "correctOptionIndex": 0,
      "explanation": "For time-series tasks, the split should reflect future predictions. A random split can give models information from the future."
    },
    {
      "question": "A scikit-learn model is saved via pickle and loaded into a service with a different sklearn version. Predictions sometimes fail. What's the right approach?",
      "options": [
        "Version the environment/dependencies along with the artifact and test the load/predict path",
        "Pickle files are completely independent of library versions",
        "Save only the model filename to let the service find a compatible version",
        "Ignore warnings during load if the first predictions pass"
      ],
      "correctOptionIndex": 0,
      "explanation": "Model artifacts depend on code and library versions. The serving environment should be versioned and verified with an integration test."
    }
  ],
  "embeddings": [
    {
      "question": "Embedding-based search poorly finds exact IDs like `CASE-2026-0017`, though semantic questions work. What does this mean?",
      "options": [
        "Embeddings do not replace exact/lexical lookup; a hybrid or metadata path is needed for identifiers",
        "IDs must be removed from the text because they corrupt semantic vectors",
        "Increase the answer temperature to let the model guess IDs",
        "Use fewer dimensions so IDs become more noticeable"
      ],
      "correctOptionIndex": 0,
      "explanation": "Embeddings encode semantic similarity but do not guarantee exact matches for rare strings. IDs require a separate retrieval signal."
    },
    {
      "question": "Documents embedded with one model, queries embedded with another. Retrieval quality dropped sharply. What is likely wrong?",
      "options": [
        "Document and query vectors exist in incompatible embedding spaces",
        "The LLM for answering must be the same as the embedding model",
        "Increase max_tokens for the final answer",
        "Shuffle documents before each query"
      ],
      "correctOptionIndex": 0,
      "explanation": "The embedding model defines the vector space. The corpus and queries must be compatible; switching models usually requires re-embedding."
    },
    {
      "question": "Long documents embedded as a single vector. Search often returns the correct document, but the answer does not find the specific paragraph. What should be improved?",
      "options": [
        "Chunking/segmentation and retrieval granularity, possibly parent-child retrieval",
        "Create a single longer embedding to keep all information together",
        "Decrease top_k to 1 to prevent the model from getting distracted",
        "Remove headings to make embeddings cleaner"
      ],
      "correctOptionIndex": 0,
      "explanation": "A single vector for a long document blurs specific facts. Granular retrieval should align with the question/answer task."
    },
    {
      "question": "Semantic similarity returns 'similar' policy sections but not the legally active ones. What should participate in retrieval?",
      "options": [
        "Metadata/version/date filters and ranking rules, not just vector similarity",
        "Only cosine similarity, because metadata bias degrades semantic quality",
        "A more friendly final prompt",
        "Random sampling of similar documents for diversity"
      ],
      "correctOptionIndex": 0,
      "explanation": "Embeddings do not know business validity on their own. Active/inactive/version metadata must be used explicitly."
    }
  ],
  "crewai": [
    {
      "question": "CrewAI workflow allows two agents to independently update CRM and send emails. Sometimes they perform conflicting actions. What should be designed?",
      "options": [
        "Clear roles, tool permissions, approval gates, shared state ownership, and audit trail",
        "More creative agent backstories to help agents negotiate better",
        "More agents so a third agent can decide who is correct",
        "Higher temperature to have agents find more unconventional compromises"
      ],
      "correctOptionIndex": 0,
      "explanation": "Multi-agent workflows require hard boundaries. Roles/personas do not replace permissions, coordination, and review for side effects."
    },
    {
      "question": "CrewAI task loop is stuck: researcher constantly searches for new sources, writer waits for final context, workflow doesn't terminate. What is missing?",
      "options": [
        "Step/time budget, explicit done criteria, and termination conditions",
        "A longer goal description for the researcher",
        "Another researcher agent to finish the search faster",
        "Deleting all logs because tracing slows down the loop"
      ],
      "correctOptionIndex": 0,
      "explanation": "Agent workflows must have stop rules and budgets. Otherwise, 'one more step' can continue until timeout/cost blowup."
    },
    {
      "question": "CrewAI demo works well on curated examples, but in production agents argue and give inconsistent final answers. What should be evaluated before launch?",
      "options": [
        "Representative evaluations, trace quality, failure modes, and deterministic controls for high-risk tasks",
        "How convincing the agent personas sound",
        "Number of tokens in role descriptions",
        "How visually appealing the UI shows the chain of thought"
      ],
      "correctOptionIndex": 0,
      "explanation": "Multi-agent demo does not equal production reliability. Evaluations, traces, and controls over decisions/side effects are needed."
    },
    {
      "question": "CrewAI agent receives a tool `run_sql` with a raw query. User can influence task input. What security control is needed?",
      "options": [
        "Scoped tools, parameterized/allowlisted queries, read-only permissions, and validation outside the model",
        "System prompt that asks the agent not to run dangerous SQL queries",
        "Access to production DB to let the agent check consequences themselves",
        "Temperature 0 to ensure SQL is always safe"
      ],
      "correctOptionIndex": 0,
      "explanation": "LLM-generated SQL with user-influenced input is high risk. Permission boundaries and allowlisted/validated operations are needed."
    }
  ],
  "autogen": [
    {
      "question": "AutoGen group chat between planner, coder, and executor can run shell commands. Sometimes the coder suggests a dangerous command, and the executor executes it. What needs to be added?",
      "options": [
        "Sandbox, command allowlist, diff/review gate, scoped filesystem, and audit logs",
        "A more polite system prompt for the coder",
        "Another critic agent without execution blocking rights",
        "Run workflows only on the developer's laptop because it's safer"
      ],
      "correctOptionIndex": 0,
      "explanation": "Code execution agents require hard runtime boundaries. Critic/persona agents are useful but do not replace sandbox and approval."
    },
    {
      "question": "AutoGen agents continue communicating even after the task is solved. Costs are rising, latency is high. What needs to be configured?",
      "options": [
        "Termination conditions, max turns, success criteria, and budget controls",
        "More agents to reach consensus faster",
        "Higher temperature to make the conversation shorter",
        "Completely remove system messages"
      ],
      "correctOptionIndex": 0,
      "explanation": "Multi-agent chats require explicit stop conditions and budget limits. Otherwise, they easily consume unnecessary calls."
    },
    {
      "question": "AutoGen workflow uses an assistant-agent that writes code and a user-proxy-agent that executes. Failures are hard to debug: logs contain only the final answer. What should be improved?",
      "options": [
        "Trace messages, tool calls, commands, outputs, intermediate artifacts, and decision points",
        "Disable intermediate logs to keep agents less distracted",
        "Save only terminal screenshots",
        "Make the final answer longer to include everything"
      ],
      "correctOptionIndex": 0,
      "explanation": "Agent workflows are debugged via trace. The final answer does not show which commands/tools led to the result."
    },
    {
      "question": "AutoGen agent gained access to the repository and secret-filled `.env`. It accidentally includes a secret fragment in the summary. What's wrong?",
      "options": [
        "Filesystem/tool scope and secret redaction are not limited; the agent shouldn't see extra secrets",
        "Ask the agent to be more careful with `.env`",
        "Store secrets in a different format, such as YAML",
        "Increase the context window to help the agent understand confidential files better"
      ],
      "correctOptionIndex": 0,
      "explanation": "Agents should not gain access to secrets unless necessary. Secrets need to be isolated with redaction and logging controls that are system-wide."
    }
  ]
}

function buildQuestions(skill: SkillSeed): Question[] {
  const drafts = questionBank[skill.id] ?? []

  return drafts.map((item, index) => ({
    id: `${skill.id}-q${index + 1}`,
    skillId: skill.id,
    question: item.question,
    options: item.options,
    correctOptionIndex: item.correctOptionIndex,
    explanation: item.explanation
  }))
}

export const skills: Skill[] = seeds.map(skill => ({
  ...skill,
  questions: buildQuestions(skill)
}))

export const SOURCE_URL = 'https://github.com/alexeygrigorev/ai-engineering-field-guide'
