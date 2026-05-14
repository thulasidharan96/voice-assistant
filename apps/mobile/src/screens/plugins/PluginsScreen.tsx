import React from 'react';
import { ScrollView } from 'react-native';
import { Screen } from '@libreassistant/ui';
import { PermissionBadge } from '../../components/plugins/PermissionBadge';
import { PluginCard } from '../../components/plugins/PluginCard';

const plugins = [
  { name: 'Notes', description: 'Create/search notes', permissions: ['storage:notes:read', 'storage:notes:write'] },
  { name: 'Reminders', description: 'Create reminders', permissions: ['storage:reminders:read', 'storage:reminders:write'] },
  { name: 'Calculator', description: 'Run calculations', permissions: [] },
  { name: 'Weather', description: 'Placeholder', permissions: ['network:access'] }
];

export function PluginsScreen(): JSX.Element {
  return (
    <Screen>
      <ScrollView>
        {plugins.map((plugin) => (
          <PluginCard key={plugin.name} name={plugin.name} description={plugin.description} />
        ))}
        <PermissionBadge label="Permissions shown in plugin details" />
      </ScrollView>
    </Screen>
  );
}
