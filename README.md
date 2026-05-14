# LibreAssistant Mobile

**Your assistant. Your data. Your plugins.**

LibreAssistant Mobile is a privacy-first, modular, open-source cross-platform assistant architecture built with React Native + TypeScript in a pnpm + Turborepo monorepo.

## Highlights
- React Native mobile app foundation (Android-first)
- AI provider abstraction with offline mock provider
- Plugin system with built-in notes/reminders/help/calculator plugins
- Local-first storage interfaces + in-memory implementations
- Security package for redaction, permission decisions, and provider config validation
- Optional Fastify backend server
- Privacy, threat model, governance, roadmap, and release policy docs
- CI/CD workflows (CI, Android build, CodeQL, release placeholder)

## Monorepo Layout
- `apps/mobile` React Native CLI app (Android runnable)
- `apps/server` Optional backend
- `apps/docs` Docs app placeholder
- `packages/*` Shared assistant packages
- `native/android`, `native/ios` Native architecture placeholders
- `docs/` Architecture and policy docs

## Quick Start
```bash
corepack enable
pnpm install
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

## Mobile
```bash
pnpm --filter mobile start
pnpm --filter mobile android
pnpm --filter mobile ios
```

## Server
```bash
pnpm --filter server dev
pnpm --filter server build
pnpm --filter server start
```

## Privacy model
- Telemetry disabled by default
- No hardcoded API keys
- API keys must be stored via secure storage abstraction
- No always-listening background microphone enabled by default

## Roadmap
See `ROADMAP.md` and `docs/roadmap.md`.

## Contributing
See `CONTRIBUTING.md`.

## License
Apache-2.0
