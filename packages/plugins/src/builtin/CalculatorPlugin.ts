import type { AssistantPlugin } from '../types';

function compute(expression: string): number | null {
  const safe = expression.replace(/[^0-9+\-*/(). ]/g, '');
  if (!safe.trim()) return null;
  return Number(Function(`"use strict"; return (${safe});`)());
}

export const CalculatorPlugin: AssistantPlugin = {
  id: 'calculator',
  name: 'Calculator',
  description: 'Simple arithmetic calculations',
  version: '0.1.0',
  permissions: [],
  commands: [
    {
      name: 'calculate',
      description: 'Calculate expression',
      examples: ['calculate 2+2'],
      match: (input) => /^calculate\s+/i.test(input),
      execute: async ({ input }) => {
        const expr = input.replace(/^calculate\s+/i, '');
        const result = compute(expr);
        return result === null || Number.isNaN(result) ? 'Invalid expression.' : `Result: ${result}`;
      }
    }
  ]
};
