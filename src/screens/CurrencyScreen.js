import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';


const currencyConverted = {
	DOLLAR: 0.15,
	POUND: 0.01,
	EURO: 0.10
}

const CurrencyScreen = ({navigation}) =>
{

	const [value, setvalue] = useState(null)
	const [enteredNum, setenteredNum] = useState(null)


	const calculate = (currency) => {
		if (value === "") {
			alert("Enter some Currency");
		}
		setenteredNum(parseFloat(value * currencyConverted[currency]))
		
 	};


	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>CurrencyScreen</Text>
			
			<TextInput
				value={value}
				onChangeText={(text) => setvalue(text)}
				style={{ width: 200, borderColor: 'black', borderWidth:1}}
			/>

			<Text>{enteredNum}</Text>

			<Button title="Dollar" onPress={() => calculate("DOLLAR")} />
			<Button title="Pound" onPress={() => calculate("POUND")} />
			<Button title="Pound" onPress={() => calculate("EURO")} />
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

export default CurrencyScreen;