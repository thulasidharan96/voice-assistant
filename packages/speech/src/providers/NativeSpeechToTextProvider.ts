import type { SpeechToTextProvider } from '../types';

export class NativeSpeechToTextProvider implements SpeechToTextProvider {
  async startListening(): Promise<void> {}
  async stopListening(): Promise<void> {}
  onPartialResult(_callback: (text: string) => void): void {}
  onFinalResult(_callback: (text: string) => void): void {}
  onError(_callback: (error: Error) => void): void {}
}
