import React from 'react';
import { Text, View } from 'react-native';

export function AppShell({ children }: React.PropsWithChildren): JSX.Element {
  return <View style={{ flex: 1 }}>{children}</View>;
}

export function BottomNav(): JSX.Element {
  return <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 12 }}><Text style={{ color: '#fff' }}>BottomNav</Text></View>;
}

export function GradientSurface({ children }: React.PropsWithChildren): JSX.Element {
  return <View style={{ backgroundColor: '#171C2A', borderRadius: 18, padding: 12 }}>{children}</View>;
}
