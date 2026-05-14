# AI Providers

This document describes the AI provider guidance for LibreAssistant Mobile.

## Summary
- Providers implement the `AIProvider` interface (`chat`, optional `stream`, config validation)
- Mock provider is the default offline-safe development baseline
- Cloud/self-hosted providers are pluggable through provider registry abstractions
- Provider configuration must be validated and secrets must never be logged
