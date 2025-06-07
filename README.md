# Marketplace Project

This project is a React-based frontend application using TypeScript, Tailwind CSS, and Storybook for UI component development and testing.

## Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn package manager

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd marketplace
npm install
# or
yarn install
```

## Running the Demo

To start the demo application in development mode with hot reloading:

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) (or the port shown in terminal).

## Running Storybook

Storybook is used to browse and test UI components in isolation.

```bash
npm run storybook
# or
yarn storybook
```

Then open [http://localhost:6006](http://localhost:6006).

## Building for Production

To build the production-ready demo app:

```bash
npm run build
# or
yarn build
```

## Running Production Build Locally

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `src/` — source code including React components, hooks, and styles
- `public/` — static assets
- `.storybook/` — Storybook config files

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Storybook
- Vite (build tool and dev server)
