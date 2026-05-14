import type { LocalCommand } from './commandTypes';

export const localCommands: LocalCommand[] = [
  {
    id: 'hello',
    match: (input) => input.trim().toLowerCase() === 'hello',
    execute: () => 'Hello! I am LibreAssistant, your privacy-first open-source assistant.'
  }
];
