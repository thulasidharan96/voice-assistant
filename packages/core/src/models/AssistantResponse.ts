import type { AssistantAction } from './AssistantAction';

export interface AssistantResponse {
  id: string;
  text: string;
  actions: AssistantAction[];
  shouldSpeak: boolean;
  source: 'local-command' | 'plugin' | 'ai-provider' | 'system';
  metadata?: Record<string, string>;
  error?: string;
}
