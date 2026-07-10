import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@dib/design-system';
import { Navigation } from './navigation/Navigation';

export default function App() {
  // Brand selection logic would go here
  // For MVP, we'll use a default brand
  const brandId = process.env.EXPO_PUBLIC_BRAND_ID || 'brandB';

  return (
    <ThemeProvider brandId={brandId}>
      <Navigation brandId={brandId} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
