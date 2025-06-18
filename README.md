# Marketplace Frontend

> **Modern e‑commerce UI built with React 19, TypeScript 5 and Tailwind CSS — structured with the **[**Feature‑Sliced Design**](https://feature-sliced.design/)** methodology.**

The repository ships with:

- Vite + ESBuild lightning‑fast dev/build pipeline
- Bespoke component library documented in Storybook
- Strict ESLint / Prettier / Stylelint automation
- Unit/Integration tests with Vitest + Testing‑Library
- Headless UI tests with Playwright (& Storybook addon‑test)
- GitHub Actions CI (install ➜ lint ➜ type‑check ➜ tests ➜ build)

---

## ✨ Key Features

| Area          | Stack / Tooling                                                               |
| ------------- | ----------------------------------------------------------------------------- |
| Build         | **Vite** + ESBuild (TS 5 target)                                              |
| Styling       | **Tailwind CSS v3** & custom palette (`src/shared/config/tailwind/colors.js`) |
| UI‑kit        | Atomic primitives in `shared/ui` + **Storybook 7**                            |
| Routing       | **React Router 6**                                                            |
| Data / State  | **React‑Query** & **Zustand** (swap‑in your flavour)                          |
| Forms & Utils | **React‑Hook‑Form**, **clsx** helper, shadcn/ui components                    |
| Tests         | Unit & integration via **Vitest** + **Testing‑Library**                       |
| Browser tests | **Playwright** through `@storybook/experimental-addon-test`                   |
| Quality       | **ESLint** (Airbnb + TS) • Prettier • Husky/Lint‑staged gatekeeper            |
| CI ⬢          | GitHub Actions (Node 20)                                                      |

---

## 📂 Project Layout (FSD)

```text
.
├── public/
├── src/
│   ├── app/                  # Application shell & global providers
│   ├── pages/                # Route‑level pages
│   ├── widgets/              # Large page sections (Header, CartSidebar…)
│   ├── features/             # User‑centric features (Auth, Cart, Search…)
│   ├── entities/             # Business entities (Product, Order, User…)
│   └── shared/               # Atomic UI, helpers, constants, lib
└── ...
```

> **Import rules** between layers are enforced by `eslint-plugin-fsd-projects`.

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node ≥ 20**
- **pnpm** ≥ 9 (or npm / yarn)

```bash
corepack enable      # enables pnpm shipped with Node 20
pnpm --version
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run in development

```bash
pnpm dev          # http://localhost:5173
```

Hot reloading is baked‑in via React Fast Refresh.

### 4. Production build

```bash
pnpm build
pnpm preview      # serves dist/ at http://localhost:4173
```

### 5. Storybook

```bash
pnpm storybook    # :6006
pnpm build-storybook
```

### 6. Tests

```bash
# all vitest projects
pnpm test

# watch mode
pnpm test:watch

# coverage (v8)
pnpm test:coverage
```

Playwright specs are generated from your stories — simply run **Chromatic** or CI to execute them headlessly.

---

## 🛠️ Scripts Reference

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `dev`             | Launch Vite dev server              |
| `build`           | Compile & bundle production assets  |
| `preview`         | Serve the production build locally  |
| `storybook`       | Launch Storybook in dev mode        |
| `build-storybook` | Create a static Storybook build     |
| `test`            | Run all Vitest projects once        |
| `test:watch`      | Watch mode for Vitest               |
| `test:coverage`   | Generate V8 coverage report         |
| `lint`            | ESLint & Prettier check             |
| `lint:fix`        | ESLint auto‑fix                     |
| `tsc`             | Type‑checking only (`tsc --noEmit`) |

---

## 🎨 Design System & Tailwind

- All brand colours live in [`src/shared/config/tailwind/colors.js`](src/shared/config/tailwind/colors.js) and are re‑exported into **tailwind.config.ts** with:

```ts
import { tailwindColors } from './src/shared/config/tailwind/colors';

colors: {
  ...tailwindColors
}
```

- No extra CSS frameworks are used — **only Tailwind utilities**.
- Fonts are provided via `@fontsource/inter` & `@fontsource/manrope`.

---

## 🗂️ FSD Layer Rules

```
app       – app providers & entry
pages     – single route per file
widgets   – cohesive page sections
features  – user‑visible features
entities  – business‑logic models
shared    – UI atoms & utilities
```

---

## 🧑‍💻 Contributing

- **Branch naming**: `feature/short‑desc`, `fix/...`, `chore/...`
- **Commits** follow **Conventional Commits** (enforced by Husky & Commitlint).
- **Pull‑Requests** must include:
  - a succinct description of **why** + **what**
  - check‑list: lint ✅ test ✅ type‑check ✅ build ✅
- Run `pnpm lint:fix && pnpm test && pnpm build` locally before pushing.

---

## 📦 CI / CD

The GitHub Action in `.github/workflows/ci.yml` installs deps, lints, type‑checks, runs tests and publishes build artefacts.\
Badges at the top of this README reflect the latest run on **main**.

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

