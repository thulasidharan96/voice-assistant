import { create } from 'zustand';

interface PluginState {
  enabledPluginIds: string[];
  togglePlugin: (id: string) => void;
}

export const usePluginStore = create<PluginState>((set, get) => ({
  enabledPluginIds: ['notes', 'reminders', 'calculator', 'system-help'],
  togglePlugin: (id) => {
    const enabled = get().enabledPluginIds;
    set({ enabledPluginIds: enabled.includes(id) ? enabled.filter((value) => value !== id) : [...enabled, id] });
  }
}));
