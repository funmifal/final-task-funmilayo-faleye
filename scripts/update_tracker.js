const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

async function updateTrackerWithResearch() {
  const trackerPath = path.resolve(__dirname, '../tracker/Job_Leads_Tracker.xlsx');
  const backupPath = path.resolve(__dirname, '../tracker/Job_Leads_Tracker.backup.xlsx');

  // 1. Create a backup copy before editing
  fs.copyFileSync(trackerPath, backupPath);
  console.log(`Backup created at: ${backupPath}`);

  // Also backup source file if not already backed up
  const srcPath = path.resolve(__dirname, '../tracker/Job_Leads_Tracker_Filled_Updated.xlsx');
  const srcBackup = path.resolve(__dirname, '../tracker/Job_Leads_Tracker_Filled_Updated.backup.xlsx');
  if (fs.existsSync(srcPath) && !fs.existsSync(srcBackup)) {
    fs.copyFileSync(srcPath, srcBackup);
    console.log(`Source backup created at: ${srcBackup}`);
  }

  // 2. Load the workbook with ExcelJS
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(trackerPath);

  const leadsSheet = workbook.getWorksheet('Leads');
  if (!leadsSheet) {
    throw new Error('Leads sheet not found');
  }

  // Research data for the 20 existing prospects
  const researchData = [
    {
      leadId: 'L001',
      company: 'MOLO17',
      website: 'https://molo17.com',
      whatTheyDo: 'Enterprise real-time data integration, database replication, and offline-first software (Gluesync).',
      hiringSignal: 'Active careers on molo17.com/careers; previously listed Junior Product Engineer (Java/Kotlin).',
      remoteRules: 'Specific countries',
      person: 'Daniele Angeli',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/danieleangeli',
      source: 'https://molo17.com/careers/product-engineer-junior-java-kotlin/',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Check vacancy status and confirm if Nigeria-based engineers are considered on a contractor basis',
      nextActionDate: '2026-10-21',
      notes: 'Verified Founder & CEO Daniele Angeli on LinkedIn (Couchbase Ambassador). Company is Italy-based (CET hours). Prior Java/Kotlin Junior Product Engineer role identified. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L002',
      company: 'vvd',
      website: 'https://vvd.world',
      whatTheyDo: 'Collaborative worldbuilding and interactive storytelling software platform.',
      hiringSignal: 'Junior Product Engineer (Next.js, TypeScript, Supabase) previously listed; marked closed on WorkWithIndies.',
      remoteRules: 'Unknown',
      person: 'Not verified',
      theirRole: 'Founder',
      contactLink: 'Not verified (individual LinkedIn profile unverified)',
      source: 'https://www.workwithindies.com/careers/vvd-junior-product-engineer',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Monitor vvd.world/careers for reopened openings and locate verified founder LinkedIn URL',
      nextActionDate: '2026-10-21',
      notes: 'Role marked closed on WorkWithIndies. Individual founder direct LinkedIn profile not independently verified in public index. Retained at Identified stage per evidence rules. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L003',
      company: 'Namefi',
      website: 'https://namefi.io',
      whatTheyDo: 'ICANN-accredited domain registrar and protocol tokenizing web domains on-chain for DeFi and Web3.',
      hiringSignal: 'Active "Product Engineer (AI Empowered)" opening ($1,500 - $9,000/mo contractor) on namefi.io/careers.',
      remoteRules: 'Worldwide',
      person: 'Zainan Victor Zhou',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/zainan-zhou',
      source: 'https://namefi.io/r/en/careers/build-nontraditional-2026-05',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Review AI-empowered product engineering requirements and draft personalized pitch referencing shipped projects',
      nextActionDate: '2026-10-21',
      notes: 'Verified Founder & CEO Victor Zhou (Ethereum EIP Editor). Open role specifically seeks builders fluent in AI dev tools. Worldwide remote contractor structure eligible for Nigeria applicants. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L004',
      company: 'Obble',
      website: 'https://obble.ai',
      whatTheyDo: 'Artificial intelligence platform building talent evaluation, recruitment, and AI hiring workflows.',
      hiringSignal: 'Early-stage team expansion; previously advertised product engineering and AI agent development.',
      remoteRules: 'Specific countries',
      person: 'Sweta Gupta',
      theirRole: 'Co-founder',
      contactLink: 'https://www.linkedin.com/company/obble-ai',
      source: 'https://obble.ai/careers',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Connect with Obble founders to inquire about remote contractor opportunities for product engineers',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-founders Sweta Gupta & Om Agarwal. Company backed by NVIDIA Inception and Microsoft for Startups. Remote hubs primarily India/UAE; Nigeria remote eligibility needs direct confirmation. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L005',
      company: 'Saturation',
      website: 'https://saturation.io',
      whatTheyDo: 'Cloud-based production finance, budgeting, and fintech management platform for the film and creative industries.',
      hiringSignal: 'Careers page on saturation.io; previously listed Product Engineer (Node/React/TypeScript).',
      remoteRules: 'Worldwide',
      person: 'Jens Jacob',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/jensjacob',
      source: 'https://saturation.io/careers/product-engineer',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Study Saturation budgeting and expense management workflows and draft personalized outreach to Jens Jacob',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-Founders Jens Jacob (CEO) and Simon Tam (CTO). Modern web app replacing legacy film budgeting software. Worldwide remote-friendly culture. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L006',
      company: 'matcha.fm',
      website: 'https://matcha.fm',
      whatTheyDo: 'AI-powered job search agent and remote job aggregator for early-stage startup opportunities.',
      hiringSignal: 'Zero-noise job aggregator; previously identified Product Engineer listing (Node/React/NestJS).',
      remoteRules: 'Specific countries',
      person: 'Federico Garcia',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/company/matcha-fm',
      source: 'https://www.linkedin.com/jobs/view/product-engineer-remote-worldwide-at-matcha-fm-4473437546',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Verify whether matcha.fm is hiring for internal engineering vs syndicating external startup roles',
      nextActionDate: '2026-10-22',
      notes: 'Founded by Fico (Federico Garcia). Remote listings typically specify US, Canada, Europe, LATAM. Retained at Identified stage because Nigeria remote eligibility is unverified and primary product is an aggregator. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L007',
      company: '0G Labs',
      website: 'https://0g.ai',
      whatTheyDo: 'Decentralized AI Operating System (deAIOS) and high-throughput modular Layer 1 blockchain infrastructure.',
      hiringSignal: 'Active engineering listings on Ashby portal (ashbyhq.com/0g-labs) for Product Engineer and AI Platform Engineer.',
      remoteRules: 'Worldwide',
      person: 'Michael Heinrich',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/michaelheinrich',
      source: 'https://sailonchain.com/jobs/product-engineer-0g-labs',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Review 0G Labs deAIOS architecture documentation and prepare personalized pitch for Michael Heinrich',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-Founder & CEO Michael Heinrich (YC alumnus) and CTO Ming Wu. Active Ashby hiring board welcomes global remote applicants. Focuses on modular Web3 AI infra. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L008',
      company: 'Social Discovery Group',
      website: 'https://socialdiscoverygroup.com',
      whatTheyDo: 'Global social discovery and dating group uniting over 40 brands including Dating.com and Dil Mil.',
      hiringSignal: 'Advertised remote Product Engineer (AI-Native) requiring agentic AI workflows and fullstack ownership.',
      remoteRules: 'Worldwide',
      person: 'Dmitry Volkov',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/dmitry-volkov-philosopher-investor',
      source: 'https://socialdiscoverygroup.com/vacancies/job/e5a41beaf52b01-product-engineer-ai-native',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Research engineering leadership under Dmitry Volkov and prepare application highlighting Claude Code/agentic coding proficiency',
      nextActionDate: '2026-10-21',
      notes: 'Verified Founder Dmitry Volkov. Company employs over 1,000 digital nomads globally. Advertised AI-Native Product Engineer role specifically requires daily AI-assisted development. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L009',
      company: 'Coddy',
      website: 'https://coddy.tech',
      whatTheyDo: 'Gamified, bite-sized interactive programming education platform serving over 5 million learners worldwide.',
      hiringSignal: 'Live Product Engineer vacancy on coddy.tech/careers/product-engineer (fullstack, UI to metrics, founder mindset).',
      remoteRules: 'Worldwide',
      person: 'Nethanel Bar',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/nethanelbar',
      source: 'https://coddy.tech/careers/product-engineer',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Draft tailored outreach to Nethanel Bar showcasing interactive frontend/product engineering side projects',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-Founders Nethanel Bar (CEO) and Kevin Spektor (CTO). Remote-first, async culture. Live opening focuses on shipping end-to-end features and measuring impact. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L010',
      company: 'duvo.ai',
      website: 'https://duvo.ai',
      whatTheyDo: 'Enterprise AI agent platform automating complex back-office, procurement, and supply-chain operations.',
      hiringSignal: 'Product Engineer opening advertised on BuiltIn/Ashby (ashbyhq.com/duvo).',
      remoteRules: 'Specific countries',
      person: 'Marek Paris',
      theirRole: 'Co-founder',
      contactLink: 'https://www.linkedin.com/in/marekparis',
      source: 'https://builtin.com/job/product-engineer-eu-uk-based-remote/11350228',
      targetRole: 'Product Engineer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Monitor company careers for expansion of remote eligibility beyond EU/UK hubs',
      nextActionDate: '2026-10-22',
      notes: 'Verified Co-Founders Tomáš Čupr (CEO) and Marek Paris (CPTO). Job post explicitly specifies EU/UK-based remote. Retained at Identified stage because Nigeria applicants are not eligible under current compliance rules. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L011',
      company: 'Linear',
      website: 'https://linear.app',
      whatTheyDo: 'Purpose-built issue tracking and project management software for modern high-performance engineering teams.',
      hiringSignal: 'Active careers on linear.app/careers and Ashby (ashbyhq.com/linear) for Design Engineer (Web & Brand) and Product Engineer.',
      remoteRules: 'Worldwide',
      person: 'Karri Saarinen',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/ksaa',
      source: 'https://workfromanywhere.app/jobs/design-engineer-web-brand-at-linear',
      targetRole: 'Design Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Study Linear Web & Brand design system and prepare a micro-prototype demo relevant to Linear UI',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-Founders Karri Saarinen (CEO, former Airbnb design lead) and Tuomas Artman (CTO). Remote-first across global time zones. High bar for UI craftsmanship and design engineering. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L012',
      company: 'Kick',
      website: 'https://kick.co',
      whatTheyDo: 'Applied AI bookkeeping and financial management software platform automating accounting for modern businesses.',
      hiringSignal: 'Careers page on kick.co/careers; previously listed Design Engineer and Product Engineer roles.',
      remoteRules: 'Worldwide',
      person: 'Conrad Wadowski',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/conradwadowski',
      source: 'https://himalayas.app/companies/kick/jobs/design-engineer?pos=11&src=search',
      targetRole: 'Design Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Check whether Kick considers junior-to-mid design engineer applicants and draft outreach to Conrad Wadowski',
      nextActionDate: '2026-10-21',
      notes: 'Verified Founder & CEO Conrad Wadowski (also co-founder of Teachable). Applied AI bookkeeping startup. Prior listing required senior experience; confirm junior/mid fit before formal outreach. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L013',
      company: 'Bamudda',
      website: 'https://bamudda.com',
      whatTheyDo: 'Commerce infrastructure, online storefronts, and payment solutions for African businesses and merchants.',
      hiringSignal: 'Product Designer (UI/UX) listing for merchant dashboards, inventory, and design systems.',
      remoteRules: 'Worldwide',
      person: 'Not verified',
      theirRole: 'Designer',
      contactLink: 'Not verified (individual LinkedIn profile unverified)',
      source: 'https://www.bamudda.com/careers/product-designer/',
      targetRole: 'Product Designer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Identify verified design lead or founder at Bamudda via LinkedIn company directory',
      nextActionDate: '2026-10-22',
      notes: 'Headquartered in Kampala, Uganda; African commerce focus. Product Designer role previously open. Individual direct LinkedIn contact URL not yet verified. Retained at Identified stage. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L014',
      company: 'Avion Labs',
      website: 'https://avion-labs.com',
      whatTheyDo: 'Software development and UI/UX design agency building custom SaaS and mobile interfaces.',
      hiringSignal: 'Agency UI/UX design listing (prior advert reportedly closed Oct 2026).',
      remoteRules: 'Unknown',
      person: 'Not verified',
      theirRole: 'Designer',
      contactLink: 'Not verified (individual LinkedIn profile unverified)',
      source: 'https://avion-labs.com/careers/product-designer',
      targetRole: 'Product Designer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Verify whether a new vacancy opens and identify an active design director contact',
      nextActionDate: '2026-10-22',
      notes: 'Agency business model; prior listing reported closed. No individual verified executive contact confirmed. Retained at Identified stage. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L015',
      company: 'Yazio',
      website: 'https://yazio.com',
      whatTheyDo: 'Nutrition, fasting, and calorie-tracking consumer mobile application.',
      hiringSignal: 'Ashby portal (ashbyhq.com/yazio) lists Senior Product Designer; Junior listing closed.',
      remoteRules: 'Specific countries',
      person: 'Florian Weissenstein',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/florian-weissenstein',
      source: 'https://remotenex.us/job/junior-product-designer-monetization',
      targetRole: 'Product Designer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Retain for product design benchmark only; do not pitch unless location rules expand',
      nextActionDate: '2026-10-22',
      notes: 'Verified Co-Founder Florian Weissenstein. Yazio explicitly restricts remote roles to Germany, Spain, Portugal, and UK. Nigeria applicants are not eligible under current policy. Retained at Identified stage. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L016',
      company: 'Figma',
      website: 'https://www.figma.com',
      whatTheyDo: 'Industry-standard collaborative interface design and prototyping software platform.',
      hiringSignal: 'Early-career careers information on figma.com/careers/early-career/.',
      remoteRules: 'Specific countries',
      person: 'Dylan Field',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/dylanfield',
      source: 'https://www.figma.com/careers/early-career/',
      targetRole: 'Design Engineer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Keep for design system benchmarking; look out for open community or fellowship tracks',
      nextActionDate: '2026-10-22',
      notes: 'Verified CEO Dylan Field. Figma remote hiring is strictly geo-restricted (US, UK, Japan, select EU). Nigeria-based remote employment is not supported. Retained at Identified stage. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L017',
      company: 'GhostTraders',
      website: 'https://ghosttraders.co',
      whatTheyDo: 'Online financial education platform and tools teaching Smart Money Concepts to retail forex traders.',
      hiringSignal: 'Remote Junior UX/UI Designer listing previously on Workable; marked closed.',
      remoteRules: 'Worldwide',
      person: 'Not verified',
      theirRole: 'Designer',
      contactLink: 'Not verified (individual LinkedIn profile unverified)',
      source: 'https://ghosttraders.co/junior-ux-ui-designer-remote/',
      targetRole: 'Product Designer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Search for GhostTraders design lead or founder on LinkedIn before initiating contact',
      nextActionDate: '2026-10-22',
      notes: 'Prior advert closed. Individual direct LinkedIn contact URL not verified. Serves 14,500+ students across Africa. Retained at Identified stage per evidence rules. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L018',
      company: 'Consensys',
      website: 'https://consensys.io',
      whatTheyDo: 'Web3 software and blockchain technology company developing MetaMask, Infura, and Linea.',
      hiringSignal: 'Senior Design Engineer (MetaMask) actively listed on consensys.io/careers.',
      remoteRules: 'EMEA',
      person: 'Joseph Lubin',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/joseph-lubin-0447081',
      source: 'https://remotework.ng/remote-jobs/design',
      targetRole: 'Design Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Connect with MetaMask design recruiters on LinkedIn to verify whether contractor arrangements are supported from Nigeria',
      nextActionDate: '2026-10-21',
      notes: 'Verified Founder & CEO Joseph Lubin (Ethereum co-founder). Active MetaMask Design Engineer opening covers React/React Native, Figma, micro-interactions. Remote specified as US and EMEA Remote. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L019',
      company: 'IxDF (Interaction Design Foundation)',
      website: 'https://ixdf.org',
      whatTheyDo: 'Global UX/UI design education community, course provider, and specialized design job board.',
      hiringSignal: 'Job board aggregator; does not represent an open employer vacancy for IxDF.',
      remoteRules: 'Worldwide',
      person: 'Not verified',
      theirRole: 'Recruiter',
      contactLink: 'Not verified (job board listing, not employer contact)',
      source: 'https://ixdf.org/jobs/junior-ux-ui-designer-f-m-x-remote',
      targetRole: 'Product Designer',
      temperature: 'Cold',
      stage: 'Identified',
      nextAction: 'Look up the original hiring employer mentioned on the IxDF job board listing',
      nextActionDate: '2026-10-22',
      notes: 'CONFIRMED AS JOB BOARD: ixdf.org/jobs is an educational job aggregator, not the direct hiring employer for this role. Kept as prospect reference only; cannot be pitched directly as a company lead. Checked 19 Oct 2026.'
    },
    {
      leadId: 'L020',
      company: 'Camunda',
      website: 'https://camunda.com',
      whatTheyDo: 'Enterprise process orchestration and workflow automation software platform.',
      hiringSignal: 'Actively recruits Product Builders (Products & Engineering) on camunda.com/career/.',
      remoteRules: 'Worldwide',
      person: 'Jakob Freund',
      theirRole: 'Founder',
      contactLink: 'https://www.linkedin.com/in/jakobfreund',
      source: 'https://remotework.ng/remote-jobs/design',
      targetRole: 'Design Engineer',
      temperature: 'Cold',
      stage: 'Researched',
      nextAction: 'Review Camunda Hub product surface and prepare outreach to recruiting/engineering team',
      nextActionDate: '2026-10-21',
      notes: 'Verified Co-Founders Jakob Freund (CEO) and Bernd Ruecker (Chief Technologist). Product Builder combines product thinking, UX, and hands-on fullstack execution. Fully remote-first global culture. Checked 19 Oct 2026.'
    }
  ];

  // Update rows 2 to 21
  for (let i = 0; i < researchData.length; i++) {
    const data = researchData[i];
    const rowIdx = i + 2;
    const row = leadsSheet.getRow(rowIdx);

    row.getCell(1).value = data.leadId;
    row.getCell(2).value = new Date('2026-10-12');
    row.getCell(3).value = data.company;
    row.getCell(4).value = data.website;
    row.getCell(5).value = data.whatTheyDo;
    row.getCell(6).value = data.hiringSignal;
    row.getCell(7).value = data.remoteRules;
    row.getCell(8).value = data.person;
    row.getCell(9).value = data.theirRole;
    row.getCell(10).value = data.contactLink;
    row.getCell(11).value = data.source;
    row.getCell(12).value = data.targetRole;
    row.getCell(13).value = data.temperature;
    row.getCell(14).value = data.stage;
    // firstContactDate: None (empty)
    row.getCell(15).value = null;
    row.getCell(16).value = 'V1';
    // lastContactDate: None (empty)
    row.getCell(17).value = null;
    row.getCell(18).value = 0;
    row.getCell(19).value = data.nextAction;
    row.getCell(20).value = new Date(data.nextActionDate);
    row.getCell(21).value = data.notes;

    row.commit();
  }

  // Write updated workbook
  await workbook.xlsx.writeFile(trackerPath);
  console.log(`Successfully updated tracker at: ${trackerPath}`);
}

updateTrackerWithResearch().catch(err => {
  console.error('Error updating tracker:', err);
  process.exit(1);
});
