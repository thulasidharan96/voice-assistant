import type { AssistantRequest } from '../models/AssistantRequest';
import type { AssistantResponse } from '../models/AssistantResponse';

export interface AssistantEngine {
  process(request: AssistantRequest): Promise<AssistantResponse>;
}
