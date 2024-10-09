import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

export default function CaptureScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // Fix: boolean or null type
  const [cameraReady, setCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // Captured image URI can be string or null
  const cameraRef = useRef(null);

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Correct permission request
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri); // Save the captured image
    }
  };

  if (hasPermission === null) {
    return <View />; // Show nothing if permission hasn't been granted yet
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>; // Show message if permission is denied
  }

  return (
    <View style={styles.container}>
      {!capturedImage ? (
        <>
          {/* Camera Preview */}
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={cameraRef}
            onCameraReady={() => setCameraReady(true)}
          >
            {/* Circle Button in the middle */}
            <View style={styles.cameraCircle}>
              <TouchableOpacity onPress={takePicture}>
                <MaterialIcons name="camera" size={50} color="#fff" />
              </TouchableOpacity>
            </View>
          </Camera>
        </>
      ) : (
        <View style={styles.imagePreviewContainer}>
          {/* Display captured image */}
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />

          {/* Retake photo button */}
          <TouchableOpacity
            style={styles.retakeButton}
            onPress={() => setCapturedImage(null)}
          >
            <Text style={styles.retakeText}>Retake Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: viewportWidth * 0.9,
    height: viewportWidth * 0.9,
    borderRadius: viewportWidth * 0.45,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capturedImage: {
    width: viewportWidth * 0.8,
    height: viewportWidth * 0.8,
    borderRadius: 20,
  },
  retakeButton: {
    marginTop: 20,
    backgroundColor: '#FF69B4',
    padding: 15,
    borderRadius: 8,
  },
  retakeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
