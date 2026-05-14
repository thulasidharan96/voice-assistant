const SECRET_PATTERNS = [
  /sk-[a-zA-Z0-9]{10,}/g,
  /api[_-]?key\s*[:=]\s*['"]?[^'"\s]+['"]?/gi,
  /bearer\s+[a-zA-Z0-9._-]+/gi
];

export function redactSecrets(text: string): string {
  return SECRET_PATTERNS.reduce((value, pattern) => value.replace(pattern, '[REDACTED]'), text);
}
