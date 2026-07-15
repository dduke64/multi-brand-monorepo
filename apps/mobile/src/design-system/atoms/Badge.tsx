import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from './Text';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary', style }) => {
  const theme = useTheme();

  const variantColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  };

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: variantColors[variant] },
        style,
      ]}
    >
      <Text variant="caption" style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});