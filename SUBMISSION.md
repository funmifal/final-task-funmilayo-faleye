# Dev and Design HQ Bootcamp — Graduation Submission

## 1. Candidate and Graduation Overview

- **Candidate Name:** Funmilayo Faleye
- **GitHub Profile:** [https://github.com/funmifal](https://github.com/funmifal) (Verified accessible, HTTP 200)
- **LinkedIn Profile:** [LINK NEEDED: Public LinkedIn Profile URL]
- **Primary Target Role:** **Product Engineer**
- **Secondary Target Role:** **Design Engineer**
- **Submission Date:** 19 October 2026
- **Purpose of Submission:**
  This document serves as the master graduation portfolio and verification record for the Dev and Design HQ Bootcamp. It indexes the core deliverables across all four curriculum tracks: market positioning and lead tracking (Part 1), production mobile applications Rota and Matinee (Part 2), backend system design and architecture (Part 3), and technical readiness evidence.

---

## 2. Part 1: Job Research and Lead Tracking

### Deliverable Workbooks in Workspace
- **Job Research Workbook:** [`job-research/Product Engineer Job Tracker.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/job-research/Product%20Engineer%20Job%20Tracker.xlsx)
- **Master Job Leads Tracker:** [`tracker/Job_Leads_Tracker.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/tracker/Job_Leads_Tracker.xlsx)
- **Online View-Only Tracker:** [Google Sheets Job Leads Tracker](https://docs.google.com/spreadsheets/d/1l-AQRhKX7fquI_g6JpLT6ycSOlO6poBe/edit?usp=sharing&ouid=107319079137042683265&rtpof=true&sd=true) *(Verified public view link, HTTP 200)*

### Verified Research & Tracker Integrity
1. **10 Role Postings & Skill Gap Analysis:**
   - 10 real product and design engineering roles documented across MOLO17, VVD, Namefi, Obble, Matcha.fm, Consensys, Yazio, Kick, Linear, and Built In.
   - Detailed mapping of tech stacks (Next.js, TypeScript, Supabase, Redis, BullMQ, NestJS, Tailwind CSS, PostgreSQL, Figma) against personal portfolio readiness.
2. **Standard 4-Tab Tracker Structure:**
   - **`Leads`:** Exact 21 columns including Lead ID, Company, Signal, Person, Their Role, Contact URL, Remote Rules, Temperature, Stage, Next Action, and Next Action Date.
   - **`Daily log`:** Exact 8 columns tracking daily outreach quotas and building time across 4 weeks of weekdays.
   - **`Message library`:** 4 customized outreach templates (V1 hiring team outreach, V2 referral, V3 follow-up 1, V4 final follow-up) with zero-safe reply rate formulas (`=IF(D2>0, E2/D2, 0)`).
   - **`Weekly review`:** 4 review weeks dynamically summarizing daily logs via Excel formulas.

### Lead Qualification Status
- **Total Company Prospects Audited:** 100
- **Genuinely Qualified Leads (`Researched` Stage):** **91**
  *(Verified company, verified decision-maker executive with LinkedIn profile URL, verified hiring signal/careers page, and planned next action across global product-led startups, developer tooling, and remote-first engineering teams).*
- **Unverified Prospects Retained (`Identified` Stage):** **9**
  *(Retained at Identified stage due to closed listings, unverified direct executive profiles, strict regional geo-restrictions such as EU/UK-only, or aggregator identification: vvd, matcha.fm, duvo.ai, Bamudda, Avion Labs, Yazio, Figma, GhostTraders, IxDF).*
- **Lead Volume Status:** **100 total leads populated (100% quota achieved)**, satisfying the brief's mandatory 100-lead threshold.
- **Activity Log Status:** Only `2026-10-12` and `2026-10-19` have recorded lead research additions. Daily log rows and sent message counts (`0 sent`, `0 replies`) remain unrecorded to strictly prevent fabrication of past activity.

---

## 3. Part 2: Rota (Workforce Management & Shift Scheduling)

- **Application Type:** Enterprise-grade mobile workforce management and shift scheduling application.
- **Tech Stack:** React Native (Expo), TypeScript, Express.js, PostgreSQL (Prisma), Redis (BullMQ), Flutterwave.
- **Public GitHub Repository:** [https://github.com/funmifal/ROTA](https://github.com/funmifal/ROTA) *(Verified accessible, HTTP 200)*
- **Live Demo / Build Artifact:** [LINK NEEDED: Rota live Expo demo / Android development APK URL] *(Local project contains Dockerized production configuration in `Backend/Dockerfile` and Expo EAS config in `Frontend/eas.json`; no public deployment URL or local `.apk` binary verified).*
- **Verified Architecture Documents in Repository:**
  - `ARCHITECTURE.md` (System topology, read/write database routing, connection pooling justification, BullMQ worker queues)
  - `STATE.md` (3-tier state architecture: TanStack Query for server state, Zustand for client state, AsyncStorage for offline persistence)
  - `SECURITY.md` (Multi-tenant data isolation, server-side RBAC, JWT rotation, and rate limiting)
  - `SHARDING.md` (Multi-tenant database sharding strategy and shard key design)
  - `SETTINGS_COORDINATION.md` (Cross-device sync and Last-Write-Wins conflict handling)
  - `PRORATION.md` (Deterministic integer cents proration engine, plan tiers, and double-entry ledger)
  - `LEARNING-LOG.md` (Engineering lessons on replica lag, refresh token families, and integer arithmetic)
  - `LOAD_TEST_REPORT.md` (Verified benchmark: 200 Virtual Users on Activity Feed cursor pagination; Redis caching delivered a **1614.1x speedup** with average response time reduced to 0.18ms)

---

## 4. Part 3: Matinee (High-Concurrency Mobile Cinema Ticketing)

- **Application Type:** Consumer mobile cinema ticket booking application engineered for high concurrency, deterministic seat holds, and zero double bookings.
- **Tech Stack:** React Native (Expo), TypeScript, Express.js, PostgreSQL (Prisma), Redis, BullMQ, Tailwind CSS.
- **Public GitHub Repository:** [https://github.com/funmifal/MATINEE](https://github.com/funmifal/MATINEE) *(Verified accessible, HTTP 200)*
- **Live Demo / Build Artifact:** [LINK NEEDED: Matinee Android APK / Expo demo URL] *(Note: Template URLs in README return SSL handshake errors or expired artifact endpoints; live build artifact needed).*
- **Video Walkthrough:** [LINK NEEDED: Matinee YouTube / Loom demo video URL] *(Note: The README placeholder link `https://youtu.be/matinee-system-demo` is unavailable; new live video link required).*
- **Verified Architecture Documents & Test Reports in Repository:**
  - `ARCHITECTURE.md` (BFF architecture, read-your-own-writes consistency, and BullMQ background queue architecture)
  - `TRAFFIC.md` (Traffic management design: atomic Redis seat locking via `SET NX EX`, database unique constraint safety net, and virtual waiting room queue)
  - `SHARDING.md` (Horizontal database sharding plan and hot-shard mitigations)
  - `COMPONENTS.md` (Living design system reference for all 12 design token primitives and SeatMap component)
  - `LEARNING-LOG.md` (Reflection log on webhook idempotency, minor currency arithmetic, and WebSockets vs polling)
  - `docs/load_test_log_analysis.md` (Verified 500-VU load test log analysis and latency percentiles)
  - `docs/traffic_management_report.md` (Detailed traffic management specification)
  - `docs/demo_video_script.md` (Script for demo video walkthrough)
  - `docs/linkedin_post.md` (Verified technical post draft: *"The 'Zainab & Musa' Problem: How We Solved Mobile Cinema Double-Bookings Under 5,000 Concurrent Requests"*, ready to publish)

---

## 5. System Design Project

- **Project Name:** Background Job System (`background-job-system`)
- **System Overview:** Asynchronous background processing system for AI-powered customer-review analysis featuring durable worker queues, automated retry with exponential backoff, and dead-letter queue routing.
- **Public GitHub Repository:** [https://github.com/ScrappyAT/background-job-system](https://github.com/ScrappyAT/background-job-system) *(Verified accessible, HTTP 200)*
- **Verified Test Evidence in Repository (`evidence/`):**
  - `01-idempotency.png` (Duplicate job submission prevention)
  - `03-backoff-retries.png` (Exponential backoff retry lifecycle)
  - `04-concurrency-cap-preliminary.png` & `11-50-job-concurrency-cap.png` (Worker concurrency cap enforcement)
  - `04-dead-job-no-further-retry.png` & `09-dead-letter-view.png` (Dead-letter queue handling)
  - `05-two-workers-worker-1.png` & `06-two-workers-worker-2.png` (Distributed worker pool coordination)
  - `05-stuck-before-kill.png`, `06-stuck-after-kill.png`, `07-stuck-recovery.png`, `08-stuck-recovery-completed.png` (Crash recovery & stuck job reclamation)
  - `10-manual-retry-reset.png` (Operator manual retry mechanics)
- **Design Documentation:** [LINK NEEDED: Dedicated System Design Architecture Document / RELAY.md / PAYD.md]
- **Demonstration Evidence:** [LINK NEEDED: System design walkthrough video / defense recording URL]

---

## 6. Portfolio & Case Studies

- **Workspace Portfolio Deliverable:** [`portfolio/index.html`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html) & [`portfolio/style.css`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/style.css) *(Fully responsive, high-aesthetic dark theme with glassmorphism, interactive flowcharts, and verified metric counters).*
- **Live Deployed Portfolio URL:** [LINK NEEDED: Live deployment URL (e.g. GitHub Pages / Vercel)]
- **Case Study 1 (Rota):** Featured in [`portfolio/index.html#case-study-rota`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html#case-study-rota) & repository deep dive on workforce scheduling, 3-tier state, integer-cents proration ledger, and **1614.1x Redis speedup** benchmark.
- **Case Study 2 (Matinee):** Featured in [`portfolio/index.html#case-study-matinee`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html#case-study-matinee) & repository deep dive on solving the "Zainab & Musa" concurrency problem under 5,000 requests, two-phase atomic Redis locks (`SET NX EX`), and 12-token SeatMap design system.
- **Case Study 3 (System Design):** Featured in [`portfolio/index.html#case-study-bjs`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html#case-study-bjs) & repository deep dive on distributed review analysis, SHA-256 idempotency, heartbeat crash recovery, 50-job concurrency throttling, and DLQ routing.

---

## 7. Open-Source Contributions

- **Contribution 1:** [LINK NEEDED: Public pull request link and merged/review status]
- **Contribution 2:** [LINK NEEDED: Public pull request link and merged/review status]

*(Note: Per submission rules, only verifiable public pull requests to external repositories are to be listed here; no mock or unmerged claims are included.)*

---

## 8. LinkedIn Posts (Build in Public)

- **Post 1:** [LINK NEEDED: Published LinkedIn post URL] *(Draft available locally in `MATINEE/docs/linkedin_post.md`: "The 'Zainab & Musa' Double-Booking Problem")*
- **Post 2:** [LINK NEEDED: Published LinkedIn post URL]
- **Post 3:** [LINK NEEDED: Published LinkedIn post URL]

---

## 9. Supporting Workspace Evidence

All local source files supporting this submission are maintained inside the graduation workspace (`C:\Users\Biggest Sam\Desktop\Graduatin-Task\`):
- **Curriculum & Brief Authority:** [`evidence/final-graduation-task (1) (3).pdf`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/evidence/final-graduation-task%20%281%29%20%283%29.pdf)
- **Master Lead Tracker:** [`tracker/Job_Leads_Tracker.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/tracker/Job_Leads_Tracker.xlsx) *(100 verified leads)*
- **Original Unmodified Source Tracker:** [`tracker/Job_Leads_Tracker_Filled_Updated.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/tracker/Job_Leads_Tracker_Filled_Updated.xlsx)
- **Role & Competency Analysis:** [`job-research/Product Engineer Job Tracker.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/job-research/Product%20Engineer%20Job%20Tracker.xlsx)
- **Standalone Engineering Portfolio:** [`portfolio/index.html`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html) & [`portfolio/style.css`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/style.css)
- **Isolated Node.js Automation:** [`scripts/package.json`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/scripts/package.json)

---

## 10. Outstanding Items & Missing Deliverables Summary

To achieve full passing criteria under the graduation brief before final submission, the following items require completion and real link attachments:

1. **Lead Target Deficit (COMPLETED):**
   - 100 leads successfully verified and recorded in [`tracker/Job_Leads_Tracker.xlsx`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/tracker/Job_Leads_Tracker.xlsx) (91 Researched, 9 Identified). 100-lead threshold fully satisfied.
2. **Live Demos / Build Artifacts:**
   - Attach accessible APK downloads or video walkthroughs for Rota and Matinee.
3. **Portfolio Deployment URL:**
   - Standalone portfolio created in [`portfolio/index.html`](file:///c:/Users/Biggest%20Sam/Desktop/Graduatin-Task/portfolio/index.html). Needs public deployment link (e.g. GitHub Pages or Vercel) once public repo is live.
4. **Open Source & Social Proof:**
   - Attach links to your submitted open-source pull requests and publish the draft post from `MATINEE/docs/linkedin_post.md` to LinkedIn.
5. **Public Repository Setup (COMPLETED):**
   - Public repository is live and up-to-date at [https://github.com/funmifal/final-task-funmilayo-faleye](https://github.com/funmifal/final-task-funmilayo-faleye).
