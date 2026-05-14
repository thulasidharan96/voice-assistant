import type { AIProvider } from '@libreassistant/ai';
import type { PluginManager } from '@libreassistant/plugins';
import type { InMemoryAuditLogRepository, InMemoryNoteRepository, InMemoryReminderRepository } from '@libreassistant/storage';

export interface AssistantRuntimeContext {
  aiProvider: AIProvider;
  pluginManager: PluginManager;
  noteRepository: InMemoryNoteRepository;
  reminderRepository: InMemoryReminderRepository;
  auditLogRepository: InMemoryAuditLogRepository;
}
