import React from 'react';
import { Text, View } from 'react-native';

export function ChatBubble({ text }: { text: string }): JSX.Element {
  return <View style={{ backgroundColor: '#1D2433', borderRadius: 12, padding: 10 }}><Text style={{ color: '#fff' }}>{text}</Text></View>;
}

export function TypingIndicator(): JSX.Element {
  return <Text style={{ color: '#98A2B3' }}>Typing…</Text>;
}
