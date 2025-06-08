# Marketplace

A **modular e-commerce front‑end** built with React + TypeScript and the Feature‑Sliced Design (FSD) methodology.
The repository is meant as a playground for clean architecture, automated quality gates and accessible UI.

---

## ✨ Highlights

| Area | What you get |
|------|--------------|
| **Modern stack** | Vite • React 18 • TypeScript • TailwindCSS |
| **Architecture** | Feature‑Sliced Design (layers: *app / pages / widgets / features / entities / shared*) with absolute imports `@/*` |
| **Code quality** | ESLint (AirBnB, `plugin:jsx-a11y/recommended`, `eslint-plugin-fsd-projects`) • Prettier • Husky + lint‑staged |
| **Tests & coverage** | Vitest (unit & component) with **V8** coverage thresholds (`≥ 80 %`) • Playwright ready for E2E |
| **Docs & DX** | Storybook with A11y addon • typed commit hooks • CI via GitHub Actions |

---

## Folder Structure (FSD)

```
src/
├─ app/          # App bootstrap, routing, providers
│  └─ index.tsx
├─ pages/        # Route‑level screens (lazy‑loaded)
├─ widgets/      # Reusable UI compositions (search bar, cart preview…)
├─ features/     # User‑facing actions (add‑to‑cart, auth, filters…)
├─ entities/     # Business entities (product, user, order…)
├─ shared/
│  ├─ ui/        # Design‑system atoms/molecules
│  ├─ lib/       # Helpers, API clients
│  └─ model/     # Global types, constants
└─ index.html
```

> Import rules are enforced by `eslint-plugin-fsd-projects`: lower layers may **not** import from higher ones.

---

## Getting Started

```bash
# 1. Install dependencies
npm ci

# 2. Start development server
npm run dev

# 3. Storybook (playground & a11y checks)
npm run storybook
```

### Environment variables

| Key | Purpose | Default |
|-----|---------|---------|
| `VITE_API_URL` | REST/GraphQL endpoint | `https://api.example.com` |

Create a local `.env` (see `.env.example`).

---

## Quality Gates

| Command | Purpose |
|---------|---------|
| `npm run lint` | ESLint + Prettier |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Vitest in watch mode |
| `npm run test:coverage` | Vitest in CI mode with V8 coverage; **fails if lines / branches / functions < 80 %** |
| `npm run e2e` | Placeholder for Playwright suite |

### Continuous Integration

`.github/workflows/ci.yml`:

1. Checkout → `npm ci`
2. `npm run lint && npm run typecheck && npm run test:coverage`
3. Upload HTML coverage report as an artifact
4. (Optional) Publish to Codecov

Pull‑requests fail automatically when linting errors or insufficient coverage are detected.

---

## Accessibility

* `eslint-plugin-jsx-a11y` with all recommended rules in **error** mode
* Storybook A11y addon for interactive audits
* Unit tests can assert `expect(await axe(container)).toHaveNoViolations()` (Jest‑Axe)

---

## Contributing

1. Fork & clone
2. Create a branch `feat/my-feature`
3. **Commits follow [Conventional Commits](https://www.conventionalcommits.org/)** (enforced by Husky)
4. Open a pull‑request – GitHub Actions will run the full quality pipeline.

---

## Roadmap

- [ ] Real product API integration
- [ ] Complete E2E coverage with Playwright
- [ ] PWA install & offline catalogue
- [ ] Internationalisation (i18n)

---

## License

**TBD – no license chosen yet.**
