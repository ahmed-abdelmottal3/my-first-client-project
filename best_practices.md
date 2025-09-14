# 📘 Project Best Practices

## 1. Project Purpose
This repository hosts a personal portfolio website built with React and Vite. It showcases sections such as Hero, About, Tech, Projects (with details), and Contact, and serves static media assets. The focus is on fast client-side rendering, responsive UI, and maintainable component-driven code.

## 2. Project Structure
- Root
  - `index.html`: Single-page app HTML entry with the Vite mount point.
  - `vite.config.js`: Build and dev server configuration (Vite).
  - `eslint.config.js`: Lint configuration for consistent code style.
  - `package.json`: Scripts and dependencies.
  - `README.md`: Project overview or usage notes.
  - `public/`: Static, unprocessed assets (served at root path). Avoid placing large images here unless necessary.
- `src/`
  - `main.jsx`: Application bootstrap; mounts React into `index.html`.
  - `App.jsx`: Top-level composition of the UI; route/section orchestrator.
  - `index.css`: Global styles. Prefer component-scoped styles where possible to avoid leakage.
  - `assets/`: Versioned, imported static assets (images, logos). Imported assets benefit from hashing and optimization by Vite.
  - `components/`: Reusable UI components
    - `Nav.jsx`: Navigation/header.
    - `Hero.jsx`: Landing hero section.
    - `About.jsx`: About section.
    - `Tech.jsx`: Technologies/skills section.
    - `Projects.jsx`: Projects list/overview.
    - `Projects_details.jsx`: Project details cards/section.
    - `Contact.jsx`: Contact section.

Conventions
- Components are one file per component in `src/components/` using PascalCase filenames.
- Assets reside in `src/assets/` and are imported in components via ES modules.
- Keep components small and focused; lift shared state up to the closest common parent (`App.jsx`), or introduce a state management approach if complexity grows.

## 3. Test Strategy
Current repo does not include tests. Recommended approach:
- Frameworks
  - Unit/component tests: Vitest + React Testing Library
  - Optional integration/e2e: Playwright or Cypress
- Structure
  - Co-locate tests with components: `ComponentName.test.jsx` next to the component
  - Or group under `src/__tests__/` mirroring structure
- Naming
  - `*.test.jsx` or `*.spec.jsx` for test files
- Mocking
  - Use React Testing Library best practices: test behavior, not implementation
  - Mock network or external modules with Vitest mocks; use MSW for integration-like tests that simulate HTTP
- Coverage
  - Target: 70–80% to start; prioritize critical user flows and pure logic utilities
- When to write what
  - Unit tests for pure functions and component rendering/interaction
  - Integration tests for cross-component flows (e.g., nav interactions, section anchors)
  - E2E for critical user journeys (first meaningful paint, navigation, contact form submission if present)

## 4. Code Style
- Language and React
  - Use functional components and React hooks
  - Prefer local state in components; lift state up only when required
  - Avoid direct DOM manipulation; use refs and effects when necessary
  - Keep effects minimal and declarative; clean up side effects
- Typing
  - If complexity increases, consider TypeScript for type safety; otherwise, use JSDoc types for props
- Naming
  - Components: PascalCase (`Hero`, `ProjectCard`)
  - Variables/functions: camelCase (`projectList`, `handleSubmit`)
  - Files: match exported component name (PascalCase)
- Styles
  - Use semantic class names; consider BEM or CSS Modules for larger scale
  - Co-locate component-specific styles when practical
- Imports
  - Use relative imports within `src` and group imports: external libs, assets, local components
- Comments and Docs
  - Keep components self-documenting; add JSDoc for complex props or utilities
  - Document non-obvious logic with concise comments
- Error Handling
  - Guard against missing/invalid props; provide reasonable fallbacks
  - Consider error boundaries around larger/fragile subtrees if async data is introduced later
- Accessibility
  - Use semantic HTML, proper aria attributes, focus management
  - Ensure keyboard navigation and color contrast compliance
- Internationalization and RTL
  - Given presence of Arabic assets, ensure RTL-friendly layout where relevant; consider `dir="rtl"` for RTL pages/sections

## 5. Common Patterns
- Presentational vs container components: keep visual components stateless where possible
- Reusable UI primitives (Buttons, Cards, Section wrappers) to reduce duplication
- Asset management via ES module imports: `import logo from "../assets/logo.png";`
- Image optimization: prefer modern formats when possible and correct sizes; let Vite handle hashing
- Section composition in `App.jsx` to organize page flow and anchors
- Prop-driven configuration for cards and lists (e.g., projects array rendered via `.map`)

## 6. Do's and Don'ts
- Do
  - Keep components small, focused, and pure where possible
  - Centralize constants (e.g., project lists) and reuse across components
  - Validate layout on mobile, tablet, desktop; use responsive CSS
  - Keep asset sizes reasonable; compress images before committing
  - Run lints and formatters before committing; fix warnings
  - Prefer accessibility-friendly components and semantics
- Don't
  - Don’t commit placeholder or malformed code blocks into component files
  - Don’t perform heavy computations in render; memoize where needed
  - Don’t deeply nest components without extracting subcomponents
  - Don’t rely on global CSS for component-specific styling; avoid leakage
  - Don’t hardcode text if localization/RTL is needed; prepare for i18n

## 7. Tools & Dependencies
- Core
  - React: UI library
  - Vite: Dev server and build tool
  - ESLint: Linting and code quality
- Suggested Testing (to add)
  - Vitest, @testing-library/react, @testing-library/user-event, MSW
- Scripts (typical Vite project)
  - `npm run dev`: Start dev server
  - `npm run build`: Production build
  - `npm run preview`: Preview production build locally
- Setup
  - `npm install`
  - Use Node LTS
  - For testing: add dev deps and configure Vitest in `vite.config.js`

## 8. Other Notes
- Component authoring
  - Export a default component from each file; ensure it returns valid JSX
  - Keep props explicit and typed (JSDoc or TS)
- Asset usage in Vite
  - Import assets via ES modules: `import img from "../assets/photo.png";`
  - Or reference with new URL: `new URL("../assets/photo.png", import.meta.url).href`
- Navigation & Sections
  - Use semantic landmarks; provide skip links for accessibility on longer pages
- Performance
  - Lazy-load heavy sections/images when beneficial; use `loading="lazy"` for non-critical images
  - Avoid unnecessary re-renders (keys in lists, memoization when needed)
- For LLM-generated code
  - Follow the structure and naming patterns above
  - Keep code self-contained, avoid global state unless introduced deliberately
  - Prefer composition over inheritance; keep side effects inside `useEffect`
