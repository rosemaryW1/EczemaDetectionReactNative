import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/eczema_logo.png')}
      style={styles.background}
      resizeMode="cover" // Ensures the image covers the entire screen
      // blurRadius={1} 
    >
      {/* Pink overlay for consistent color */}
      <View style={styles.overlay}>
        {/* Content inside the overlay */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to Eczema Pro!</Text>
          <Text style={styles.subtitle}>
            Use this app to analyze skin conditions and detect eczema with ease.
          </Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Capture')}>
              <Text style={styles.buttonText}>Capture Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Results')}>
              <Text style={styles.buttonText}>View Results</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Make sure it covers the full screen
    width: viewportWidth, // Full width of the viewport
    height: viewportHeight, // Full height of the viewport
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 182, 193, 0.5)', // Light pink overlay with transparency
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 31,
    fontWeight: '900',
    color: '#FF1493', // White text to contrast with the pink overlay
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "700",
    color: '#FF1493',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '80%',
  },
  button: {
    backgroundColor: '#FF69B4', // Pink button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
