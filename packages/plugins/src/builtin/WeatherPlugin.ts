import type { AssistantPlugin } from '../types';

export const WeatherPlugin: AssistantPlugin = {
  id: 'weather',
  name: 'Weather',
  description: 'Weather placeholder',
  version: '0.1.0',
  permissions: ['network:access'],
  commands: [
    {
      name: 'weather',
      description: 'Placeholder weather command',
      examples: ['weather', 'today weather'],
      match: (input) => /(today )?weather/i.test(input),
      execute: async () => 'Weather provider is a placeholder. Configure a weather plugin implementation.'
    }
  ]
};
