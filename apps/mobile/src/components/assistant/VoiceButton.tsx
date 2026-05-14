import React from 'react';
import { Pressable, Text } from 'react-native';

export function VoiceButton({ onPress }: { onPress: () => void }): JSX.Element {
  return (
    <Pressable
      accessibilityLabel="Voice input"
      onPress={onPress}
      style={{ borderRadius: 999, backgroundColor: '#7A5CFF', paddingVertical: 14, paddingHorizontal: 22 }}
    >
      <Text style={{ color: '#fff', fontWeight: '700' }}>🎤 Speak</Text>
    </Pressable>
  );
}
