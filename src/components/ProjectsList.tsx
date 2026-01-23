import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types';
import { Video, ResizeMode } from 'expo-av';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const { colors } = useTheme();

  const handleProjectPress = (link?: string) => {
    if (link) {
      Linking.openURL(link).catch((err) => console.error('Error opening URL:', err));
    }
  };

  const renderProject = ({ item }: { item: Project }) => (
    <TouchableOpacity
      style={[styles.projectCard, { 
        backgroundColor: colors.card,
        borderColor: colors.border 
      }]}
      onPress={() => handleProjectPress(item.link)}
      activeOpacity={0.7}
    >
      {item.video && (
        <Video
          source={item.video}
          style={styles.projectVideo}
          resizeMode={ResizeMode.COVER}
          useNativeControls={false}
          isLooping
          shouldPlay
          isMuted
        />
      )}
      <Text style={[styles.projectTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Text style={[styles.projectDescription, { color: colors.textSecondary }]}>
        {item.description}
      </Text>
      <View style={styles.techContainer}>
        {item.technologies.map((tech, index) => (
          <View
            key={index}
            style={[styles.techBadge, { borderColor: colors.primary }]}
          >
            <Text style={[styles.techText, { color: colors.primary }]}>
              {tech}
            </Text>
          </View>
        ))}
      </View>
      {item.link && (
        <Text style={[styles.viewLink, { color: colors.primary }]}>
          View GitHub →
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Projects</Text>
      <FlatList
        data={projects}
        renderItem={renderProject}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  projectCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectVideo: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  techBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  techText: {
    fontSize: 12,
    fontWeight: '500',
  },
  viewLink: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default ProjectsList;