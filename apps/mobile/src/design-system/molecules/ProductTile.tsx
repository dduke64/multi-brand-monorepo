import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';

export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
  badge?: string;
  onPress?: () => void;
}

interface ProductTileProps {
  product: Product;
}

export const ProductTile = ({ product }: ProductTileProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.textSecondary,
        },
      ]}
      onPress={product.onPress}
      accessibilityLabel={`${product.name}, ${product.price}`}
      accessibilityRole="button"
    >
      <View style={styles.imageContainer}>
        {product.imageUrl ? (
          <Image
            source={{ uri: product.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View
            style={[
              styles.imagePlaceholder,
              { backgroundColor: theme.colors.textSecondary + '20' },
            ]}
          >
            <Text style={{ color: theme.colors.textSecondary }}>📦</Text>
          </View>
        )}
        {product.badge && (
          <View style={styles.badgeContainer}>
            <Badge label={product.badge} variant="primary" />
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text
          variant="body"
          style={[styles.productName, { color: theme.colors.text }]}
          numberOfLines={2}
        >
          {product.name}
        </Text>
        <Text
          variant="body"
          style={[styles.productPrice, { color: theme.colors.primary }]}
        >
          {product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  infoContainer: {
    padding: 12,
  },
  productName: {
    marginBottom: 4,
    fontWeight: '500',
  },
  productPrice: {
    fontWeight: '700',
    fontSize: 16,
  },
});