// Service tabs: each key is a panel id, matching the original data-panel values
export const servicePanels = [
  { id: 'bpo', label: 'BPO Services' },
  { id: 'annotation', label: 'AI Annotation' },
//   { id: 'moderation', label: 'Content Moderation' },
//   { id: 'data', label: 'Data Processing' },
];

export const panelContent = {
  bpo: {
    eyebrow: 'Business Process Outsourcing',
    heading: ['Operational capacity.', 'On demand.'],
    intro:
      'DG Stream provides end-to-end BPO services managed by trained human teams — customer support, back-office operations, research, and data intelligence. You define the process. We staff, train, and manage it.',
    gridCols: 3,
    cards: [
      { icon: 'CX', title: 'Customer Support Operations', desc: 'Multichannel customer support teams — email, live chat, and ticket management — trained on your product, tone, and escalation policies. CSAT-driven SLAs with weekly reporting.', tags: ['Email Support', 'Live Chat', 'Zendesk', 'Freshdesk', 'Ticket Triage'] },
      { icon: 'BO', title: 'Back-Office Processing', desc: 'Document handling, form processing, data entry, invoice management, and records digitisation. Structured workflows with quality checkpoints at every stage. Scales from 500 to 50,000 records per day.', tags: ['Data Entry', 'Invoice Processing', 'Document OCR', 'Records Mgmt'] },
      { icon: 'RI', title: 'Research & Intelligence', desc: "Market research, competitor analysis, lead enrichment, web research, and structured data collection. Human researchers who follow your methodology and deliver clean, structured outputs ready for your CRM or BI tool.", tags: ['Lead Enrichment', 'Market Research', 'Web Scraping', 'Data Structuring'] },
      { icon: 'HR', title: 'HR & Recruitment Support', desc: 'CV screening, candidate sourcing, interview scheduling, onboarding document processing, and background check coordination. Reduces time-to-hire and takes the administrative burden off your internal HR team.', tags: ['CV Screening', 'Candidate Sourcing', 'Interview Scheduling', 'Onboarding Ops'] },
      { icon: 'FIN', title: 'Finance & Accounts Support', desc: 'Accounts payable and receivable support, reconciliation, expense categorisation, and reporting. Experienced finance operations teams working within your existing accounting systems and approval workflows.', tags: ['AP / AR', 'Reconciliation', 'Expense Mgmt', 'Reporting'] },
      { icon: 'OPS', title: 'Ecommerce & Catalogue Ops', desc: 'Product listing creation, catalogue management, image tagging, SKU updates, and review moderation for e-commerce platforms. Supports Shopify, Amazon, Walmart, and custom catalogue systems.', tags: ['Catalogue Mgmt', 'Product Listing', 'SKU Management', 'Amazon / Shopify'] },
    ],
  },
  annotation: {
    eyebrow: 'AI Training Data Annotation',
    heading: ['The data your models', 'need to perform.'],
    intro:
      'High-quality labelled training data is the foundation of every performing AI model. DG Stream manages specialist annotation teams across image, text, audio, video, and multimodal data — with quality control built into every workflow.',
    gridCols: 3,
    cards: [
      { icon: 'IMG', title: 'Image & Video Annotation', desc: 'Bounding boxes, polygon segmentation, semantic segmentation, keypoint labelling, instance segmentation, and object tracking across video frames. Used for computer vision, autonomous systems, and medical imaging AI.', tags: ['Bounding Boxes', 'Segmentation', 'Keypoint', 'Object Tracking', 'LIDAR'] },
      { icon: 'NLP', title: 'Text & NLP Annotation', desc: 'Named entity recognition, sentiment labelling, intent classification, relation extraction, coreference resolution, and text summarisation annotation. Multilingual teams covering 14 languages for global AI deployment.', tags: ['NER', 'Sentiment', 'Intent Classification', 'Multilingual', 'RLHF'] },
      { icon: 'AUD', title: 'Audio & Speech Annotation', desc: 'Transcription, speaker diarisation, phoneme annotation, emotion labelling, accent identification, and audio event tagging. Supports speech recognition, voice assistant, and sentiment analysis model development.', tags: ['Transcription', 'Speaker ID', 'Phoneme Tagging', 'Emotion Labels'] },
      { icon: 'LLM', title: 'LLM & RLHF Data', desc: "Human feedback for reinforcement learning — response ranking, preference annotation, red-teaming, safety evaluation, and instruction-response pair generation. Teams trained on AI safety principles and your model's specific domain.", tags: ['RLHF', 'Preference Ranking', 'Red Teaming', 'Safety Eval', 'SFT Data'] },
      { icon: 'MED', title: 'Medical & Scientific Annotation', desc: 'Radiology image segmentation, pathology slide annotation, clinical NLP tagging, and scientific literature labelling. All annotators are domain-trained; outputs validated by a dual-review quality protocol.', tags: ['Radiology', 'Pathology', 'Clinical NLP', 'Dual Review'] },
      { icon: '3D', title: '3D & Point Cloud Annotation', desc: 'LIDAR point cloud labelling, 3D bounding box annotation, lane detection, and depth estimation for autonomous vehicle and robotics AI training. Supports all major annotation platforms.', tags: ['Point Cloud', 'LIDAR', 'Autonomous Vehicle', '3D BBox'] },
    ],
  },
  moderation: {
    eyebrow: 'Content Moderation',
    heading: ['Keep your platform', 'safe and trusted.'],
    intro:
      'Trained human moderation teams operating 24/7 to review user-generated content, enforce community guidelines, and maintain platform safety — at scale, with documented audit trails.',
    gridCols: 2,
    cards: [
      { icon: 'UGC', title: 'User-Generated Content Review', desc: 'Image, video, text, and comment moderation against your community guidelines. Policy-trained teams with escalation protocols for edge cases. Supports platforms across social media, e-commerce, and community apps.', tags: ['Image Review', 'Video Review', 'Comment Moderation', 'Policy Training'] },
      { icon: 'TRU', title: 'Trust & Safety Operations', desc: 'Account fraud detection, fake review identification, spam filtering, and abuse reporting review. Human intelligence layered on top of automated systems — catching what the algorithms miss.', tags: ['Fraud Detection', 'Fake Reviews', 'Spam Filtering', 'Abuse Reports'] },
      { icon: 'AI', title: 'AI Output Review & Safety', desc: 'Human evaluation of LLM and generative AI outputs for safety, accuracy, policy compliance, and bias. Red-teaming, harmful content detection, and hallucination flagging — essential for responsible AI deployment.', tags: ['AI Safety Review', 'Hallucination Flagging', 'Bias Detection', 'Policy Compliance'] },
      { icon: 'COM', title: 'Community & Marketplace Moderation', desc: '24/7 coverage with multilingual teams for global operations. Listing review, seller verification, product authenticity checks, and community post moderation for marketplace and forum platforms.', tags: ['Listing Review', 'Seller Verification', '24/7 Coverage', 'Multilingual'] },
    ],
  },
  data: {
    eyebrow: 'Data Processing & Enrichment',
    heading: ['Clean data in.', 'Usable intelligence out.'],
    intro:
      'Raw data is noise. DG Stream human teams clean, structure, enrich, and validate your data at scale — so your AI models, CRMs, and analytics platforms have the quality input they need to perform.',
    gridCols: 2,
    cards: [
      { icon: 'CLN', title: 'Data Cleaning & Standardisation', desc: 'Deduplication, normalisation, formatting, and validation of large datasets. CRM data hygiene, address standardisation, and inconsistency resolution. Delivered in your preferred format — CSV, JSON, database-ready.', tags: ['Deduplication', 'Normalisation', 'CRM Hygiene', 'Address Validation'] },
      { icon: 'ENR', title: 'Data Enrichment & Tagging', desc: 'Lead enrichment with company data, contact details, and industry classification. Product catalogue enrichment with attributes, categories, and descriptions. Web research and manual verification included.', tags: ['Lead Enrichment', 'Company Data', 'Catalogue Tagging', 'Manual Verification'] },
      { icon: 'OCR', title: 'Document Digitisation & OCR', desc: 'Scanned document processing, handwriting transcription, form extraction, and structured data output from unstructured documents. Legal, financial, and medical document specialists available.', tags: ['OCR Processing', 'Handwriting', 'Form Extraction', 'Document AI'] },
      { icon: 'VAL', title: 'Data Validation & QA', desc: 'Human-in-the-loop validation of AI-generated data, model outputs, and automated processes. Cross-verification, sampling-based QA, and systematic error reporting for continuous improvement pipelines.', tags: ['Human-in-loop', 'QA Sampling', 'Error Reporting', 'Model Output QA'] },
    ],
  },
};

