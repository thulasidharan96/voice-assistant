import type { AIChatRequest, AIChatResponse, AIProvider, AIProviderConfig } from '../types';

export class SelfHostedProvider implements AIProvider {
  id = 'selfhosted';
  name = 'SelfHosted Provider';
  capabilities = { streaming: true, tools: true };

  validateConfig(config: AIProviderConfig): boolean {
    return Boolean(config.apiKey || config.baseUrl);
  }

  async chat(_request: AIChatRequest): Promise<AIChatResponse> {
    return { text: 'SelfHosted provider placeholder response.' };
  }
}
