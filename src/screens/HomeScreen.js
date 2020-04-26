import React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';

const HomeScreen = ({navigation}) =>
{


	return (
  <View style={styles.containerView}>
   <Text style={styles.text}>RN-IND-Fundamentals</Text>

   <Button title="Demo" onPress={() => navigation.navigate("Demo")} />
   <Button
    title="Background Changer"
    onPress={() => navigation.navigate("BGChanger")}
   />

   <Button title="Dice Screen" onPress={() => navigation.navigate("Dice")} />

   <Button
    title="Currency Screen"
    onPress={() => navigation.navigate("Currency")}
   />

   <Button
    title="TicTacToe Screen"
    onPress={() => navigation.navigate("TicTacToe")}
   />

   <Button title="Sound Screen" onPress={() => navigation.navigate("Sound")} />

   <Button
    title="Follow Screen"
    onPress={() => navigation.navigate("Follow")}
   />
   <Button
    title="Photo Screen"
    onPress={() => navigation.navigate("Photo")}
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

export default HomeScreen;