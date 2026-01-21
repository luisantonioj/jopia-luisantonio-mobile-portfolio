import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Contact } from '../types';

interface ContactSectionProps {
  contact: Contact;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const { colors } = useTheme();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>Contact</Text>
      
      <TouchableOpacity 
        style={styles.contactItem}
        onPress={() => handlePress(`mailto:${contact.email}`)}
      >
        <Text style={[styles.label, { color: colors.textSecondary }]}>Email:</Text>
        <Text style={[styles.value, { color: colors.primary }]}>{contact.email}</Text>
      </TouchableOpacity>

      {contact.github && (
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => handlePress(contact.github!)}
        >
          <Text style={[styles.label, { color: colors.textSecondary }]}>GitHub:</Text>
          <Text style={[styles.value, { color: colors.primary }]}>View Profile</Text>
        </TouchableOpacity>
      )}

      {contact.linkedin && (
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => handlePress(contact.linkedin!)}
        >
          <Text style={[styles.label, { color: colors.textSecondary }]}>LinkedIn:</Text>
          <Text style={[styles.value, { color: colors.primary }]}>View Profile</Text>
        </TouchableOpacity>
      )}

      {contact.twitter && (
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => handlePress(contact.twitter!)}
        >
          <Text style={[styles.label, { color: colors.textSecondary }]}>Twitter:</Text>
          <Text style={[styles.value, { color: colors.primary }]}>View Profile</Text>
        </TouchableOpacity>
      )}

      {contact.website && (
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => handlePress(contact.website!)}
        >
          <Text style={[styles.label, { color: colors.textSecondary }]}>Website:</Text>
          <Text style={[styles.value, { color: colors.primary }]}>Visit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ContactSection;