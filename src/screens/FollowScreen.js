import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';

const FollowScreen = ({navigation}) =>
{

	const [follow, setfollow] = useState(['john', 'danny', 'peter'])
	const [following, setfollowing] = useState(['santhosh'])

	


	const doFollow = (index) =>
	{
		const followNew = follow.splice(index, 1)
		//const followingNew = following;
		//setfollowing(followingNew.push(followNew));
		setfollowing([...following, followNew])

	};




	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>Followers - {following.length}</Text>

			<Button
				title='go to follow2'
				onPress={() =>
					navigation.navigate('Follow2', {follow1 : follow, following1: following, doFollow1: doFollow })}
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

export default FollowScreen;