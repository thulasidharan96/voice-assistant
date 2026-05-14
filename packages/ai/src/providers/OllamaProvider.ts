import type { AIChatRequest, AIChatResponse, AIProvider, AIProviderConfig } from '../types';

export class OllamaProvider implements AIProvider {
  id = 'ollama';
  name = 'Ollama Provider';
  capabilities = { streaming: true, tools: true };

  validateConfig(config: AIProviderConfig): boolean {
    return Boolean(config.apiKey || config.baseUrl);
  }

  async chat(_request: AIChatRequest): Promise<AIChatResponse> {
    return { text: 'Ollama provider placeholder response.' };
  }
}
