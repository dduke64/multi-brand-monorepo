# Component Configuration System

This directory contains the component opt-in/opt-out configuration system that allows each brand to selectively enable or disable components.

## Overview

The configuration system provides:
- **Brand-specific component control**: Each brand can opt into or out of individual components
- **Automatic theming**: All enabled components automatically use the brand's theme
- **Runtime validation**: Components check if they're enabled before rendering

## Files

### `config.json`
Defines which components are available for each brand:

```json
{
  "components": {
    "Card": {
      "description": "Container component with elevation",
      "brandOptIn": {
        "brandA": true,
        "brandB": true
      }
    }
  }
}
```

### `ComponentRegistry.tsx`
Provides utility functions to check component availability:

- `getEnabledComponents(brandId)`: Returns array of enabled component names for a brand
- `isComponentEnabled(componentName, brandId)`: Checks if a specific component is enabled
- `getComponent(componentName, brandId)`: Returns component if enabled, null otherwise

## Usage

### In Screen Components

```typescript
import { isComponentEnabled } from '@dib/design-system';

const MyScreen = ({ brandId }) => {
  return (
    <>
      {isComponentEnabled('Card', brandId) && (
        <Card>
          <Text>This card only renders if enabled for the brand</Text>
        </Card>
      )}
    </>
  );
};
```

### Enabling/Disabling Components

To disable a component for a specific brand, edit `config.json`:

```json
"Card": {
  "brandOptIn": {
    "brandA": true,
    "brandB": false  // Card disabled for brandB
  }
}
```

## Adding New Components

1. Create the component in `/packages/design-system/src/atoms/`
2. Export it from `/packages/design-system/src/index.ts`
3. Add it to `config.json` with brand opt-in settings
4. Add it to the `componentRegistry` object in `ComponentRegistry.tsx`

## Adding New Brands

1. Create theme file in `/packages/design-system/src/themes/{brandName}/theme.ts`
2. Add brand opt-in settings for all components in `config.json`
3. Update TypeScript types if needed

## Benefits

- **Flexibility**: Brands can customize their component library
- **Consistency**: All components use brand theming automatically
- **Maintainability**: Single source of truth for component availability
- **Type Safety**: TypeScript ensures component names are valid
