import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';

const DemoScreen = ({navigation}) =>
{

	const [text, setText] = useState('')

	return (
		<View style={styles.containerView}>
			<TextInput
				style={{ borderColor: 'black', height: 30, width: 200, borderBottomWidth: 1 }}
				
				onChangeText={text => setText(text
					.split(',') //creates a new array after ,
					.map(text => text && 'John') //map through all elements in array and replaces element with john
					.join('0') //adds 0 at the end of array
				
				)}
				
			/>
			<Text>{text}</Text>
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

export default DemoScreen;