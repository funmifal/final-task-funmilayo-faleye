# Dev and Design HQ Bootcamp — Final Graduation Task

**Candidate:** Funmilayo Faleye  
**Target Roles:** Product Engineer (Primary) / Design Engineer (Secondary)  
**Submission Deadline:** Monday, 19 October 2026  

---

## Overview

This repository hosts the master graduation deliverables and evidence record for the **Dev and Design HQ Bootcamp**. It organizes market research, lead pipeline tracking, and links to all production software applications and distributed system architectures completed across the curriculum.

---

## Repository Structure

```text
├── SUBMISSION.md            # Master graduation submission document & deliverables index
├── README.md                # Repository overview and guide
├── .gitignore               # Ignored artifacts (node_modules, local backups, env files)
├── evidence/                # Official graduation brief & requirements authority
│   └── final-graduation-task (1) (3).pdf
├── job-research/            # Part 1: 10 real role analyses & skill gap matrix
│   └── Product Engineer Job Tracker.xlsx
├── tracker/                 # Part 1: Master job leads tracker (4 tabs: Leads, Daily log, Message library, Weekly review)
│   ├── Job_Leads_Tracker.xlsx
│   └── Job_Leads_Tracker_Filled_Updated.xlsx
├── portfolio/               # Standalone engineering portfolio & case studies site
│   ├── index.html
│   └── style.css
└── scripts/                 # Isolated Node.js automation scripts (ExcelJS)
    ├── package.json
    ├── package-lock.json
    ├── update_tracker.js
    └── verify_tracker.js
```

---

## Core Project Repositories

Each major engineering application is maintained in its own dedicated, production repository:

1. **Rota (Workforce Management & Shift Scheduling)**
   - **Repository:** [https://github.com/funmifal/ROTA](https://github.com/funmifal/ROTA)
   - **Stack:** React Native (Expo), TypeScript, Express.js, PostgreSQL (Prisma), Redis (BullMQ), Flutterwave.
   - **Features:** 3-tier state architecture, deterministic proration engine, and 200-VU cached activity feed benchmark.

2. **Matinee (High-Concurrency Mobile Cinema Ticketing)**
   - **Repository:** [https://github.com/funmifal/MATINEE](https://github.com/funmifal/MATINEE)
   - **Stack:** React Native (Expo), TypeScript, Express.js, PostgreSQL (Prisma), Redis, BullMQ.
   - **Features:** Atomic seat holding via `SET NX EX`, database unique safety net, living component library, and 500-VU stress test report.

3. **Background Job System (System Design Project)**
   - **Repository:** [https://github.com/ScrappyAT/background-job-system](https://github.com/ScrappyAT/background-job-system)
   - **Stack:** Node.js, TypeScript, DeepSeek API, Zod, Redis worker queues.
   - **Features:** Asynchronous AI review analysis, idempotency keys, exponential backoff retries, and dead-letter queue routing.

---

## Verification & Status

For detailed audit metrics, qualified lead counts, architecture links, and outstanding items, please refer directly to [`SUBMISSION.md`](./SUBMISSION.md).
