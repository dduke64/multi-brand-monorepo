import React from 'react';
import { Box } from '../atoms/Box';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';
import { Input } from '../atoms/Input';
import { Switch } from '../atoms/Switch';
import { Badge } from '../atoms/Badge';
import { Avatar } from '../atoms/Avatar';
import { Divider } from '../atoms/Divider';
import componentConfig from './config.json';

export type ComponentName = keyof typeof componentConfig.components;

export interface BrandComponentConfig {
  enabledComponents: ComponentName[];
}

/**
 * Get enabled components for a specific brand
 */
export const getEnabledComponents = (brandId: string): ComponentName[] => {
  const enabled: ComponentName[] = [];
  
  Object.entries(componentConfig.components).forEach(([componentName, config]) => {
    if (config.brandOptIn[brandId as keyof typeof config.brandOptIn]) {
      enabled.push(componentName as ComponentName);
    }
  });
  
  return enabled;
};

/**
 * Check if a component is enabled for a specific brand
 */
export const isComponentEnabled = (componentName: ComponentName, brandId: string): boolean => {
  const config = componentConfig.components[componentName];
  return config?.brandOptIn[brandId as keyof typeof config.brandOptIn] ?? false;
};

/**
 * Component registry mapping component names to their implementations
 */
export const componentRegistry = {
  Box,
  Text,
  Button,
  Card,
  Input,
  Switch,
  Badge,
  Avatar,
  Divider,
};

/**
 * Get a component from the registry if it's enabled for the brand
 */
export const getComponent = (componentName: ComponentName, brandId: string) => {
  if (!isComponentEnabled(componentName, brandId)) {
    return null;
  }
  return componentRegistry[componentName];
};