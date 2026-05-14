import { AIProviderRegistry, MockAIProvider, OpenAIProvider, GeminiProvider, OllamaProvider, SelfHostedProvider } from '@libreassistant/ai';

export function createProviderRegistry(): AIProviderRegistry {
  const registry = new AIProviderRegistry();
  registry.register(new MockAIProvider());
  registry.register(new OpenAIProvider());
  registry.register(new GeminiProvider());
  registry.register(new OllamaProvider());
  registry.register(new SelfHostedProvider());
  return registry;
}
