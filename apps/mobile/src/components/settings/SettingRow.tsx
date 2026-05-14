import React from 'react';
import { Text, View } from 'react-native';

export function SettingRow({ title, value }: { title: string; value: string }): JSX.Element {
  return (
    <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#223049' }}>
      <Text style={{ color: '#F4F7FF', fontWeight: '600' }}>{title}</Text>
      <Text style={{ color: '#B4C0DD' }}>{value}</Text>
    </View>
  );
}
