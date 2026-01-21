import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ProjectsList from '../components/ProjectsList';
import ThemeToggle from '../components/ThemeToggle';
import { profileData, skills, projects, contactInfo } from '../data/portfolioData';

const PortfolioScreen: React.FC = () => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (you can replace this with actual data fetching)
    const loadData = async () => {
      try {
        // Simulate API call or data loading
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header
          name={profileData.name}
          bio={profileData.bio}
          profileImage={profileData.profileImage}
        />
        
        <SkillsSection skills={skills} />
        
        <ContactSection contact={contactInfo} />
        
        <ProjectsList projects={projects} />
        
        <View style={styles.toggleContainer}>
          <ThemeToggle />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  toggleContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PortfolioScreen;