export const annotationTypes = [
  { num: '01', title: 'Bounding Box', desc: 'Rectangular boxes drawn around objects in images and video frames. Used for object detection models.', tags: ['2D', '3D', 'Video'] },
  { num: '02', title: 'Polygon Segmentation', desc: 'Precise polygon outlines around irregular objects. Higher accuracy than bounding boxes for complex shapes.', tags: ['Instance', 'Semantic'] },
  { num: '03', title: 'Keypoint / Pose', desc: 'Human body, hand, and face keypoint annotation for pose estimation and gesture recognition models.', tags: ['Body', 'Hand', 'Face'] },
  { num: '04', title: 'Named Entity Recognition', desc: 'Tagging of entities — people, organisations, locations, dates, products — within text corpora.', tags: ['NLP', 'Multilingual'] },
  { num: '05', title: 'Sentiment Labelling', desc: 'Positive, negative, neutral, and nuanced sentiment tagging at document, sentence, and aspect level.', tags: ['Aspect', 'Sentence', 'Doc'] },
  { num: '06', title: 'RLHF Ranking', desc: 'Human preference ranking of AI model responses for reinforcement learning from human feedback pipelines.', tags: ['LLM', 'Safety', 'SFT'] },
  { num: '07', title: 'Audio Transcription', desc: 'Verbatim and intelligent transcription, speaker diarisation, and timestamped annotation for speech AI.', tags: ['ASR', 'Diarisation'] },
  { num: '08', title: 'Point Cloud / LIDAR', desc: '3D bounding boxes, lane marking, and object classification within LIDAR point cloud data for autonomous systems.', tags: ['AV', 'Robotics', '3D'] },
];

