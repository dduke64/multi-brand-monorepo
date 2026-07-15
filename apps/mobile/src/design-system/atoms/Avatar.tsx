import React from 'react';
import { View, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from './Text';

interface AvatarProps {
  source?: ImageSourcePropType;
  initials?: string;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({ source, initials, size = 'medium', style }) => {
  const theme = useTheme();

  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  const avatarSize = sizeMap[size];

  return (
    <View
      style={[
        styles.avatar,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          backgroundColor: theme.colors.primary,
        },
        style,
      ]}
    >
      {source ? (
        <Image source={source} style={[styles.image, { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }]} />
      ) : (
        <Text variant="body" style={styles.initials}>
          {initials || '?'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  initials: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});