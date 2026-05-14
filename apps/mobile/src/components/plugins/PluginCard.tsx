import React from 'react';
import { Text, View } from 'react-native';

export function PluginCard({ name, description }: { name: string; description: string }): JSX.Element {
  return (
    <View style={{ backgroundColor: '#141A26', borderRadius: 16, padding: 14, marginBottom: 10 }}>
      <Text style={{ color: '#F4F7FF', fontWeight: '700' }}>{name}</Text>
      <Text style={{ color: '#B4C0DD' }}>{description}</Text>
    </View>
  );
}
