import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface TextProps extends RNTextProps {
  variant?: 'heading' | 'body' | 'caption';
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  children, 
  style, 
  ...props 
}) => {
  const theme = useTheme();

  const variantStyles = {
    heading: {
      fontSize: theme.typography.fontSize.heading,
      fontWeight: theme.typography.fontWeight.bold as RNTextProps['style'],
      color: theme.colors.text,
    },
    body: {
      fontSize: theme.typography.fontSize.body,
      fontWeight: theme.typography.fontWeight.regular as RNTextProps['style'],
      color: theme.colors.text,
    },
    caption: {
      fontSize: theme.typography.fontSize.caption,
      fontWeight: theme.typography.fontWeight.regular as RNTextProps['style'],
      color: theme.colors.textSecondary,
    },
  };

  return (
    <RNText
      style={[
        variantStyles[variant],
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
