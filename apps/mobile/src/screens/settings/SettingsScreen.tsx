import React from 'react';
import { Screen } from '@libreassistant/ui';
import { SectionHeader } from '../../components/settings/SectionHeader';
import { SettingRow } from '../../components/settings/SettingRow';

export function SettingsScreen(): JSX.Element {
  return (
    <Screen>
      <SectionHeader title="Settings" />
      <SettingRow title="AI Provider" value="Mock (BYOK/self-hosted configurable)" />
      <SettingRow title="Voice" value="On-demand only" />
      <SettingRow title="Telemetry" value="Disabled by default" />
      <SettingRow title="Export Data" value="Placeholder" />
      <SettingRow title="Delete All Data" value="Placeholder" />
    </Screen>
  );
}
