import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Box,
  Text,
  Button,
  Card,
  Input,
  Switch,
  Avatar,
  Divider,
  isComponentEnabled,
  ComponentName,
} from '@dib/design-system';
import { useTheme } from '@dib/design-system';

interface ProfileScreenProps {
  brandId: string;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ brandId }) => {
  const theme = useTheme();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Helper to check if component is enabled for current brand
  const isEnabled = (componentName: ComponentName) => 
    isComponentEnabled(componentName, brandId);

  const handleSave = () => {
    console.log('Profile saved:', { name, email, notifications, darkMode });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Profile Header */}
      <Box style={styles.header}>
        {isEnabled('Avatar') && (
          <Avatar initials="JD" size="large" />
        )}
        <Text variant="heading" style={styles.headerTitle}>
          My Profile
        </Text>
        <Text variant="body" style={styles.headerSubtitle}>
          Manage your account settings
        </Text>
      </Box>

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Personal Information */}
      {isEnabled('Card') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Personal Information
          </Text>
          <Card>
            {isEnabled('Input') && (
              <>
                <Input
                  label="Full Name"
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  containerStyle={styles.inputContainer}
                />
                <Input
                  label="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  containerStyle={styles.inputContainer}
                />
              </>
            )}
          </Card>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Preferences */}
      {isEnabled('Card') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Preferences
          </Text>
          <Card>
            {isEnabled('Switch') && (
              <>
                <Switch
                  label="Push Notifications"
                  value={notifications}
                  onValueChange={setNotifications}
                />
                <View style={styles.switchSpacing} />
                <Switch
                  label="Dark Mode"
                  value={darkMode}
                  onValueChange={setDarkMode}
                />
              </>
            )}
          </Card>
        </Box>
      )}

      {isEnabled('Divider') && <Divider style={styles.divider} />}

      {/* Account Stats */}
      {isEnabled('Card') && (
        <Box style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>
            Account Statistics
          </Text>
          <Card>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text variant="heading">24</Text>
                <Text variant="caption" style={styles.statLabel}>
                  Projects
                </Text>
              </View>
              {isEnabled('Divider') && (
                <Divider orientation="vertical" style={styles.verticalDivider} />
              )}
              <View style={styles.statItem}>
                <Text variant="heading">156</Text>
                <Text variant="caption" style={styles.statLabel}>
                  Tasks
                </Text>
              </View>
              {isEnabled('Divider') && (
                <Divider orientation="vertical" style={styles.verticalDivider} />
              )}
              <View style={styles.statItem}>
                <Text variant="heading">89%</Text>
                <Text variant="caption" style={styles.statLabel}>
                  Complete
                </Text>
              </View>
            </View>
          </Card>
        </Box>
      )}

      {/* Action Buttons */}
      {isEnabled('Button') && (
        <Box style={styles.section}>
          <Button title="Save Changes" onPress={handleSave} />
          <Button
            title="Sign Out"
            onPress={() => console.log('Sign out')}
            style={styles.signOutButton}
          />
        </Box>
      )}

      <Box style={styles.footer} />
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
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 16,
  },
  headerSubtitle: {
    marginTop: 4,
    opacity: 0.7,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  divider: {
    marginVertical: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
  switchSpacing: {
    height: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    marginTop: 4,
    opacity: 0.7,
  },
  verticalDivider: {
    height: 40,
  },
  signOutButton: {
    marginTop: 12,
    opacity: 0.7,
  },
  footer: {
    height: 40,
  },
});