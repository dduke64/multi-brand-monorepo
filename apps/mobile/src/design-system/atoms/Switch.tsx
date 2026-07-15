import React from 'react';
import { Switch as RNSwitch, SwitchProps, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from './Text';

interface CustomSwitchProps extends SwitchProps {
  label?: string;
}

export const Switch: React.FC<CustomSwitchProps> = ({ label, ...props }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {label && <Text variant="body">{label}</Text>}
      <RNSwitch
        trackColor={{ false: theme.colors.textSecondary, true: theme.colors.primary }}
        thumbColor={props.value ? theme.colors.buttonText : '#f4f3f4'}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});