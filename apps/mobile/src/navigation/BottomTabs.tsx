import React from 'react';
import { Text, View } from 'react-native';

export function BottomTabs(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12, backgroundColor: '#141A26' }}>
      {['Home', 'Chat', 'Plugins', 'Settings'].map((item) => (
        <Text key={item} style={{ color: '#B4C0DD' }}>{item}</Text>
      ))}
    </View>
  );
}
