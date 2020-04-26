import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Camera, Permissions } from "expo-camera";
import {FontAwesome} from '@expo/vector-icons'

const PhotoClickerScreen = ({navigation}) =>
{
 const [isPermissionGranted, setisPermissionGranted] = useState(null);
 const [cameraType, setcameraType] = useState(Camera.Constants.Type.back);
 const [isFlashOn, setisFlashOn] = useState(Camera.Constants.FlashMode.off);

 useEffect(() => {
	 askPermission();
 }, []);
	
	
	const askPermission = async () => {
		const {status} = await Camera.requestPermissionsAsync();
		setisPermissionGranted(status === "granted");
	};

 //flip the camera
 const flipCamera = () => {
  setcameraType(
   cameraType === Camera.Constants.Type.back
    ? Camera.Constants.Type.front
    : Camera.Constants.Type.back
  );
 };

 //Toggle flash light
 const flashLight = () => {
 setisFlashOn(
  isFlashOn === Camera.Constants.FlashMode.off
   ? Camera.Constants.FlashMode.on
   : Camera.Constants.FlashMode.off
 );

 };

 //take picture and send that to home screen
 const takePicture = async () => {
  if (camera) {
   let photo = await camera.takePictureAsync();
   navigation.navigate("Photo", { photo: photo });
  }
 };

 if (isPermissionGranted === null) {
  return <Text> Need Camera Permissions</Text>;
 }
 else if(isPermissionGranted === false) {
	return <Text> Give Camera Permissions</Text>;
	}
 
 else {
  return (
   <View style={styles.container}>
    <Camera
     style={styles.cameraView}
     type={cameraType}
     flashMode={isFlashOn}
     ref={(ref) => {camera = ref;}}
    >
     <View style={styles.actionContainer}>
      <TouchableOpacity
       onPress={() => flipCamera()}
       style={styles.iconHolder}
      >
       <FontAwesome name="camera" size={35} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => takePicture()}
       style={styles.iconHolder}
      >
       <FontAwesome name="circle" size={35} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => flashLight()}
       style={styles.iconHolder}
      >
       <FontAwesome name="flash" size={35} style={styles.icon} />
      </TouchableOpacity>
     </View>
    </Camera>
   </View>
  );
 }
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 cameraView: {
  flex: 1,
 },
 actionContainer: {
  flex: 1,
  flexDirection: "row",
  backgroundColor: "transparent",
 },
 iconHolder: {
  flex: 1,
  alignItems: "center",
  alignSelf: "flex-end",
  marginBottom: 30,
 },
 icon: {
  marginBottom: 10,
  color: "#fff",
 },
});

export default PhotoClickerScreen;