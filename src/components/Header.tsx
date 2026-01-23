import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  name: string;
  bio: string;
  profileImages: {
    light: ImageSourcePropType,
    dark: ImageSourcePropType;
  }
}

const Header: React.FC<HeaderProps> = ({ name, bio, profileImages }) => {
  const { colors, isDarkMode } = useTheme();

  const imageSource = isDarkMode
    ? profileImages?.dark
    : profileImages?.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Image
        source={imageSource}
        style={styles.profileImages}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.bio, { color: colors.textSecondary }]}>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  profileImages: {
    width: '80%',
    height: 400,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 30,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 7,
  },
  bio: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 5,
  },
});

export default Header;