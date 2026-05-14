import { create } from 'zustand';

interface SettingsState {
  providerId: string;
  telemetryEnabled: boolean;
  setProviderId: (value: string) => void;
  setTelemetryEnabled: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  providerId: 'mock',
  telemetryEnabled: false,
  setProviderId: (providerId) => set({ providerId }),
  setTelemetryEnabled: (telemetryEnabled) => set({ telemetryEnabled })
}));
