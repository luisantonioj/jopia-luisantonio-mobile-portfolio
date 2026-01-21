import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import PortfolioScreen from './src/screens/PortfolioScreen';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <PortfolioScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});