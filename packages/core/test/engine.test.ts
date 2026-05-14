import { MockAIProvider } from '@libreassistant/ai';
import { PluginManager, NotesPlugin, RemindersPlugin, CalculatorPlugin, SystemHelpPlugin } from '@libreassistant/plugins';
import { InMemoryAuditLogRepository, InMemoryNoteRepository, InMemoryReminderRepository } from '@libreassistant/storage';
import { describe, expect, it } from 'vitest';
import { DefaultAssistantEngine } from '../src';

function createEngine() {
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

  return new DefaultAssistantEngine({
    aiProvider: new MockAIProvider(),
    pluginManager,
    noteRepository: new InMemoryNoteRepository(),
    reminderRepository: new InMemoryReminderRepository(),
    auditLogRepository: new InMemoryAuditLogRepository()
  });
}

async function processInput(input: string) {
  const engine = createEngine();
  return engine.process({
    id: 'req-1',
    input,
    mode: 'text',
    locale: 'en-US',
    timestamp: new Date().toISOString()
  });
}

describe('assistant engine pipeline', () => {
  it('handles hello command', async () => {
    const response = await processInput('hello');
    expect(response.text.toLowerCase()).toContain('hello');
  });

  it('creates note via plugin command', async () => {
    const response = await processInput('save note buy milk');
    expect(response.text).toContain('Saved note');
  });

  it('creates reminder via plugin command', async () => {
    const response = await processInput('remind me to call mom');
    expect(response.text).toContain('Reminder created');
  });

  it('calculates math', async () => {
    const response = await processInput('calculate 2+2');
    expect(response.text).toContain('4');
  });

  it('falls back to AI provider for unknown input', async () => {
    const response = await processInput('some unknown prompt');
    expect(response.source).toBe('ai-provider');
  });
});
