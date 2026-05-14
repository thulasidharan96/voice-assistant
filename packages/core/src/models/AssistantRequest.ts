export interface AssistantRequest {
  id: string;
  input: string;
  mode: 'text' | 'voice';
  locale: string;
  timestamp: string;
  userId?: string;
  metadata?: Record<string, string>;
}
