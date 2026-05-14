export type EventPayload = Record<string, unknown>;

export class EventBus {
  private listeners = new Map<string, Array<(payload: EventPayload) => void>>();

  on(eventName: string, listener: (payload: EventPayload) => void): void {
    const listeners = this.listeners.get(eventName) ?? [];
    listeners.push(listener);
    this.listeners.set(eventName, listeners);
  }

  emit(eventName: string, payload: EventPayload): void {
    (this.listeners.get(eventName) ?? []).forEach((listener) => listener(payload));
  }
}
