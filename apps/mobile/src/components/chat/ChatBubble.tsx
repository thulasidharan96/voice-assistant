import React from 'react';
import { Text, View } from 'react-native';

export function ChatBubble({ role, text }: { role: 'user' | 'assistant'; text: string }): JSX.Element {
  const isUser = role === 'user';
  return (
    <View style={{ alignSelf: isUser ? 'flex-end' : 'flex-start', backgroundColor: isUser ? '#3054FF' : '#1C2433', borderRadius: 14, padding: 10, marginBottom: 8, maxWidth: '90%' }}>
      <Text style={{ color: '#fff' }}>{text}</Text>
    </View>
  );
}
