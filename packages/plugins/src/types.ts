import type { NoteRepository, ReminderRepository } from '@libreassistant/storage';

export type AssistantPermission =
  | 'storage:notes:read'
  | 'storage:notes:write'
  | 'storage:reminders:read'
  | 'storage:reminders:write'
  | 'network:access'
  | 'device:notifications'
  | 'device:open_app'
  | 'assistant:speak';

export interface PluginContext {
  input: string;
  noteRepository: NoteRepository;
  reminderRepository: ReminderRepository;
}

export interface PluginCommand {
  name: string;
  description: string;
  examples: string[];
  match(input: string): boolean;
  execute(context: PluginContext): Promise<string>;
}

export interface AssistantPlugin {
  id: string;
  name: string;
  description: string;
  version: string;
  permissions: AssistantPermission[];
  commands: PluginCommand[];
  settingsSchema?: Record<string, string>;
  initialize?(): Promise<void>;
  dispose?(): Promise<void>;
}
