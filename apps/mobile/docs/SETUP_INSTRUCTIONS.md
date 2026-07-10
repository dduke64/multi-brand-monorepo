# Setup Instructions for Component Showcase

Follow these steps to get the multi-brand component showcase running.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed via dependencies)
- For iOS: Xcode (macOS only)
- For Android: Android Studio with emulator

## Installation Steps

### 1. Install Dependencies

From the project root directory:

```bash
npm install
```

This will install dependencies for all packages in the monorepo.

### 2. Navigate to Mobile App

```bash
cd apps/mobile
```

### 3. Start the Development Server

```bash
npm start
```

Or use the Expo CLI directly:

```bash
expx expo start
```

### 4. Choose Your Platform

Once the development server starts, you'll see options:

- Press **`a`** to open on Android emulator/device
- Press **`i`** to open on iOS simulator (macOS only)
- Press **`w`** to open in web browser

## Testing Different Brands

### Method 1: Environment Variable (Recommended)

Set the brand before starting:

```bash
EXPO_PUBLIC_BRAND_ID=brandA npm start
# or
EXPO_PUBLIC_BRAND_ID=brandB npm start
```

### Method 2: Edit App.tsx

Edit `/apps/mobile/src/App.tsx`:

```typescript
const brandId = 'brandB'; // Change from 'brandA' to 'brandB'
```

## Customizing Component Availability

### Disable Components for a Brand

Edit `/packages/design-system/src/config/config.json`:

```json
{
  "components": {
    "Card": {
      "brandOptIn": {
        "brandA": true,
        "brandB": false  // Disable Card for brandB
      }
    }
  }
}
```

After editing, restart the development server to see changes.

## Navigation Structure

The app includes three screens accessible via bottom tabs:

1. **Home** - Welcome screen with basic components
2. **Components** - Showcase of all available UI components
3. **Profile** - Realistic user profile page

## Troubleshooting

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Metro Bundler Issues

```bash
# Clear Metro cache
expx expo start --clear
```

### TypeScript Errors

Ensure all packages are built:

```bash
# From project root
npm install
```

### Navigation Not Working

Ensure React Navigation dependencies are installed:

```bash
cd apps/mobile
npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

## Project Structure

```
arch/
├── apps/
│   └── mobile/                 # React Native app
│       ├── src/
│       │   ├── screens/         # Screen components
│       │   ├── navigation/      # Navigation setup
│       │   └── App.tsx          # Root component
│       └── package.json
└── packages/
    └── design-system/       # Shared UI components
        ├── src/
        │   ├── atoms/           # Atomic components
        │   ├── theme/           # Theme system
        │   ├── themes/          # Brand themes
        │   └── config/          # Component config
        └── package.json
```

## Next Steps

1. Explore the **Components** tab to see all available components
2. Check the **Profile** tab for a realistic usage example
3. Try switching between brandA and brandB to see theming differences
4. Experiment with disabling components in `config.json`
5. Create your own brand theme in `/packages/design-system/src/themes/`

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Component Configuration System](../packages/design-system/src/config/README.md)
- [Component Showcase Details](./COMPONENT_SHOWCASE.md)
