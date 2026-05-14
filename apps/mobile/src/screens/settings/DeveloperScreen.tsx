import React from 'react';
import { Text } from 'react-native';
import { Card, Screen } from '@libreassistant/ui';

export function DeveloperScreen(): JSX.Element {
  return (
    <Screen>
      <Card>
        <Text style={{ color: '#F4F7FF', fontWeight: '700' }}>Developer Debug</Text>
        <Text style={{ color: '#B4C0DD' }}>Pipeline logs are redacted by default.</Text>
      </Card>
    </Screen>
  );
}
