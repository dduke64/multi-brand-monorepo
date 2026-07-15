import { Product } from '../molecules/ProductTile';

export interface BrandProductConfig {
  [brandId: string]: Product[];
}

/**
 * Brand-specific product catalogs
 * Each brand can define its own product inventory to showcase monorepo flexibility
 */
export const brandProductConfig: BrandProductConfig = {
  brandA: [
    {
      id: 'a1',
      name: 'Premium Wireless Headphones',
      price: '$299.99',
      badge: 'New',
    },
    {
      id: 'a2',
      name: 'Smart Watch Series 5',
      price: '$399.99',
      badge: 'Sale',
    },
    {
      id: 'a3',
      name: 'Portable Bluetooth Speaker',
      price: '$149.99',
    },
    {
      id: 'a4',
      name: 'USB-C Fast Charger',
      price: '$49.99',
      badge: 'Hot',
    },
    {
      id: 'a5',
      name: 'Laptop Stand Adjustable',
      price: '$79.99',
    },
    {
      id: 'a6',
      name: 'Wireless Mouse Ergonomic',
      price: '$59.99',
      badge: 'New',
    },
  ],
  brandB: [
    {
      id: 'b1',
      name: 'Professional Camera Lens',
      price: '$599.99',
      badge: 'New',
    },
    {
      id: 'b2',
      name: 'Mechanical Keyboard RGB',
      price: '$179.99',
    },
    {
      id: 'b3',
      name: 'Gaming Monitor 27"',
      price: '$449.99',
      badge: 'Hot',
    },
    {
      id: 'b4',
      name: 'Noise Cancelling Earbuds',
      price: '$199.99',
      badge: 'Sale',
    },
    {
      id: 'b5',
      name: 'Portable SSD 1TB',
      price: '$129.99',
    },
    {
      id: 'b6',
      name: 'Webcam 4K Ultra HD',
      price: '$249.99',
      badge: 'New',
    },
  ],
};

/**
 * Get product catalog for a specific brand
 * @param brandId - The brand identifier
 * @returns Array of products for the brand
 */
export const getProductsForBrand = (brandId: string): Product[] => {
  return brandProductConfig[brandId] || brandProductConfig.brandA;
};