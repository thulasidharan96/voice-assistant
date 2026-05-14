import React from 'react';
import { Pressable, Text, TextInput, View, type ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';

const dark = colors.dark;

export function Screen({ children }: React.PropsWithChildren): JSX.Element {
  return <View style={{ flex: 1, backgroundColor: dark.background, padding: spacing.lg }}>{children}</View>;
}

export function Card({ children, style }: React.PropsWithChildren<{ style?: ViewStyle }>): JSX.Element {
  return (
    <View style={[{ backgroundColor: dark.surface, borderRadius: radius.lg, padding: spacing.lg }, style]}>
      {children}
    </View>
  );
}

export function Button({ label, onPress }: { label: string; onPress: () => void }): JSX.Element {
  return (
    <Pressable
      accessibilityLabel={label}
      onPress={onPress}
      style={{ backgroundColor: dark.accentEnd, padding: spacing.md, borderRadius: radius.md }}
    >
      <Text style={{ color: dark.textPrimary, fontWeight: '700' }}>{label}</Text>
    </Pressable>
  );
}

export function TextField({ value, onChangeText, placeholder }: { value: string; onChangeText: (value: string) => void; placeholder: string }): JSX.Element {
  return (
    <TextInput
      accessibilityLabel={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={dark.textSecondary}
      style={{ backgroundColor: '#1C2433', color: dark.textPrimary, borderRadius: radius.md, padding: spacing.md }}
    />
  );
}