export const processSteps = [
  { num: 'Step 01', title: 'Project Scoping', desc: 'You submit your brief. We assess volume, complexity, quality requirements, and tooling needs within 4 hours.' },
  { num: 'Step 02', title: 'Team Selection & Training', desc: 'We select and brief the right annotators or operators. Domain-specific training on your guidelines before a single task begins.' },
  { num: 'Step 03', title: 'Pilot Batch', desc: 'A calibration batch is produced and reviewed against your quality benchmark. Issues are corrected before full-scale production.' },
  { num: 'Step 04', title: 'Production & QA', desc: 'Full production runs with dual-review quality control and daily accuracy reporting. You have a dashboard view at all times.' },
  { num: 'Step 05', title: 'Delivery & Iteration', desc: 'Outputs delivered in your required format. Continuous improvement cycles tighten accuracy on every subsequent batch.' },
];

export const qualityStats = [
  { num: '99.2%', lime: true, title: 'Annotation accuracy SLA', desc: 'Contractual minimum on all annotation projects, measured against gold-standard samples.' },
  { num: '2×', lime: false, title: 'Dual-review quality model', desc: 'Every output reviewed by an independent QA annotator before delivery.' },
  { num: '24h', lime: false, title: 'Daily accuracy reporting', desc: 'Real-time dashboard access plus 24-hour summary reports on output quality.' },
  { num: '0', lime: true, title: 'Re-annotation cost on failures', desc: 'Batches failing the accuracy threshold are re-annotated at no additional charge.' },
];

export const industries = [
  { num: '01', title: 'AI & Machine Learning', desc: 'Training data, RLHF, safety evaluation, and model output QA for AI labs and ML teams.' },
  { num: '02', title: 'Autonomous Vehicles', desc: 'LIDAR, camera, and radar data annotation for self-driving and ADAS systems.' },
  { num: '03', title: 'Healthcare & Medical', desc: 'Radiology, pathology, clinical NLP, and medical device AI training data pipelines.' },
  { num: '04', title: 'E-commerce & Retail', desc: 'Product catalogue ops, image tagging, customer support, and recommendation AI data.' },
  { num: '05', title: 'Finance & Fintech', desc: 'Document processing, fraud annotation, financial NLP, and compliance data management.' },
  { num: '06', title: 'Legal & Compliance', desc: 'Contract annotation, legal NLP labelling, document review, and regulatory data processing.' },
  { num: '07', title: 'Media & Publishing', desc: 'Content moderation, metadata tagging, transcription, and media asset management.' },
  { num: '08', title: 'Government & Public Sector', desc: 'Citizen services BPO, document digitisation, and public-sector AI training data.' },
];

export const hiringModels = [
  {
    badge: 'Dedicated Teams',
    title: 'Dedicated Project Teams',
    desc: 'For ongoing or high-volume projects, we build a dedicated team trained exclusively on your guidelines, tools, and quality standards. The team is yours — managed by DG Stream, accountable to your KPIs.',
    features: [
      'Team of 5–200 trained specialists allocated to your project',
      'Domain-specific onboarding and guideline training before day one',
      'Dedicated QA manager reviewing all outputs',
      'Weekly performance reports and monthly business reviews',
      'Team scales up or down with 7-day notice',
    ],
  },
  {
    badge: 'Managed Capacity',
    title: 'Shared Capacity Pool',
    desc: 'For variable or burst demand, access our trained capacity pool. Tasks are routed to the right specialists based on domain, language, and skill requirements — with the same quality controls as dedicated teams.',
    features: [
      'Access to 500+ trained annotators and operators on demand',
      'Burst capacity for time-sensitive projects within 48 hours',
      'No minimum commitment — pay for what you use',
      'Same dual-review quality model as dedicated teams',
      'Daily output reporting and accuracy dashboards',
    ],
  },
  {
    badge: 'Specialist Hiring',
    title: 'Domain Expert Sourcing',
    desc: 'For projects requiring domain-specific expertise — medical annotation, legal NLP, or scientific data — we source and vet specialist annotators with verified credentials in the relevant field.',
    features: [
      'Medical professionals for radiology and clinical NLP projects',
      'Legal specialists for contract and compliance annotation',
      'Native speakers for multilingual NLP tasks across 14 languages',
      'All specialists background-checked and NDA-signed',
      'Credential verification provided on request',
    ],
  },
  {
    badge: 'Process Design',
    title: 'Workflow & Tool Setup',
    desc: 'We set up and manage your annotation environment — configuring your preferred platform, building annotation guidelines, designing quality protocols, and integrating outputs into your data pipeline.',
    features: [
      'Platform setup: Label Studio, Scale AI, Appen, CVAT, and custom tools',
      "Annotation guideline creation with your team's input",
      'Quality control workflows designed to your accuracy targets',
      'Output format mapping to your downstream systems',
      'Pilot batch review before full-scale production begins',
    ],
  },
];

