import type { AssistantPermission, AssistantPlugin, PluginCommand, PluginContext } from './types';
import { canUsePermissions } from './permissions';

export class PluginManager {
  private plugins = new Map<string, AssistantPlugin>();
  private enabled = new Set<string>();
  private grantedPermissions: AssistantPermission[] = [];

  setGrantedPermissions(permissions: AssistantPermission[]): void {
    this.grantedPermissions = permissions;
  }

  registerPlugin(plugin: AssistantPlugin): void {
    this.plugins.set(plugin.id, plugin);
    this.enabled.add(plugin.id);
  }

  unregisterPlugin(pluginId: string): void {
    this.plugins.delete(pluginId);
    this.enabled.delete(pluginId);
  }

  enablePlugin(pluginId: string): void {
    if (this.plugins.has(pluginId)) this.enabled.add(pluginId);
  }

  disablePlugin(pluginId: string): void {
    this.enabled.delete(pluginId);
  }

  listPlugins(): AssistantPlugin[] {
    return [...this.plugins.values()];
  }

  findMatchingCommand(input: string): { plugin: AssistantPlugin; command: PluginCommand } | undefined {
    const candidates = [...this.plugins.values()].filter((plugin) => this.enabled.has(plugin.id));
    for (const plugin of candidates) {
      if (!canUsePermissions(plugin.permissions, this.grantedPermissions)) continue;
      const match = plugin.commands.find((command) => command.match(input));
      if (match) return { plugin, command: match };
    }
    return undefined;
  }

  async executeCommand(input: string, context: PluginContext): Promise<string | undefined> {
    const matched = this.findMatchingCommand(input);
    if (!matched) return undefined;
    return matched.command.execute(context);
  }
}
