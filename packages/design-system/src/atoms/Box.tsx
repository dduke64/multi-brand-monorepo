import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface BoxProps extends ViewProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        { backgroundColor: theme.colors.background },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
