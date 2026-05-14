import React from 'react';
import { Text, View } from 'react-native';

export function EmptyState({ title }: { title: string }): JSX.Element {
  return (
    <View style={{ alignItems: 'center', padding: 24 }}>
      <Text style={{ color: '#B4C0DD' }}>{title}</Text>
    </View>
  );
}
