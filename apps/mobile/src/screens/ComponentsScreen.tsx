import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Box,
  Text,
  Button,
  Card,
  Input,
  Switch,
  Badge,
  Avatar,
  Divider,
  isComponentEnabled,
  ComponentName,
} from '@dib/design-system';
import { useTheme } from '@dib/design-system';

interface ComponentsScreenProps {
  brandId: string;
}

export const ComponentsScreen: React.FC<ComponentsScreenProps> = ({ brandId }) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);

  // Helper to check if component is enabled for current brand
  const isEnabled = (componentName: ComponentName) => 
    isComponentEnabled(componentName, brandId);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Box style={styles.header}>
        <Text variant="heading" style={styles.title}>
          Components Showcase
        </Text>
        <Badge label={brandId.toUpperCase()} variant="primary" />
      </Box>

      {/* Card Component */}
      {isEnabled('Card') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Card Component
          </Text>
          <Card elevation="medium">
            <Text variant="body">This is a card with medium elevation</Text>
          </Card>
          <Card elevation="high" style={styles.cardSpacing}>
            <Text variant="body">This is a card with high elevation</Text>
          </Card>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Input Component */}
      {isEnabled('Input') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Input Component
          </Text>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="email-address"
            containerStyle={styles.inputContainer}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            error="Password must be at least 8 characters"
            containerStyle={styles.inputContainer}
          />
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Switch Component */}
      {isEnabled('Switch') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Switch Component
          </Text>
          <Card>
            <Switch
              label="Enable Notifications"
              value={switchValue}
              onValueChange={setSwitchValue}
            />
          </Card>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Badge Component */}
      {isEnabled('Badge') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Badge Component
          </Text>
          <View style={styles.badgeContainer}>
            <Badge label="Primary" variant="primary" style={styles.badge} />
            <Badge label="Success" variant="success" style={styles.badge} />
            <Badge label="Warning" variant="warning" style={styles.badge} />
            <Badge label="Error" variant="error" style={styles.badge} />
          </View>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Avatar Component */}
      {isEnabled('Avatar') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Avatar Component
          </Text>
          <View style={styles.avatarContainer}>
            <Avatar initials="JD" size="small" style={styles.avatar} />
            <Avatar initials="AB" size="medium" style={styles.avatar} />
            <Avatar initials="XY" size="large" style={styles.avatar} />
          </View>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Button Component */}
      {isEnabled('Button') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Button Component
          </Text>
          <Button
            title="Primary Action"
            onPress={() => console.log('Button pressed')}
          />
        </Box>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardSpacing: {
    marginTop: 12,
  },
  divider: {
    marginVertical: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    marginRight: 8,
    marginBottom: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    marginRight: 8,
  },
});