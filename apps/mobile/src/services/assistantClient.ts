import { MockAIProvider } from '@libreassistant/ai';
import { DefaultAssistantEngine } from '@libreassistant/core';
import { CalculatorPlugin, NotesPlugin, PluginManager, RemindersPlugin, SystemHelpPlugin } from '@libreassistant/plugins';
import { InMemoryAuditLogRepository, InMemoryNoteRepository, InMemoryReminderRepository } from '@libreassistant/storage';

const pluginManager = new PluginManager();
pluginManager.setGrantedPermissions([
  'storage:notes:read',
  'storage:notes:write',
  'storage:reminders:read',
  'storage:reminders:write',
  'device:notifications'
]);
pluginManager.registerPlugin(NotesPlugin);
pluginManager.registerPlugin(RemindersPlugin);
pluginManager.registerPlugin(CalculatorPlugin);
pluginManager.registerPlugin(SystemHelpPlugin);

const engine = new DefaultAssistantEngine({
  aiProvider: new MockAIProvider(),
  pluginManager,
  noteRepository: new InMemoryNoteRepository(),
  reminderRepository: new InMemoryReminderRepository(),
  auditLogRepository: new InMemoryAuditLogRepository()
});

export async function sendAssistantText(input: string): Promise<string> {
  const response = await engine.process({
    id: crypto.randomUUID(),
    input,
    mode: 'text',
    locale: 'en-US',
    timestamp: new Date().toISOString()
  });
  return response.text;
}
