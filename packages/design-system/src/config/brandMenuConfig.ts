import { MenuItem } from '../molecules/TopMenuBar';

export interface BrandMenuConfig {
  [brandId: string]: MenuItem[];
}

/**
 * Brand-specific menu configurations
 * Each brand can define its own menu items to showcase monorepo flexibility
 */
export const brandMenuConfig: BrandMenuConfig = {
  brandA: [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop All' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'account', label: 'My Account' },
  ],
  brandB: [
    { id: 'home', label: 'Home' },
    { id: 'sale', label: 'Sale' },
    { id: 'support', label: 'Support' },
    { id: 'profile', label: 'Profile' },
  ],
};

/**
 * Get menu items for a specific brand
 * @param brandId - The brand identifier
 * @returns Array of menu items for the brand
 */
export const getMenuItemsForBrand = (brandId: string): MenuItem[] => {
  return brandMenuConfig[brandId] || brandMenuConfig.brandA;
};