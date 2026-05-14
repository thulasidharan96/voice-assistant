import React from 'react';
import { Text, View } from 'react-native';

export function PermissionBadge({ label }: { label: string }): JSX.Element {
  return (
    <View style={{ backgroundColor: '#1C2433', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, marginRight: 6 }}>
      <Text style={{ color: '#B4C0DD', fontSize: 12 }}>{label}</Text>
    </View>
  );
}
