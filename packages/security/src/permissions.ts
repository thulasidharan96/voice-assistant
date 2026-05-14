export interface PermissionDecision {
  granted: boolean;
  reason: string;
  requiresConfirmation: boolean;
}

const CONFIRMATION_ACTIONS = new Set(['open_app', 'network_request', 'notifications', 'background_mic']);

export function requiresConfirmation(actionType: string): boolean {
  return CONFIRMATION_ACTIONS.has(actionType);
}

export function createPermissionDecision(
  actionType: string,
  hasPermission: boolean,
  source = 'policy'
): PermissionDecision {
  if (!hasPermission) {
    return { granted: false, reason: `${source}: permission denied`, requiresConfirmation: false };
  }
  return {
    granted: true,
    reason: `${source}: permission granted`,
    requiresConfirmation: requiresConfirmation(actionType)
  };
}
