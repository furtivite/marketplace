# 🛒 Marketplace

A frontend platform built with **Vite + React + TypeScript**, following the **Feature-Sliced Design (FSD)** architecture. Styled using **Tailwind CSS v3** with a custom color palette and documented via **Storybook** with `autodocs`.

---

## 🚀 Tech Stack

- **Vite** — blazing fast build tool and dev server
- **React** + **TypeScript**
- **Tailwind CSS v3** — utility-first styling with custom theming
- **Feature-Sliced Design (FSD)** — scalable architecture pattern
- **Storybook** with `autodocs` — interactive component documentation
- **ESLint + Prettier** — consistent code formatting and linting
- **Path Aliases** — clean and convenient module imports

---

## 📦 Installation

```bash
pnpm install
# or
npm install
```

## 🧪 Start the Dev Server

```bash
pnpm dev
# or
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

## 📘 Launch Storybook

```bash
pnpm storybook
# or
npm run storybook
```

Runs at: [http://localhost:6006](http://localhost:6006)

---

## 🧱 Project Structure

```
marketplace/
├── app/            # Entry point, providers, routing
├── shared/         # Reusable utils, components, types
├── public/         # Static assets
├── index.html      # HTML template
└── vite.config.ts  # Vite + Tailwind configuration
```

---

## 🖌 Tailwind Configuration

Custom theme setup:

- Colors are defined in `colors.cjs` (shades 100–900)
- Extended typography styles
- Tailwind setup in `vite.config.ts`:

```ts
css: {
  postcss: {
    plugins: [tailwindcss()],
  },
}
```

---

## 🎯 Code Style Notes

- Use `React.useX` syntax (`useState`, `useEffect`, etc.)
- Use `clsx` for className merging
- `Typography` defaults to `<div />`
- MUI `Grid` v2 syntax: `size={{ xs: 12, sm: 6 }}`

---

## 📄 License

Distributed under the **MIT** License. Feel free to use, modify, and distribute.

---

> _Crafted with 💙 for a modern, maintainable UI project._
