import type { AuditLog, Conversation, Message, Note, Reminder } from '../models';

export interface ConversationRepository {
  list(): Promise<Conversation[]>;
  create(data: Conversation): Promise<void>;
}

export interface MessageRepository {
  listByConversation(conversationId: string): Promise<Message[]>;
  create(data: Message): Promise<void>;
}

export interface NoteRepository {
  list(): Promise<Note[]>;
  create(data: Note): Promise<void>;
  search(query: string): Promise<Note[]>;
}

export interface ReminderRepository {
  list(): Promise<Reminder[]>;
  create(data: Reminder): Promise<void>;
}

export interface SettingsRepository {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T): Promise<void>;
}

export interface AuditLogRepository {
  create(data: AuditLog): Promise<void>;
  list(): Promise<AuditLog[]>;
}
