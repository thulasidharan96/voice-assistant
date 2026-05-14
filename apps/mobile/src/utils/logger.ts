import { redactSecrets } from '@libreassistant/security';

export function debugLog(message: string): void {
  console.log(redactSecrets(message));
}
