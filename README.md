
# Marketplace Frontend &nbsp;![CI](https://img.shields.io/github/actions/workflow/status/your-org/marketplace/ci.yml?branch=main)

Modern e‑commerce UI built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS** and the **Feature‑Sliced Design (FSD)** architecture.  
The repository ships with a bespoke component library, Storybook docs, strict ESLint rules and a full Vitest + Playwright testing matrix.

---

## ✨ Features

| Area            | Stack / Tooling                                                                   |
|-----------------|-----------------------------------------------------------------------------------|
| Build           | Vite + ESBuild (TS 4.9 target)                                                    |
| Styling         | Tailwind CSS v3                                                                   |
| UI‑kit          | Reusable primitives in `shared/ui` + Storybook                                    |
| Routing         | React Router 6                                                                    |
| Data / State    | React Query, Zustand *(plug‑in your flavour)*                                     |
| Tests           | Unit & integration with **Vitest** + **Testing‑Library**                          |
| Browser tests   | Headless **Playwright** through `@storybook/experimental-addon-test`              |
| Quality         | ESLint (Airbnb + TS) • Prettier • Commitlint                                      |
| CI              | GitHub Actions → install ➜ lint ➜ type‑check ➜ tests                              |
| Architecture    | **FSD** layers: `shared → entities → features → widgets → pages → app`            |

---

## 📂 Project layout

```text
.
├── .storybook/               # Storybook config
├── public/
├── src/
│   ├── app/                  # App entry & providers
│   ├── pages/                # Route‑level pages
│   ├── widgets/              # Page sections (Header, Footer…)
│   ├── features/             # User features (Cart, Auth…)
│   ├── entities/             # Domain entities (Product, User…)
│   ├── shared/
│   │   ├── ui/               # Design‑system primitives
│   │   ├── lib/              # Utilities
│   │   └── assets/           # Static assets & SVG icons
│   └── index.tsx
├── vitest.config.cjs         # Vitest workspace (unit + storybook)
└── tsconfig.[app|test].json
```

---

## 🚀 Quick start

```bash
# 1. Install deps
pnpm install        # or npm ci / yarn

# 2. Dev server
pnpm dev            # http://localhost:5173

# 3. Storybook
pnpm storybook      # http://localhost:6006

# 4. Tests
pnpm test           # unit
pnpm test:ui        # storybook + playwright

# 5. Lint & types
pnpm lint
pnpm typecheck

# 6. Production build
pnpm build          # outputs to dist/
```

> **Node ≥ 18** required (`"type": "module"` package).

---

## 🧪 Testing

* **Unit tests** live next to code (`*.test.tsx`) and use React Testing Library.
* **Story tests** convert each Storybook story into a Playwright interaction spec.
* Run specific projects:

```bash
pnpm vitest run --project unit
pnpm vitest run --project storybook
```

Coverage reports land in `coverage/`.

---

## 🏗️ Scripts

| Command            | Purpose                                    |
|--------------------|--------------------------------------------|
| `dev`              | Vite dev server                            |
| `build`            | Production build                           |
| `preview`          | Preview prod build                         |
| `storybook`        | Storybook dev                              |
| `build:sb`         | Static Storybook build                     |
| `test`             | Vitest unit tests                          |
| `test:ui`          | Vitest browser tests                       |
| `lint`             | ESLint + Prettier                          |
| `typecheck`        | `tsc --noEmit`                             |
| `format`           | Prettier write                             |
| `clean`            | Remove `dist/`, `coverage/`, caches        |

---

## 🗂️ FSD Layer Rules

```
app       – app shell & providers
pages     – one file per route
widgets   – large page sections
features  – user‑focused functionality
entities  – business entities
shared    – atomic UI & helpers
```

Cross‑layer imports are safeguarded by the `fsd-projects` ESLint plugin.
