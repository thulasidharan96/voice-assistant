export interface AssistantAction {
  type: string;
  payload: Record<string, unknown>;
  requiresConfirmation: boolean;
  permission?: string;
}
