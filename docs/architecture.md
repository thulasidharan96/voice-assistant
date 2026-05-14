# Architecture

This document describes the architecture guidance for LibreAssistant Mobile.

## Summary
- Monorepo structure separates apps, shared packages, native placeholders, and docs
- Assistant pipeline routes input through local commands, plugins, permissions, and AI fallback
- AI, storage, speech, security, and plugin capabilities are abstracted behind typed interfaces
- Mobile UI and backend are decoupled from core assistant logic for long-term maintainability
