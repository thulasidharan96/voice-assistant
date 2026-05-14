import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Screen } from '@libreassistant/ui';

export function OnboardingScreen({ onContinue }: { onContinue: () => void }): JSX.Element {
  return (
    <Screen>
      <Card>
        <Text style={{ color: '#F4F7FF', fontSize: 28, fontWeight: '700' }}>Welcome to LibreAssistant</Text>
        <Text style={{ color: '#B4C0DD', marginVertical: 12 }}>
          Privacy-first assistant. Choose BYOK, self-hosted backend, or future offline mode.
        </Text>
        <Button label="Start" onPress={onContinue} />
      </Card>
    </Screen>
  );
}
