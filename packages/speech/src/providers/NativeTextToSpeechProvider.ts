import type { TextToSpeechProvider } from '../types';

export class NativeTextToSpeechProvider implements TextToSpeechProvider {
  async speak(_text: string): Promise<void> {}
  async stop(): Promise<void> {}
  async setVoice(_voiceId: string): Promise<void> {}
  async setRate(_rate: number): Promise<void> {}
  async setPitch(_pitch: number): Promise<void> {}
}
