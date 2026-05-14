export interface AIProviderCapabilities {
  streaming: boolean;
  tools: boolean;
}

export interface AIProviderConfig {
  apiKey?: string;
  baseUrl?: string;
  model?: string;
}

export interface AIChatRequest {
  input: string;
  locale?: string;
  metadata?: Record<string, string>;
}

export interface AIChatResponse {
  text: string;
  shouldSpeak?: boolean;
  metadata?: Record<string, string>;
}

export interface AIProvider {
  id: string;
  name: string;
  capabilities: AIProviderCapabilities;
  chat(request: AIChatRequest): Promise<AIChatResponse>;
  stream?(request: AIChatRequest): AsyncGenerator<string>;
  validateConfig(config: AIProviderConfig): boolean;
  estimateCost?(request: AIChatRequest): number;
}
