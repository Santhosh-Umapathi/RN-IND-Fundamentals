import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { Audio } from 'expo-av';

const SoundScreen = ({navigation}) =>
{

	const soundFile = {
		one: require('../../assets/SoundAssets/one.wav')
	}

	const playSound = async(number) => {
		const soundObject = new Audio.Sound();
		try {
			let path = soundFile[number];

			await soundObject.loadAsync(path);
			await soundObject.playAsync()
			.then(async playbackStatus => setTimeout(()=>{soundObject.unloadAsync()}, playbackStatus.playableDurationMillis))
			.catch(err => console.log(err))


		} catch (error) {
			console.log(error)
		}
	};

	return (
		<View style={styles.containerView}>
			<Button
				title='play One'
				onPress={()=>playSound('one')}
			/>
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

export default SoundScreen;