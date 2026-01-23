import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ProjectsList from '../components/ProjectsList';
import ThemeToggle from '../components/ThemeToggle';
import { profileData, skills, projects, contactInfo } from '../data/portfolioData';

const PortfolioScreen = () => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.floatingToggle}>
        <ThemeToggle />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header
          name={profileData.name}
          bio={profileData.bio}
          profileImages={profileData.profileImages}
        />

        <View style={styles.paddedContent}>
          <SkillsSection skills={skills} />
          
          <ContactSection contact={contactInfo} />
          
          <ProjectsList projects={projects} />
          
          <View style={styles.toggleContainer}>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingToggle: {
    position: 'absolute',
    top: 40,
    right: 16,
    zIndex: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  paddedContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  toggleContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PortfolioScreen;