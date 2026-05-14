import type { AssistantPlugin } from '../types';

export const SystemHelpPlugin: AssistantPlugin = {
  id: 'system-help',
  name: 'System Help',
  description: 'Assistant help and privacy status',
  version: '0.1.0',
  permissions: [],
  commands: [
    {
      name: 'help',
      description: 'List capabilities',
      examples: ['help', 'what can you do', 'privacy status'],
      match: (input) => /^(help|what can you do|privacy status)$/i.test(input.trim()),
      execute: async ({ input }) => {
        if (/privacy status/i.test(input)) return 'Privacy mode is enabled. Telemetry is off by default.';
        return 'I can help with notes, reminders, calculations, and AI chat fallback.';
      }
    }
  ]
};