export const teamRoles = [
  {num:'01',role: 'Annotation Specialist', title: 'Data Annotators', desc: 'Trained labellers specialised by data type — image, video, text, audio, or 3D. Tested before assignment, monitored by accuracy KPIs throughout the project lifecycle.', skills: ['Computer Vision', 'NLP', 'Audio', 'LIDAR', 'RLHF'] },
  {num:'02',role: 'Quality Assurance', title: 'QA Reviewers', desc: 'Senior reviewers who independently verify annotator output against your quality standard. The last checkpoint before delivery. Every batch passes through this role.', skills: ['Accuracy Review', 'Guideline Audit', 'Error Analysis', 'Reporting'] },
  {num:'03',role: 'Operations', title: 'Project Managers', desc: 'Dedicated PMs who own the relationship, manage team performance, and ensure delivery timelines. Your single point of contact for daily communication and escalation.', skills: ['Delivery Mgmt', 'KPI Tracking', 'Escalation', 'Reporting'] },
  {num:'04',role: 'Domain Expert', title: 'Subject Matter Experts', desc: 'Credentialed professionals for specialist annotation — medical doctors for radiology tasks, lawyers for legal NLP, and certified translators for multilingual projects.', skills: ['Medical', 'Legal', 'Finance', 'Multilingual'] },
  {num:'05',role: 'BPO Operations', title: 'Customer Support Agents', desc: 'Trained on your product, tone, and escalation process. Operate within your existing helpdesk tooling. CSAT targets and performance monitoring included in every engagement.', skills: ['Email', 'Live Chat', 'Zendesk', 'Freshdesk'] },
  {num:'06',role: 'Data Operations', title: 'Data Processors & Analysts', desc: 'Specialists in data entry, cleaning, enrichment, and structured output. Experienced with CRM systems, spreadsheet workflows, and large-scale database management.', skills: ['Data Entry', 'CRM', 'Enrichment', 'Excel / SQL'] },
];

export const pricingPlans = [
  {
    num:'01',
    badge: 'Project-Based', badgeWhite: false, featured: false,
    title: 'Batch Project', price: 'Custom', priceUnit: '/ project',
    desc: 'Scoped and priced per project. Ideal for one-time annotation batches or BPO tasks with a defined volume and deadline.',
    features: ['Scoped estimate within 24 hours', 'Pilot batch before full production', 'Dual-review QA included', 'Delivery in your format', 'No minimum volume requirement'],
    cta: 'Get a Quote', ctaStyle: 'btn-outline',link:'/contact'
  },
  {
    num:'02',
    badge: 'Managed Operations', badgeWhite: true, featured: true,
    title: 'Monthly Retainer', price: 'Custom', priceUnit: '/ month',
    desc: 'Ongoing managed operations with a dedicated team. Best for continuous annotation pipelines or sustained BPO operations.',
    features: ['Dedicated team allocated to your project', 'Priority capacity and 24h burst scaling', 'Dedicated project manager', 'Daily accuracy and output reporting', 'Monthly business review included', '99.2% accuracy SLA by contract'],
    cta: 'Start a Conversation', ctaStyle: 'btn-lime',link:'/contact'
  },
  {
    num:'03',
    badge: 'Enterprise', badgeWhite: false, featured: false,
    title: 'Enterprise Program', price: 'Custom', priceUnit: '/ program',
    desc: 'Multi-team, multi-domain operations with custom SLAs, white-label reporting, and integration into your data infrastructure.',
    features: ['Multi-team deployment across domains', 'Custom SLA and accuracy targets', 'White-label reporting and dashboards', 'Data pipeline integration support', 'Dedicated account director'],
    cta: 'Book an Enterprise Call', ctaStyle: 'btn-outline',link:'/contact'
  },
];
