import { describe, expect, it } from 'vitest';
import { createPermissionDecision, redactSecrets, requiresConfirmation, validateProviderConfig } from '../src';

describe('security helpers', () => {
  it('redacts secret-looking values', () => {
    const value = redactSecrets('Authorization: Bearer abc.123 and sk-testsecret0000');
    expect(value).not.toContain('Bearer abc.123');
    expect(value).not.toContain('sk-testsecret0000');
  });

  it('evaluates provider config', () => {
    expect(validateProviderConfig({ providerId: 'openai' }).valid).toBe(false);
    expect(validateProviderConfig({ providerId: 'mock' }).valid).toBe(true);
  });

  it('requires confirmation for sensitive actions', () => {
    expect(requiresConfirmation('open_app')).toBe(true);
    expect(requiresConfirmation('safe')).toBe(false);
  });

  it('denies when permission missing', () => {
    const decision = createPermissionDecision('open_app', false);
    expect(decision.granted).toBe(false);
  });
});
