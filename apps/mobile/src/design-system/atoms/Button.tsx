import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
  title: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  variant = 'primary',
  style,
  ...props 
}) => {
  const theme = useTheme();

  const buttonStyles = {
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
    },
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyles[variant],
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, { color: theme.colors.buttonText }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
