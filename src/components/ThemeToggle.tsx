import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

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
        <Text style={styles.buttonText}>
          {isDarkMode ? '☀️' : '🌙'}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 13,
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
    fontSize: 13,
    fontWeight: '600',
  },
    content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default ThemeToggle;