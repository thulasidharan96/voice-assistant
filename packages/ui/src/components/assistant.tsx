import React from 'react';
import { Pressable, Text, View } from 'react-native';

export function AssistantOrb({ label = 'Idle' }: { label?: string }): JSX.Element {
  return (
    <View accessibilityLabel="Assistant orb" style={{ width: 140, height: 140, borderRadius: 70, backgroundColor: '#3042B6', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontWeight: '700' }}>{label}</Text>
    </View>
  );
}

export function VoiceButton({ onPress }: { onPress: () => void }): JSX.Element {
  return (
    <Pressable accessibilityLabel="Voice button" onPress={onPress} style={{ borderRadius: 999, backgroundColor: '#6B47FF', padding: 12 }}>
      <Text style={{ color: '#fff' }}>Speak</Text>
    </Pressable>
  );
}
