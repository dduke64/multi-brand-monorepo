import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface DividerProps {
  style?: ViewStyle;
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
}

export const Divider: React.FC<DividerProps> = ({ style, orientation = 'horizontal', thickness = 1 }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        {
          backgroundColor: theme.colors.textSecondary,
          [orientation === 'horizontal' ? 'height' : 'width']: thickness,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    opacity: 0.3,
  },
  vertical: {
    height: '100%',
    opacity: 0.3,
  },
});