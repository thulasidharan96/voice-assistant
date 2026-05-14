import React from 'react';
import { Pressable, Text, View } from 'react-native';

export function IconButton({ label, onPress }: { label: string; onPress: () => void }): JSX.Element {
  return <Pressable accessibilityLabel={label} onPress={onPress}><Text style={{ color: '#fff' }}>{label}</Text></Pressable>;
}

export function CommandChip({ label }: { label: string }): JSX.Element {
  return <View style={{ borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#1D2433' }}><Text style={{ color: '#fff' }}>{label}</Text></View>;
}

export function PluginCard({ title }: { title: string }): JSX.Element {
  return <View style={{ borderRadius: 12, backgroundColor: '#1D2433', padding: 10 }}><Text style={{ color: '#fff' }}>{title}</Text></View>;
}

export function PermissionBadge({ text }: { text: string }): JSX.Element {
  return <Text style={{ color: '#A5B4FC' }}>{text}</Text>;
}

export function PrivacyBadge({ text = 'Privacy' }: { text?: string }): JSX.Element {
  return <Text style={{ color: '#34D399' }}>{text}</Text>;
}

export function SettingRow({ title, value }: { title: string; value: string }): JSX.Element {
  return <View><Text style={{ color: '#fff' }}>{title}</Text><Text style={{ color: '#A5B4FC' }}>{value}</Text></View>;
}

export function EmptyState({ text }: { text: string }): JSX.Element {
  return <Text style={{ color: '#98A2B3' }}>{text}</Text>;
}

export function SectionHeader({ text }: { text: string }): JSX.Element {
  return <Text style={{ color: '#fff', fontWeight: '700' }}>{text}</Text>;
}
