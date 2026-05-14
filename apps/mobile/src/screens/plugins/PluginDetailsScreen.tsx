import React from 'react';
import { Text } from 'react-native';
import { Card, Screen } from '@libreassistant/ui';

export function PluginDetailsScreen(): JSX.Element {
  return (
    <Screen>
      <Card>
        <Text style={{ color: '#F4F7FF', fontWeight: '700' }}>Plugin Details</Text>
        <Text style={{ color: '#B4C0DD' }}>Schema-driven plugin settings placeholder.</Text>
      </Card>
    </Screen>
  );
}
