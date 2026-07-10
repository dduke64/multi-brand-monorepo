# Component Showcase Documentation

This document describes the new showcase screens added to demonstrate the multi-brand component system.

## New Screens

### 1. ComponentsScreen (`/apps/mobile/src/screens/ComponentsScreen.tsx`)

A comprehensive showcase of all available UI components with interactive examples.

**Features:**
- Displays all atomic components (Card, Input, Switch, Badge, Avatar, Divider, Button)
- Interactive demos (text input, toggle switches)
- Brand badge showing current active brand
- Conditional rendering based on brand component opt-in

**Components Demonstrated:**
- **Card**: Shows different elevation levels (medium, high)
- **Input**: Text input with labels, placeholders, and error states
- **Switch**: Toggle switches with labels
- **Badge**: Multiple color variants (primary, success, warning, error)
- **Avatar**: Different sizes (small, medium, large) with initials
- **Divider**: Horizontal separators between sections
- **Button**: Primary action button

### 2. ProfileScreen (`/apps/mobile/src/screens/ProfileScreen.tsx`)

A realistic user profile page demonstrating practical component usage.

**Features:**
- User avatar and profile header
- Personal information form (name, email)
- Settings toggles (notifications, dark mode)
- Account statistics with vertical dividers
- Action buttons (save, sign out)

**Sections:**
1. **Profile Header**: Avatar, title, subtitle
2. **Personal Information**: Card with input fields
3. **Preferences**: Card with toggle switches
4. **Account Statistics**: Card with stats display and vertical dividers
5. **Actions**: Save and sign out buttons

## Navigation

Bottom tab navigation connects all screens:
- **Home Tab**: Original welcome screen
- **Components Tab**: Component showcase
- **Profile Tab**: User profile page

Navigation UI automatically uses brand theming (colors, styles).

## Brand Theming

All components automatically apply the active brand's theme:

```typescript
const theme = useTheme(); // Returns current brand's theme
```

**Theme Properties Used:**
- `colors.primary`: Primary brand color
- `colors.secondary`: Secondary brand color
- `colors.background`: Background color
- `colors.text`: Primary text color
- `colors.textSecondary`: Secondary text color
- `colors.buttonText`: Button text color
- `typography.fontSize.*`: Font sizes
- `typography.fontWeight.*`: Font weights

## Component Opt-In System

Each screen checks component availability before rendering:

```typescript
const isEnabled = (componentName: ComponentName) => 
  isComponentEnabled(componentName, brandId);

// Conditional rendering
{isEnabled('Card') && (
  <Card>
    <Text>Content</Text>
  </Card>
)}
```

**Benefits:**
- Brands can disable components they don't want
- No code changes needed - just update `config.json`
- Graceful degradation if components are disabled

## Testing Different Brands

To test with different brands:

1. **Environment Variable** (recommended):
   ```bash
   EXPO_PUBLIC_BRAND_ID=brandB npm start
   ```

2. **Edit App.tsx**:
   ```typescript
   const brandId = 'brandB'; // Change this
   ```

3. **Update config.json** to enable/disable components:
   ```json
   "Card": {
     "brandOptIn": {
       "brandA": true,
       "brandB": false  // Disable for brandB
     }
   }
   ```

## File Structure

```
apps/mobile/src/
├── screens/
│   ├── HomeScreen.tsx          # Original welcome screen
│   ├── ComponentsScreen.tsx    # Component showcase (NEW)
│   └── ProfileScreen.tsx       # User profile page (NEW)
├── navigation/
│   └── Navigation.tsx          # Bottom tab navigation (NEW)
└── App.tsx                     # Updated with navigation

packages/design-system/src/
├── atoms/
│   ├── Card.tsx               # NEW
│   ├── Input.tsx              # NEW
│   ├── Switch.tsx             # NEW
│   ├── Badge.tsx              # NEW
│   ├── Avatar.tsx             # NEW
│   └── Divider.tsx            # NEW
└── config/
    ├── config.json            # Component opt-in config (NEW)
    ├── ComponentRegistry.tsx  # Opt-in utilities (NEW)
    └── README.md              # Config system docs (NEW)
```

## Running the App

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the app**:
   ```bash
   cd apps/mobile
   npm start
   ```

3. **Choose platform**:
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for web

## Customization Examples

### Disable Card Component for BrandB

Edit `/packages/design-system/src/config/config.json`:

```json
"Card": {
  "brandOptIn": {
    "brandA": true,
    "brandB": false
  }
}
```

Result: ComponentsScreen and ProfileScreen will not show Card components when running as brandB.

### Add New Brand (BrandC)

1. Create theme: `/packages/design-system/src/themes/brandC/theme.ts`
2. Update all components in `config.json`:
   ```json
   "Card": {
     "brandOptIn": {
       "brandA": true,
       "brandB": true,
       "brandC": true
     }
   }
   ```
3. Run with: `EXPO_PUBLIC_BRAND_ID=brandC npm start`

## Key Features Implemented

✅ **Monorepo Design**: All components in shared design-system package
✅ **Brand Opt-In/Out**: JSON config controls component availability per brand
✅ **Automatic Theming**: All components use `useTheme()` hook
✅ **Multiple Screens**: Home, Components showcase, Profile page
✅ **Navigation**: Bottom tabs with themed navigation UI
✅ **Conditional Rendering**: Components check opt-in status before rendering
✅ **Type Safety**: TypeScript ensures component names are valid
✅ **Documentation**: Comprehensive docs for usage and extension

## Next Steps

- Add more component variants (molecules, organisms)
- Implement brand switcher UI
- Add more theme properties (shadows, borders, etc.)
- Create brand-specific component overrides
- Add component prop customization per brand
