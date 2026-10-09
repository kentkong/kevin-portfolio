export type LasV14PageId = "p1" | "p3" | "p4";

export const lasV14Nav: { id: LasV14PageId; label: string }[] = [
  { id: "p1", label: "OVERVIEW" },
  { id: "p3", label: "TECHNOLOGY EXPLORER" },
  { id: "p4", label: "CUSTOMER JOURNEY" },
];

export type TechCategoryKey =
  | "CRM"
  | "Collection"
  | "Warehouse"
  | "Transformation"
  | "Activation"
  | "Engagement"
  | "AI"
  | "Analytics";

export type TechCategory = {
  key: TechCategoryKey;
  listLabel: string;
  listHint: string;
  icon: string;
  name: string;
  copy: string;
  examplePlatform: string;
  alternatives: string[];
  inbound: string;
  outbound: string;
  question: string;
  role: string;
  archRole: string;
  commonData: string;
  selection: string;
  connects: string;
};

export const techCategories: TechCategory[] = [
  {
    key: "CRM",
    listLabel: "◎ CRM",
    listHint: "Customer & account systems",
    icon: "◎",
    name: "CRM",
    copy:
      "Manages customer, account and relationship data and often acts as a core operational source for lifecycle activity.",
    examplePlatform: "Salesforce",
    alternatives: ["Salesforce", "HubSpot", "Microsoft Dynamics 365", "Zoho CRM"],
    inbound: "forms · sales · service · account activity",
    outbound: "warehouse · engagement · support · analytics",
    question: "What role does CRM play?",
    role:
      "CRM provides persistent customer and account context that other systems can enrich, analyse and activate.",
    archRole: "System of record / operational customer context",
    commonData: "Profiles, accounts, contacts, preferences, sales and service activity",
    selection: "B2B/B2C model, sales/service needs, ecosystem, scale and existing investment",
    connects: "Warehouses, marketing platforms, support systems, product data and BI",
  },
  {
    key: "Collection",
    listLabel: "⇣ DATA COLLECTION",
    listHint: "Events & ingestion",
    icon: "⇣",
    name: "DATA COLLECTION",
    copy:
      "Captures behavioural events and moves operational data from websites, apps and business systems into shared data infrastructure.",
    examplePlatform: "Fivetran / Segment",
    alternatives: ["Fivetran", "Segment", "Airbyte", "RudderStack", "mParticle"],
    inbound: "web · app · CRM · commerce · support",
    outbound: "warehouse · CDP · streaming · analytics",
    question: "Why have a collection layer?",
    role:
      "Collection standardises how customer signals enter the ecosystem so downstream teams do not depend on isolated point-to-point feeds.",
    archRole: "Event collection and ingestion",
    commonData: "Events, transactions, identities, source records and operational changes",
    selection: "Batch vs real-time needs, source coverage, governance and engineering ownership",
    connects: "Warehouses, CDPs, analytics, activation and event streams",
  },
  {
    key: "Warehouse",
    listLabel: "▰ DATA WAREHOUSE",
    listHint: "Central customer data",
    icon: "▰",
    name: "DATA WAREHOUSE",
    copy:
      "Centralises customer, transaction and behavioural data so governed history can support analytics, activation and AI.",
    examplePlatform: "Snowflake",
    alternatives: ["Snowflake", "BigQuery", "Databricks", "Amazon Redshift"],
    inbound: "collection · CRM · commerce · product events",
    outbound: "transformation · activation · AI · analytics",
    question: "Why centralise customer data?",
    role:
      "A warehouse provides reusable customer history outside individual marketing tools and reduces duplicated data logic.",
    archRole: "Shared data foundation",
    commonData: "Customer history, transactions, behavioural events, product usage and derived attributes",
    selection: "Cloud ecosystem, scale, performance, governance, cost and data-team capability",
    connects: "Transformation, reverse ETL, BI, ML/AI and customer platforms",
  },
  {
    key: "Transformation",
    listLabel: "◆ TRANSFORMATION",
    listHint: "Models & definitions",
    icon: "◆",
    name: "TRANSFORMATION",
    copy:
      "Turns raw data into trusted customer models, lifecycle states, metrics and reusable business definitions.",
    examplePlatform: "dbt",
    alternatives: ["dbt", "Dataform", "Coalesce", "SQL pipelines"],
    inbound: "warehouse raw data",
    outbound: "customer models · analytics · activation · AI",
    question: "Why transform before activation?",
    role:
      "Raw source tables rarely express lifecycle concepts consistently; transformation creates governed definitions that teams can reuse.",
    archRole: "Modelling and semantic logic",
    commonData: "Lifecycle state, customer value, churn indicators, eligibility and audience attributes",
    selection: "Data-team workflow, testing, lineage, orchestration and warehouse choice",
    connects: "Warehouse, analytics, activation and AI",
  },
  {
    key: "Activation",
    listLabel: "◇ ACTIVATION",
    listHint: "Audience & data sync",
    icon: "◇",
    name: "ACTIVATION",
    copy:
      "Moves warehouse-defined audiences and customer attributes into tools that execute experiences.",
    examplePlatform: "Hightouch",
    alternatives: ["Hightouch", "Census", "RudderStack", "Custom APIs"],
    inbound: "warehouse customer models",
    outbound: "engagement · paid media · CRM · support",
    question: "Why separate activation?",
    role:
      "Activation lets companies keep customer logic centrally while distributing only the data needed by execution platforms.",
    archRole: "Reverse ETL / audience sync",
    commonData: "Audience membership, attributes, scores, lifecycle state and eligibility",
    selection: "Destination coverage, sync latency, governance and warehouse strategy",
    connects: "Engagement platforms, ad networks, CRM and service tools",
  },
  {
    key: "Engagement",
    listLabel: "◉ CUSTOMER ENGAGEMENT",
    listHint: "Journeys & messaging",
    icon: "◉",
    name: "CUSTOMER ENGAGEMENT",
    copy:
      "Orchestrates lifecycle journeys and personalised messages across email, push, in-app, SMS and other channels.",
    examplePlatform: "Braze",
    alternatives: [
      "Braze",
      "Salesforce Marketing Cloud",
      "Iterable",
      "Adobe Journey Optimizer",
      "Klaviyo",
    ],
    inbound: "events · attributes · audiences",
    outbound: "email · push · in-app · SMS · web",
    question: "What does the engagement layer own?",
    role:
      "It turns customer data and decisions into timed, personalised experiences and captures response signals.",
    archRole: "Journey orchestration and messaging",
    commonData: "Triggers, eligibility, content, channel preference, delivery and engagement outcomes",
    selection: "Channel needs, scale, marketer autonomy, data model, real-time requirements and existing suite",
    connects: "Customer channels, analytics, warehouse and experimentation",
  },
  {
    key: "AI",
    listLabel: "✦ AI & INTELLIGENCE",
    listHint: "Prediction & decisioning",
    icon: "✦",
    name: "AI & INTELLIGENCE",
    copy:
      "Adds prediction, classification, recommendation, generation and decisioning to governed customer context.",
    examplePlatform: "OpenAI / Claude",
    alternatives: ["OpenAI", "Anthropic Claude", "Google Vertex AI", "Azure AI", "Internal ML models"],
    inbound: "profiles · behaviour · content context",
    outbound: "scores · decisions · enriched attributes · content",
    question: "Where does AI belong?",
    role:
      "AI is most useful as a capability connected to governed customer context and measurable downstream decisions rather than as an isolated logo.",
    archRole: "Intelligence and decisioning",
    commonData:
      "Propensity, intent, classification, recommendations, generated content and next-best actions",
    selection: "Privacy, latency, explainability, model ownership, cost and risk",
    connects: "Warehouse, engagement, analytics, experimentation and service",
  },
  {
    key: "Analytics",
    listLabel: "▥ ANALYTICS",
    listHint: "Measurement & insight",
    icon: "▥",
    name: "ANALYTICS",
    copy:
      "Measures customer behaviour, campaign performance and business outcomes so the ecosystem can learn and improve.",
    examplePlatform: "Looker / Power BI",
    alternatives: ["Looker", "Power BI", "Tableau", "Amplitude", "Adobe Analytics"],
    inbound: "warehouse · engagement · product events",
    outbound: "insight · reporting · optimisation decisions",
    question: "Why close the loop with analytics?",
    role:
      "Measurement turns customer responses back into evidence for optimisation, planning and future decisioning.",
    archRole: "Measurement and insight",
    commonData: "Engagement outcomes, conversion, retention, revenue, cohorts and journey performance",
    selection: "Audience, BI maturity, product analytics needs, governance and reporting workflows",
    connects: "Warehouse, product teams, marketing, finance and leadership",
  },
];

