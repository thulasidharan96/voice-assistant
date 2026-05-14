import type { AssistantPlugin } from '../types';

export const BrowserPlugin: AssistantPlugin = {
  id: 'browser',
  name: 'Browser',
  description: 'Network access placeholder only',
  version: '0.1.0',
  permissions: ['network:access'],
  commands: [
    {
      name: 'search-web',
      description: 'Placeholder web search command',
      examples: ['search web libreassistant'],
      match: (input) => /^(search web|open website)/i.test(input),
      execute: async () => 'Browser automation is intentionally restricted in v0.1.'
    }
  ]
};
