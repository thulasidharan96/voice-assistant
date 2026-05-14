import React from 'react';
import { Text } from 'react-native';
import { Card, Screen } from '@libreassistant/ui';

export function AboutScreen(): JSX.Element {
  return (
    <Screen>
      <Card>
        <Text style={{ color: '#F4F7FF', fontWeight: '700' }}>LibreAssistant Mobile</Text>
        <Text style={{ color: '#B4C0DD' }}>Open-source privacy-first assistant • Apache-2.0</Text>
      </Card>
    </Screen>
  );
}
