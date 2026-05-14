import type { SpeechToTextProvider, TextToSpeechProvider } from '../types';

export class MockSpeechToTextProvider implements SpeechToTextProvider {
  private partial = (_text: string): void => {};
  private final = (_text: string): void => {};
  private error = (_error: Error): void => {};

  async startListening(): Promise<void> {
    this.partial('listening...');
  }

  async stopListening(): Promise<void> {
    this.final('stopped');
  }

  onPartialResult(callback: (text: string) => void): void {
    this.partial = callback;
  }

  onFinalResult(callback: (text: string) => void): void {
    this.final = callback;
  }

  onError(callback: (error: Error) => void): void {
    this.error = callback;
    void this.error;
  }
}

export class MockTextToSpeechProvider implements TextToSpeechProvider {
  async speak(_text: string): Promise<void> {}
  async stop(): Promise<void> {}
  async setVoice(_voiceId: string): Promise<void> {}
  async setRate(_rate: number): Promise<void> {}
  async setPitch(_pitch: number): Promise<void> {}
}
