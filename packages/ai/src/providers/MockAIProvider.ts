import type { AIChatRequest, AIChatResponse, AIProvider, AIProviderConfig } from '../types';

export class MockAIProvider implements AIProvider {
  id = 'mock';
  name = 'Mock AI Provider';
  capabilities = { streaming: false, tools: true };

  validateConfig(_config: AIProviderConfig): boolean {
    return true;
  }

  async chat(request: AIChatRequest): Promise<AIChatResponse> {
    const input = request.input.trim().toLowerCase();
    if (input === 'hello') {
      return {
        text: 'Hello! I am LibreAssistant, your privacy-first open-source assistant.',
        shouldSpeak: true
      };
    }
    if (input.includes('what can you do')) {
      return {
        text: 'I can chat, help with notes/reminders via plugins, and route tasks using a privacy-first architecture.'
      };
    }
    if (input.includes('save note')) {
      return { text: 'It sounds like you want to save a note. I can route this to the Notes plugin.' };
    }
    return { text: 'I am running in mock mode. Ask for help, save notes, reminders, or calculations.' };
  }
}
