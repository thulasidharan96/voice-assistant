import type { AIChatRequest, AIChatResponse, AIProvider, AIProviderConfig } from '../types';

export class GeminiProvider implements AIProvider {
  id = 'gemini';
  name = 'Gemini Provider';
  capabilities = { streaming: true, tools: true };

  validateConfig(config: AIProviderConfig): boolean {
    return Boolean(config.apiKey || config.baseUrl);
  }

  async chat(_request: AIChatRequest): Promise<AIChatResponse> {
    return { text: 'Gemini provider placeholder response.' };
  }
}
