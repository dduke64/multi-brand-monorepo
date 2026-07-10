# Ecommerce Home Page Setup

## Overview
The home page has been transformed into an ecommerce layout with brand-specific customization capabilities.

## New Components

### 1. SearchBar (Atom)
**Location:** `packages/design-system/src/atoms/SearchBar.tsx`

**Features:**
- Text input with search button
- Automatic theme integration
- Placeholder customization
- Search callback support
- Accessibility support (ARIA labels, keyboard navigation)

**Usage:**
```tsx
import { SearchBar } from '@dib/design-system';

<SearchBar
  placeholder="Search products..."
  onSearch={(query) => console.log(query)}
  onChangeText={(text) => console.log(text)}
  value={searchQuery}
/>
```

### 2. TopMenuBar (Molecule)
**Location:** `packages/design-system/src/molecules/TopMenuBar.tsx`

**Features:**
- Horizontal scrollable menu
- Brand-specific menu items
- Active state highlighting
- Automatic theme colors
- Touch-friendly design

**Usage:**
```tsx
import { TopMenuBar, MenuItem } from '@dib/design-system';

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', onPress: () => {} },
  { id: 'shop', label: 'Shop', onPress: () => {} },
];

<TopMenuBar items={menuItems} activeItemId="home" />
```

### 3. ProductTile (Molecule)
**Location:** `packages/design-system/src/molecules/ProductTile.tsx`

**Features:**
- Product image display (with placeholder)
- Product name and price
- Optional badge (New, Sale, Hot, etc.)
- Touch interaction
- Responsive grid layout
- Automatic theme integration

**Usage:**
```tsx
import { ProductTile, Product } from '@dib/design-system';

const product: Product = {
  id: '1',
  name: 'Premium Headphones',
  price: '$299.99',
  imageUrl: 'https://example.com/image.jpg', // optional
  badge: 'New', // optional
  onPress: () => console.log('Product clicked'),
};

<ProductTile product={product} />
```

## Brand-Specific Configurations

### Menu Configuration
**Location:** `packages/design-system/src/config/brandMenuConfig.ts`

This file defines different menu items for each brand.

### Product Configuration
**Location:** `packages/design-system/src/config/brandProductConfig.ts`

This file defines different product catalogs for each brand, allowing each brand to showcase its own unique inventory.

**BrandA Menu Items:**
- Home
- Shop All
- Categories
- Deals
- New Arrivals
- My Account

**BrandB Menu Items:**
- Home
- Products
- Featured
- Brands
- Sale
- Support
- Profile

### Usage:
```tsx
import { getMenuItemsForBrand } from '@dib/design-system';

const menuItems = getMenuItemsForBrand('brandA');
// Returns MenuItem[] specific to brandA
```

## Home Page Structure

### Layout Hierarchy:
```
HomeScreen
├── TopMenuBar (brand-specific)
├── SearchBar
└── ScrollView
    ├── Section Title ("Featured Products")
    └── Product Grid
        └── ProductTile (x6 dummy products)
```

### Responsive Design:
- Product tiles are displayed in a 2-column grid
- Each tile takes 48% width with proper spacing
- Horizontal scrolling for menu items
- Vertical scrolling for product grid

## Design Principles Applied

### 1. Code Reuse
- All components are generic and theme-aware
- No brand-specific hardcoding in components
- Shared components across all brands

### 2. Atomic Design Pattern
- **Atoms:** SearchBar (basic input component)
- **Molecules:** TopMenuBar, ProductTile (composed components)
- **Organisms:** HomeScreen (complex page layout)

### 3. Brand Customization
- **Theme-based:** Colors, typography automatically applied
- **Configuration-based:** Menu items defined per brand
- **Opt-in system:** Components can be enabled/disabled per brand

### 4. Separation of Concerns
- UI components in design system package
- Brand configuration in separate config files
- Business logic in screen components

## Switching Between Brands

To see different brand experiences:

### Method 1: Environment Variable
Edit `.env.example` or create `.env` in `apps/mobile/`:
```
EXPO_PUBLIC_BRAND_ID=brandA
# or
EXPO_PUBLIC_BRAND_ID=brandB
```

### Method 2: Direct Code Change
Edit `apps/mobile/src/App.tsx`:
```tsx
const brandId = 'brandA'; // or 'brandB'
```

### Visual Differences Between Brands:

**BrandA:**
- Primary color: Blue (#007AFF)
- Secondary color: Purple (#5856D6)
- Menu: Home, Shop All, Categories, Deals, New Arrivals, My Account
- White background

**BrandB:**
- Primary color: Green (#34C759)
- Secondary color: Orange (#FF9500)
- Menu: Home, Products, Featured, Brands, Sale, Support, Profile
- Light gray background (#F2F2F7)

## Brand-Specific Product Catalogs

### Configuration File
**Location:** `packages/design-system/src/config/brandProductConfig.ts`

Each brand now has its own unique product inventory, showcasing the monorepo's flexibility.

### BrandA Products:
1. Premium Wireless Headphones - $299.99 (Badge: New)
2. Smart Watch Series 5 - $399.99 (Badge: Sale)
3. Portable Bluetooth Speaker - $149.99
4. USB-C Fast Charger - $49.99 (Badge: Hot)
5. Laptop Stand Adjustable - $79.99
6. Wireless Mouse Ergonomic - $59.99 (Badge: New)

### BrandB Products:
1. Professional Camera Lens - $599.99 (Badge: New)
2. Mechanical Keyboard RGB - $179.99
3. Gaming Monitor 27" - $449.99 (Badge: Hot)
4. Noise Cancelling Earbuds - $199.99 (Badge: Sale)
5. Portable SSD 1TB - $129.99
6. Webcam 4K Ultra HD - $249.99 (Badge: New)

### Usage:
```tsx
import { getProductsForBrand } from '@dib/design-system';

const products = getProductsForBrand('brandA');
// Returns Product[] specific to brandA
```

## Accessibility Features

- All interactive elements have `accessibilityRole` and `accessibilityLabel`
- Search bar supports keyboard navigation (return key = search)
- Menu items have `accessibilityState` for selected state
- Product tiles have descriptive labels with name and price

## Next Steps

### To Make Functional:
1. Connect to real product API
2. Implement search functionality with filtering
3. Add navigation to product detail pages
4. Implement menu item navigation
5. Add shopping cart functionality

### To Enhance:
1. Add product images (currently using placeholders)
2. Implement infinite scroll for products
3. Add category filtering
4. Implement sort options (price, name, etc.)
5. Add product favorites/wishlist
6. Implement product quick view

## Component Registry

All new components are registered in `packages/design-system/src/config/config.json`:
- SearchBar
- TopMenuBar
- ProductTile

Each can be enabled/disabled per brand using the `brandOptIn` configuration.
