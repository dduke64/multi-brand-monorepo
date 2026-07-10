# DIB Multi-Brand Monorepo

A React Native monorepo setup for creating multi-brand applications that share the same codebase but have different designs per brand.

## Structure

```
monorepo-root/
├── apps/
│   └── mobile/              # Main React Native app
│       ├── src/
│       │   ├── App.tsx      # Main app component
│       │   └── screens/     # App screens
│       └── package.json
│
├── packages/
│   ├── design-system/       # UI components + brand themes
│   │   ├── src/
│   │   │   ├── atoms/       # Basic components (Box, Text, Button)
│   │   │   ├── theme/       # Theme provider and types
│   │   │   └── themes/      # Brand-specific themes
│   │   │       ├── brandA/
│   │   │       └── brandB/
│   │   └── package.json
│   │
│   └── common/
│       └── core/            # Core shared functionality
│           └── package.json
│
└── package.json             # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

```bash
npm install
```

### Running the App

```bash
# Start the development server
npm run mobile:start

# Run on Android
npm run mobile:android

# Run on iOS
npm run mobile:ios
```

### Brand Configuration

The app uses environment variables to determine which brand theme to load. Set `EXPO_PUBLIC_BRAND_ID` to switch brands:

- `brandA` - Default blue theme
- `brandB` - Green theme

## Adding New Brands

1. Create a new theme file in `packages/design-system/src/themes/brandC/theme.ts`
2. Define the brand's colors and typography
3. Register the theme in `packages/design-system/src/theme/ThemeProvider.tsx`
4. Update the app configuration to use the new brand ID

## Workspace Commands

- `npm run mobile` - Access mobile app workspace
- `npm run mobile:start` - Start Expo development server
- `npm run mobile:android` - Run on Android device/emulator
- `npm run mobile:ios` - Run on iOS device/simulator

## Architecture

This monorepo follows the structure outlined in the example-tree with a minimal MVP implementation:

- **Shared Design System**: Atomic design components with brand theming
- **Theme Provider**: Dynamic theme switching based on brand ID
- **Workspace Organization**: npm workspaces for package management
- **Scalability**: Easy to add new brands, features, and shared packages

## Next Steps

- Add navigation package
- Implement shared features (auth, profile, etc.)
- Add brand-specific features
- Set up CI/CD pipelines
- Add testing infrastructure
