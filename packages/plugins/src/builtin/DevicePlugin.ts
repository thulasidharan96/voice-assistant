import type { AssistantPlugin } from '../types';

export const DevicePlugin: AssistantPlugin = {
  id: 'device',
  name: 'Device',
  description: 'Device action placeholder with confirmation architecture',
  version: '0.1.0',
  permissions: ['device:open_app'],
  commands: [
    {
      name: 'open-app',
      description: 'Open app placeholder',
      examples: ['open app settings'],
      match: (input) => /^open (app|settings)/i.test(input),
      execute: async () => 'Device actions require explicit confirmation and native module integration.'
    }
  ]
};
