import React, {useState} from 'react';
import { View, Image, StyleSheet, Button  } from 'react-native';

const DiceScreen = ({navigation}) =>
{

	const [dice, setdice] = useState(require(`../../assets/DiceAssets/dice1.png`));


	const randomNum = () => {
		
		let rn = Math.floor(Math.random() * 5 + 1);
		switch (rn) {
			case 1:
			return setdice(require(`../../assets/DiceAssets/dice1.png`));
			case 2:
			return setdice(require(`../../assets/DiceAssets/dice2.png`));
			case 3:
			return setdice(require(`../../assets/DiceAssets/dice3.png`));
			case 4:
			return setdice(require(`../../assets/DiceAssets/dice4.png`));
			case 5:
			return setdice(require(`../../assets/DiceAssets/dice5.png`));
			case 6:
			return setdice(require(`../../assets/DiceAssets/dice6.png`));
		}
	}


	return (
		<View style={styles.containerView}>
			<Image
				source={dice}
				style={{ height: 100, width: 100 }}
			/>
			<Button
				title='Roll'
				onPress={randomNum}
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

export default DiceScreen;