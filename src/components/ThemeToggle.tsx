import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
// import { Feather } from '@expo/vector-icons';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { 
        backgroundColor: colors.primary,
        shadowColor: colors.text 
      }]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      {/* <View style={styles.content}>
        <Feather
          name={isDarkMode ? 'sun' : 'moon'}
          size={18}
          color="#FFFFFF"
        /> */}
        <Text style={styles.buttonText}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
    content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default ThemeToggle;