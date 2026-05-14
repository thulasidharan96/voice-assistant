import { InMemorySecureKeyStore } from '@libreassistant/security';

const store = new InMemorySecureKeyStore();

export const secureKeyService = {
  saveProviderKey: (providerId: string, key: string) => store.save(`provider:${providerId}`, key),
  getProviderKey: (providerId: string) => store.read(`provider:${providerId}`),
  removeProviderKey: (providerId: string) => store.remove(`provider:${providerId}`)
};
