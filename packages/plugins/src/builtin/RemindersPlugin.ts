import type { AssistantPlugin } from '../types';

export const RemindersPlugin: AssistantPlugin = {
  id: 'reminders',
  name: 'Reminders',
  description: 'Manage local reminders',
  version: '0.1.0',
  permissions: ['storage:reminders:read', 'storage:reminders:write', 'device:notifications'],
  commands: [
    {
      name: 'create-reminder',
      description: 'Create reminder',
      examples: ['remind me to call mom'],
      match: (input) => /^remind me to/i.test(input),
      execute: async ({ input, reminderRepository }) => {
        const title = input.replace(/^remind me to\s*/i, '').trim();
        const now = new Date().toISOString();
        await reminderRepository.create({
          id: crypto.randomUUID(),
          title,
          completed: false,
          createdAt: now,
          updatedAt: now
        });
        return `Reminder created: ${title}`;
      }
    },
    {
      name: 'show-reminders',
      description: 'Show reminders',
      examples: ['show reminders'],
      match: (input) => /^show reminders/i.test(input),
      execute: async ({ reminderRepository }) => {
        const reminders = await reminderRepository.list();
        return reminders.length
          ? reminders.map((reminder) => `• ${reminder.title}`).join('\n')
          : 'No reminders yet.';
      }
    }
  ]
};
