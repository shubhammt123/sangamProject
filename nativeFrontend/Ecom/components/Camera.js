import React, { useRef } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Camera = () => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraVisible , setCameraVisible] = useState(true);
    const [capturedImage , setCapturedImage] = useState(null);

    console.log(capturedImage);

    const cameraRef = useRef();
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }

    const handleCapture = async ()=>{
        try {
            let photo  = await cameraRef.current.takePictureAsync();
            setCapturedImage(photo);
            setCameraVisible(false);
        } catch (error) {
            console.log(error)
        }
    }
  
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    return (
      <View style={styles.container}>
        {cameraVisible ? 
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCapture}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </CameraView> : <View>
        <Image source={{uri : capturedImage.uri}} sty655le={{width : 300 , height : 500}} />
      </View>
    }
        
      </View>
    );
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });