export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: string;
  metadata?: Record<string, string>;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Reminder {
  id: string;
  title: string;
  dueAt?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  eventType: string;
  source: string;
  payload: Record<string, unknown>;
  createdAt: string;
}
