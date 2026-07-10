import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Box,
  Text,
  SearchBar,
  TopMenuBar,
  ProductTile,
  getMenuItemsForBrand,
  getProductsForBrand,
  useTheme,
  Product,
  MenuItem,
} from '@dib/design-system';

interface HomeScreenProps {
  brandId?: string;
}

const getMenuItems = (brandId: string): MenuItem[] => {
  const items = getMenuItemsForBrand(brandId);
  return items.map((item) => ({
    ...item,
    onPress: () => {
      console.log(`Menu item pressed: ${item.label}`);
    },
  }));
};

const handleSearch = (query: string) => {
  console.log('Search query:', query);
};

const handleProductPress = (product: Product) => {
  console.log('Product pressed:', product.name);
};

export const HomeScreen = ({ brandId = 'brandA' }: HomeScreenProps) => {
  const theme = useTheme();
  const menuItems = getMenuItems(brandId);
  const products = getProductsForBrand(brandId);

  return (
    <Box style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top Menu Bar - Brand-specific */}
      <TopMenuBar items={menuItems} activeItemId="home" />

      {/* Search Bar */}
      <SearchBar
        placeholder="Search products..."
        onSearch={handleSearch}
      />

      {/* Product Grid */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text variant="heading" style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Featured Products
        </Text>
        <View style={styles.productGrid}>
          {products.map((product) => (
            <ProductTile
              key={product.id}
              product={{
                ...product,
                onPress: () => handleProductPress(product),
              }}
            />
          ))}
        </View>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 12,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
