import { redactSecrets } from '@libreassistant/security';
import { localCommands } from '../commands/localCommandRegistry';
import type { AssistantRuntimeContext } from '../context/AssistantContext';
import type { AssistantRequest } from '../models/AssistantRequest';
import type { AssistantResponse } from '../models/AssistantResponse';

export async function runPipeline(request: AssistantRequest, context: AssistantRuntimeContext): Promise<AssistantResponse> {
  const normalized = request.input.trim();

  const local = localCommands.find((command) => command.match(normalized));
  if (local) {
    return {
      id: request.id,
      text: local.execute(normalized),
      actions: [],
      shouldSpeak: true,
      source: 'local-command'
    };
  }

  const pluginResult = await context.pluginManager.executeCommand(normalized, {
    input: normalized,
    noteRepository: context.noteRepository,
    reminderRepository: context.reminderRepository
  });

  if (pluginResult) {
    await context.auditLogRepository.create({
      id: request.id,
      eventType: 'plugin-execution',
      source: 'plugin',
      payload: { input: redactSecrets(normalized), output: redactSecrets(pluginResult) },
      createdAt: new Date().toISOString()
    });

    return {
      id: request.id,
      text: pluginResult,
      actions: [],
      shouldSpeak: false,
      source: 'plugin'
    };
  }

  const aiResponse = await context.aiProvider.chat({ input: normalized, locale: request.locale });
  return {
    id: request.id,
    text: aiResponse.text,
    actions: [],
    shouldSpeak: Boolean(aiResponse.shouldSpeak),
    source: 'ai-provider'
  };
}