export type JourneyStep = {
  timelineLabel: string;
  kicker: string;
  title: string;
  copy: string;
  metaLines: string[];
  behind: string;
};

export const journeySteps: JourneyStep[] = [
  {
    timelineLabel: "Sign up",
    kicker: "STEP 01 · CUSTOMER ACTION",
    title: "Customer creates an account",
    copy: "The customer signs up on the website. A known identity and signup event are created.",
    metaLines: [
      "Customer sees: Account confirmation",
      "Data generated: Identity + signup event",
      "Business purpose: Begin onboarding",
      "Next: Persist profile and behaviour",
    ],
    behind:
      "The website captures the action and passes the event into the customer-data pipeline so it can be used outside the website itself.",
  },
  {
    timelineLabel: "Event captured",
    kicker: "STEP 02 · EVENT CAPTURED",
    title: "Signup enters the data pipeline",
    copy: "The behavioural event is captured alongside the new customer identity.",
    metaLines: [
      "Customer sees: No visible change",
      "Data generated: Signup timestamp + source",
      "Business purpose: Make behaviour reusable",
      "Next: Store centrally",
    ],
    behind:
      "The event is no longer confined to the website and can now be joined with CRM, commerce and support data.",
  },
  {
    timelineLabel: "Profile",
    kicker: "STEP 03 · PROFILE",
    title: "Customer profile is unified",
    copy:
      "The warehouse combines identity, account and behavioural context into a reusable customer model.",
    metaLines: [
      "Customer sees: Consistent experience",
      "Data generated: Unified profile",
      "Business purpose: Shared customer context",
      "Next: Enrich",
    ],
    behind: "Snowflake and transformation models provide a governed source for downstream decisioning.",
  },
  {
    timelineLabel: "AI decision",
    kicker: "STEP 04 · AI DECISION",
    title: "Context is enriched",
    copy: "AI or predictive logic adds intent, propensity or personalisation signals to the customer context.",
    metaLines: [
      "Customer sees: More relevant experience",
      "Data generated: Score / decision",
      "Business purpose: Improve relevance",
      "Next: Activate",
    ],
    behind: "The intelligence layer consumes governed context and returns a decision or enriched attribute.",
  },
  {
    timelineLabel: "Audience sync",
    kicker: "STEP 05 · AUDIENCE SYNC",
    title: "Customer becomes actionable",
    copy: "Hightouch synchronises the relevant audience and attributes into Braze.",
    metaLines: [
      "Customer sees: Nothing yet",
      "Data generated: Audience membership",
      "Business purpose: Operationalise data",
      "Next: Trigger journey",
    ],
    behind: "Reverse ETL bridges warehouse-owned customer logic and the execution platform.",
  },
  {
    timelineLabel: "Journey trigger",
    kicker: "STEP 06 · JOURNEY TRIGGER",
    title: "Lifecycle journey begins",
    copy: "Braze evaluates the customer against journey rules and starts the onboarding flow.",
    metaLines: [
      "Customer sees: Journey begins",
      "Data generated: Trigger event",
      "Business purpose: Timely engagement",
      "Next: Deliver message",
    ],
    behind: "Orchestration applies timing, eligibility, channel and personalisation rules.",
  },
  {
    timelineLabel: "Message",
    kicker: "STEP 07 · MESSAGE",
    title: "Personalised experience is delivered",
    copy: "The customer receives the selected message through the appropriate channel.",
    metaLines: [
      "Customer sees: Welcome email",
      "Data generated: Delivery / open / click",
      "Business purpose: Drive activation",
      "Next: Measure response",
    ],
    behind: "Engagement turns the architecture into a visible customer experience.",
  },
  {
    timelineLabel: "Result",
    kicker: "STEP 08 · RESULT",
    title: "Response returns to the ecosystem",
    copy: "Engagement data feeds analytics and customer history so future decisions can improve.",
    metaLines: [
      "Customer sees: Continued journey",
      "Data generated: Outcome metrics",
      "Business purpose: Learn and optimise",
      "Next: Iterate",
    ],
    behind:
      "The architecture closes the loop: customer response becomes new data for measurement and future decisioning.",
  },
];

export const journeyScenarios = [
  "WELCOME & ONBOARDING",
  "ABANDONED BASKET",
  "CHURN PREVENTION",
  "UPSELL",
  "WIN-BACK",
] as const;
