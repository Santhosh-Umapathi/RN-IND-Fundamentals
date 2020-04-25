import React, {useState} from 'react';
import { View, StyleSheet, Button  } from 'react-native';

const BackgroundChanger = ({navigation}) =>
{

	const [rgb, setrgb] = useState(null)

	const bgChanger = () => {
		return setrgb(
			`rgb(
				${Math.floor(Math.random() * 255)}, 
				${Math.floor(Math.random() * 255)},
				${Math.floor(Math.random() * 255)}
				)`
  			);
	}	


	return (
		<View style={[styles.containerView, {backgroundColor:rgb}]}>
			<Button
				title='change'
				onPress={()=> bgChanger()}
			/>
		</View>
		);
};

const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default BackgroundChanger;