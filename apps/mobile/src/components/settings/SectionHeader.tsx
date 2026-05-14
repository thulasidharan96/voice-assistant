import React from 'react';
import { Text } from 'react-native';

export function SectionHeader({ title }: { title: string }): JSX.Element {
  return <Text style={{ color: '#F4F7FF', fontSize: 20, fontWeight: '700', marginBottom: 12 }}>{title}</Text>;
}
