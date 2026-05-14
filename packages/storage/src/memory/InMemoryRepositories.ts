import type { AuditLog, Note, Reminder } from '../models';
import type {
  AuditLogRepository,
  NoteRepository,
  ReminderRepository,
  SettingsRepository
} from '../repositories';

export class InMemoryNoteRepository implements NoteRepository {
  private notes: Note[] = [];

  async list(): Promise<Note[]> {
    return this.notes;
  }

  async create(data: Note): Promise<void> {
    this.notes.unshift(data);
  }

  async search(query: string): Promise<Note[]> {
    const value = query.toLowerCase();
    return this.notes.filter((note) => note.content.toLowerCase().includes(value));
  }
}

export class InMemoryReminderRepository implements ReminderRepository {
  private reminders: Reminder[] = [];

  async list(): Promise<Reminder[]> {
    return this.reminders;
  }

  async create(data: Reminder): Promise<void> {
    this.reminders.unshift(data);
  }
}

export class InMemorySettingsRepository implements SettingsRepository {
  private settings = new Map<string, unknown>();

  async get<T>(key: string): Promise<T | undefined> {
    return this.settings.get(key) as T | undefined;
  }

  async set<T>(key: string, value: T): Promise<void> {
    this.settings.set(key, value);
  }
}

export class InMemoryAuditLogRepository implements AuditLogRepository {
  private logs: AuditLog[] = [];

  async create(data: AuditLog): Promise<void> {
    this.logs.unshift(data);
  }

  async list(): Promise<AuditLog[]> {
    return this.logs;
  }
}
