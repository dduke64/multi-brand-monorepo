import React from 'react';
import { TextInput, StyleSheet, View, ViewStyle, TextInputProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from './Text';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({ label, error, containerStyle, ...props }) => {
  const theme = useTheme();

  return (
    <View style={containerStyle}>
      {label && (
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            borderColor: error ? '#EF4444' : theme.colors.textSecondary,
          },
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
      {error && (
        <Text variant="caption" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: '#EF4444',
    marginTop: 4,
  },
});