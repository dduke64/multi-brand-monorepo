import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { ComponentsScreen } from '../screens/ComponentsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { useTheme } from '@dib/design-system';

const Tab = createBottomTabNavigator();

interface NavigationProps {
  brandId: string;
}

export const Navigation: React.FC<NavigationProps> = ({ brandId }) => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.textSecondary,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
          }}
        >
          {() => <HomeScreen brandId={brandId} />}
        </Tab.Screen>
        <Tab.Screen
          name="Components"
          options={{
            tabBarLabel: 'Components',
          }}
        >
          {() => <ComponentsScreen brandId={brandId} />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Profile',
          }}
        >
          {() => <ProfileScreen brandId={brandId} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};