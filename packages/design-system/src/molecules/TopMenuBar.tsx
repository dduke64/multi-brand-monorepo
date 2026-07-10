import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from '../atoms/Text';

export interface MenuItem {
  id: string;
  label: string;
  onPress?: () => void;
}

interface TopMenuBarProps {
  items: MenuItem[];
  activeItemId?: string;
}

export const TopMenuBar = ({ items, activeItemId }: TopMenuBarProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item) => {
          const isActive = item.id === activeItemId;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                isActive && [
                  styles.activeMenuItem,
                  { backgroundColor: theme.colors.secondary },
                ],
              ]}
              onPress={item.onPress}
              accessibilityLabel={item.label}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
            >
              <Text
                style={[
                  styles.menuText,
                  { color: theme.colors.buttonText },
                  isActive && styles.activeMenuText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 8,
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 6,
  },
  activeMenuItem: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeMenuText: {
    fontWeight: '700',
  },
});