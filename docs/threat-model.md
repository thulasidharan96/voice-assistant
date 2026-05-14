# Threat Model

## Assets
- User prompts
- API keys
- Local notes/reminders

## Threats
- Secret leakage in logs
- Unauthorized plugin actions
- Over-permissioned native capabilities

## Mitigations
- Redaction helper for logs
- Explicit permission decisions + confirmation checks
- Telemetry disabled by default
- No background microphone by default
