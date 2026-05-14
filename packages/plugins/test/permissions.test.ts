import { describe, expect, it } from 'vitest';
import { PluginManager, NotesPlugin } from '../src';
import { InMemoryNoteRepository, InMemoryReminderRepository } from '@libreassistant/storage';

describe('plugin manager permissions', () => {
  it('denies execution when required plugin permissions are not granted', async () => {
    const manager = new PluginManager();
    manager.setGrantedPermissions([]);
    manager.registerPlugin(NotesPlugin);

    const result = await manager.executeCommand('save note secret', {
      input: 'save note secret',
      noteRepository: new InMemoryNoteRepository(),
      reminderRepository: new InMemoryReminderRepository()
    });

    expect(result).toBeUndefined();
  });
});
