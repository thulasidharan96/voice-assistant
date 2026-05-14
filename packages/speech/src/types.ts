export interface SpeechToTextProvider {
  startListening(): Promise<void>;
  stopListening(): Promise<void>;
  onPartialResult(callback: (text: string) => void): void;
  onFinalResult(callback: (text: string) => void): void;
  onError(callback: (error: Error) => void): void;
}

export interface TextToSpeechProvider {
  speak(text: string): Promise<void>;
  stop(): Promise<void>;
  setVoice(voiceId: string): Promise<void>;
  setRate(rate: number): Promise<void>;
  setPitch(pitch: number): Promise<void>;
}
