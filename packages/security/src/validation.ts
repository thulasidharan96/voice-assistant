export interface ProviderConfig {
  providerId: string;
  apiKey?: string;
  baseUrl?: string;
}

export function validateProviderConfig(config: ProviderConfig): { valid: boolean; reason?: string } {
  if (!config.providerId) return { valid: false, reason: 'Provider ID is required.' };
  if (config.providerId !== 'mock' && !config.apiKey && !config.baseUrl) {
    return { valid: false, reason: 'Provide either API key or base URL for non-mock providers.' };
  }
  return { valid: true };
}
