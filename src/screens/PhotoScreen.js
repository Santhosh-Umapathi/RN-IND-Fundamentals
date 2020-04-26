import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image  } from 'react-native';

const PhotoScreen = ({navigation}) =>
{

	const photo = navigation.getParam('photo', 'empty')

	return (
		<View style={styles.containerView}>

			<Image
				resizeMode='center'
				source={photo === 'empty' ? require('../../assets/splash.png') : photo}
				style={{height: 300, width: 300}}
			/>

			<Button
				title='click photo'
				onPress = {()=>navigation.navigate('PhotoClick')}
			/>


			<Text style={styles.text}>PhotoScreen</Text>
		</View>
		);
};

const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: 
	{
		fontSize: 30,
	},
});

export default PhotoScreen;