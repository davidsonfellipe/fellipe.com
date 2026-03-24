# Development Guide – fellipe.com

> **Note:** This file provides context for AI agents (Claude, Cursor, etc.) working on this project.

## Project structure

```
fellipe.com/
├── components/       # Reusable React components
├── content/          # Blog posts in Markdown
├── data/             # Static data (talks, projects, etc.)
├── lib/              # Utility functions
├── pages/            # Next.js routes (Pages Router)
│   ├── api/          # API routes
│   ├── blog/         # Blog pages
│   └── projects/     # Project pages
├── public/           # Static assets
│   ├── images/       # Images
│   └── files/        # Downloadable files
├── scripts/          # Maintenance scripts
├── styles/           # Global styles (styled-components)
└── cypress/          # E2E tests
```

### Key directories

- **`pages/`** – Next.js Pages Router. Each file is a route.
- **`components/`** – Shared components (header, layout, post content, etc.).
- **`content/`** – Blog post Markdown (using `gray-matter` and `next-mdx-remote`).
- **`data/`** – JSON/JS data for talks, projects, and other listings.
- **`lib/`** – Helpers (formatting, etc.).

## Stack

- **Next.js 16** – Pages Router
- **React 19**
- **styled-components** – CSS-in-JS (enabled in `next.config.js`)
- **next-mdx-remote** – MDX rendering
- **Cypress** – E2E testing
- **ESLint + Prettier** – Linting and formatting

## Commands

```bash
# Development
pnpm dev

# Build and production
pnpm build
pnpm start

# Code quality
pnpm lint            # ESLint
pnpm format          # Prettier

# Documentation (content/)
pnpm textlint
pnpm textlint:fix
```

## Lint and formatting

- **ESLint** – `eslint-config-next` plus custom configuration.
- **Prettier** – Formats `components`, `pages`, `styles`, `lib`, `templates`, `data`, `e2e`.
- **Textlint** – Rules for Markdown in `content/` (dead links, terminology).

## Commits – Conventional Commits

Always use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
<type>[optional scope]: <description>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

**Examples:**
```
feat: add dark mode toggle
fix(blog): resolve slug encoding
docs: update README setup
```

The project uses Commitizen (`cz-conventional-changelog`). For interactive commits:
```bash
pnpm exec cz
```

## Pull requests

When creating or describing pull requests, use the `.github/PULL_REQUEST_TEMPLATE` format. Fill in:
- **Types of changes** – e.g. feat, fix, docs, refactor
- **Description of changes** – what changed and why

## Code conventions

- **Components** – Functional, prefer composition.
- **Styles** – styled-components colocated with components.
- **Content** – Markdown in `content/` with frontmatter (`gray-matter`).
- **Images** – In `public/images/` or `images/` at project root.

## Relevant configuration

- **`next.config.js`** – `trailingSlash: true`, `reactStrictMode: true`, styled-components in compiler.
- **`package.json`** – Commitizen configured at `config.commitizen.path`.
