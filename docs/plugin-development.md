# Plugin Development

This document describes the plugin development guidance for LibreAssistant Mobile.

## Summary
- Implement `AssistantPlugin` with typed metadata, commands, and permission declarations
- Keep plugin command logic pure and route sensitive actions through permission checks
- Register plugins through `PluginManager` and test command matching/execution paths
- Use schema-driven plugin settings placeholders for future configurable plugins
