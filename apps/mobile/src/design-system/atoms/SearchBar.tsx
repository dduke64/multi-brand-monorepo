import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from './Text';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

export const SearchBar = ({
  placeholder = 'Search products...',
  onSearch,
  onChangeText,
  value,
}: SearchBarProps) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState(value || '');

  const handleChangeText = (text: string) => {
    setSearchQuery(text);
    onChangeText?.(text);
  };

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        style={[
          styles.input,
          {
            color: theme.colors.text,
            borderColor: theme.colors.textSecondary,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={searchQuery}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      <TouchableOpacity
        style={[styles.searchButton, { backgroundColor: theme.colors.primary }]}
        onPress={handleSearch}
        accessibilityLabel="Search"
        accessibilityRole="button"
      >
        <Text style={[styles.searchButtonText, { color: theme.colors.buttonText }]}>
          🔍
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 8,
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 18,
  },
});