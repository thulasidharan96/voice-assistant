export interface SecureKeyStore {
  save(key: string, value: string): Promise<void>;
  read(key: string): Promise<string | undefined>;
  remove(key: string): Promise<void>;
}

export class InMemorySecureKeyStore implements SecureKeyStore {
  private store = new Map<string, string>();

  async save(key: string, value: string): Promise<void> {
    this.store.set(key, value);
  }

  async read(key: string): Promise<string | undefined> {
    return this.store.get(key);
  }

  async remove(key: string): Promise<void> {
    this.store.delete(key);
  }
}
