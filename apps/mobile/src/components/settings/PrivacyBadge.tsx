import React from 'react';
import { Text, View } from 'react-native';

export function PrivacyBadge(): JSX.Element {
  return (
    <View style={{ backgroundColor: '#163126', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 }}>
      <Text style={{ color: '#26C281', fontWeight: '700' }}>Privacy Mode ON</Text>
    </View>
  );
}
