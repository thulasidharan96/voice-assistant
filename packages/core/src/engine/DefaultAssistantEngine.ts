import type { AssistantRuntimeContext } from '../context/AssistantContext';
import type { AssistantRequest } from '../models/AssistantRequest';
import type { AssistantResponse } from '../models/AssistantResponse';
import type { AssistantEngine } from './AssistantEngine';
import { runPipeline } from './pipeline';

export class DefaultAssistantEngine implements AssistantEngine {
  constructor(private readonly context: AssistantRuntimeContext) {}

  process(request: AssistantRequest): Promise<AssistantResponse> {
    return runPipeline(request, this.context);
  }
}
