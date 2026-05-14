import React from 'react';
import { Text } from 'react-native';
import { Card, Screen } from '@libreassistant/ui';
import { PrivacyBadge } from '../../components/settings/PrivacyBadge';

export function PrivacyCenterScreen(): JSX.Element {
  return (
    <Screen>
      <PrivacyBadge />
      <Card style={{ marginTop: 12 }}>
        <Text style={{ color: '#F4F7FF', fontWeight: '700' }}>Privacy Center</Text>
        <Text style={{ color: '#B4C0DD' }}>Data is local-first. Provider requests are explicit. Telemetry is disabled by default.</Text>
      </Card>
    </Screen>
  );
}
