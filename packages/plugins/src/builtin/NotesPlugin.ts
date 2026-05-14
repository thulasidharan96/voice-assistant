import type { AssistantPlugin } from '../types';

export const NotesPlugin: AssistantPlugin = {
  id: 'notes',
  name: 'Notes',
  description: 'Create and search local notes',
  version: '0.1.0',
  permissions: ['storage:notes:read', 'storage:notes:write'],
  commands: [
    {
      name: 'save-note',
      description: 'Save a note',
      examples: ['save note buy milk', 'create note call mom'],
      match: (input) => /^(save note|create note)/i.test(input),
      execute: async ({ input, noteRepository }) => {
        const content = input.replace(/^(save note|create note)\s*/i, '').trim();
        const now = new Date().toISOString();
        await noteRepository.create({
          id: crypto.randomUUID(),
          title: content.slice(0, 24) || 'Untitled note',
          content,
          tags: [],
          createdAt: now,
          updatedAt: now
        });
        return `Saved note: ${content}`;
      }
    },
    {
      name: 'show-notes',
      description: 'Show all notes',
      examples: ['show my notes', 'show notes'],
      match: (input) => /show( my)? notes/i.test(input),
      execute: async ({ noteRepository }) => {
        const notes = await noteRepository.list();
        return notes.length ? notes.map((note) => `• ${note.content}`).join('\n') : 'No notes saved yet.';
      }
    },
    {
      name: 'search-notes',
      description: 'Search notes',
      examples: ['search notes milk'],
      match: (input) => /^search notes/i.test(input),
      execute: async ({ input, noteRepository }) => {
        const query = input.replace(/^search notes\s*/i, '').trim();
        const notes = await noteRepository.search(query);
        return notes.length ? notes.map((note) => `• ${note.content}`).join('\n') : `No notes found for "${query}".`;
      }
    }
  ]
};
