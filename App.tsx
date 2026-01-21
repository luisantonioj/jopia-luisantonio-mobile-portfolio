import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import PortfolioScreen from './src/screens/PortfolioScreen';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <PortfolioScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});