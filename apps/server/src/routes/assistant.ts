import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { createProviderRegistry } from '../providers/router';

const chatSchema = z.object({
  providerId: z.string().default('mock'),
  input: z.string().min(1),
  locale: z.string().optional()
});

export async function registerAssistantRoutes(app: FastifyInstance): Promise<void> {
  const providers = createProviderRegistry();

  app.post('/api/assistant/chat', async (request, reply) => {
    const parsed = chatSchema.safeParse(request.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() });

    const provider = providers.get(parsed.data.providerId);
    if (!provider) return reply.status(404).send({ error: 'Unknown provider' });

    const response = await provider.chat({ input: parsed.data.input, locale: parsed.data.locale });
    return { output: response.text, provider: provider.id };
  });

  app.get('/api/providers', async () => ({
    providers: providers.list().map((provider) => ({
      id: provider.id,
      name: provider.name,
      capabilities: provider.capabilities
    }))
  }));

  app.post('/api/providers/validate', async (request, reply) => {
    const body = z.object({ providerId: z.string(), config: z.record(z.string()).optional() }).safeParse(request.body);
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() });
    const provider = providers.get(body.data.providerId);
    if (!provider) return reply.status(404).send({ error: 'Unknown provider' });
    return { valid: provider.validateConfig(body.data.config ?? {}) };
  });

  app.get('/api/plugins', async () => ({ plugins: ['notes', 'reminders', 'calculator', 'system-help'] }));
  app.post('/api/logs/client', async () => ({ accepted: true }));
}
