import React from 'react';
import { Text, View } from 'react-native';

export function AssistantOrb({ state }: { state: 'idle' | 'listening' | 'speaking' }): JSX.Element {
  const color = state === 'listening' ? '#00C2FF' : state === 'speaking' ? '#7A5CFF' : '#4F5D75';
  return (
    <View
      accessible
      accessibilityLabel={`Assistant orb ${state}`}
      style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ color: '#fff', fontWeight: '700' }}>{state.toUpperCase()}</Text>
    </View>
  );
}
