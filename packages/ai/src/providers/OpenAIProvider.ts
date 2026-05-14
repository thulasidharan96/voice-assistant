import type { AIChatRequest, AIChatResponse, AIProvider, AIProviderConfig } from '../types';

export class OpenAIProvider implements AIProvider {
  id = 'openai';
  name = 'OpenAI Provider';
  capabilities = { streaming: true, tools: true };

  validateConfig(config: AIProviderConfig): boolean {
    return Boolean(config.apiKey || config.baseUrl);
  }

  async chat(_request: AIChatRequest): Promise<AIChatResponse> {
    return { text: 'OpenAI provider placeholder response.' };
  }
}
