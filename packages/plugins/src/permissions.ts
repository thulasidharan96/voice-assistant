import type { AssistantPermission } from './types';

export function canUsePermissions(required: AssistantPermission[], granted: AssistantPermission[]): boolean {
  return required.every((permission) => granted.includes(permission));
}
