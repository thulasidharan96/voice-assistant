# Mobile Setup

This document describes the mobile setup guidance for LibreAssistant Mobile.

## Summary
- Install Node LTS, enable Corepack, and install dependencies with `pnpm install`
- Run `pnpm --filter mobile android` or `pnpm --filter mobile ios` for platform builds
- Configure provider credentials through secure storage abstractions (no hardcoded keys)
- Validate local changes with `pnpm typecheck`, `pnpm lint`, and targeted tests
