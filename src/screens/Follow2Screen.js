import React, {useState,Component} from 'react';
import { View, StyleSheet, Button  } from 'react-native';



const Follow2Screen = ({navigation}) =>
{

	const follow1 = navigation.getParam('follow1')
	const following1 = navigation.getParam("following1");
	const doFollow1 = navigation.getParam("doFollow1");

	//const [forceUpdate, setforceUpdate] = useState(null)


	return (
  <View style={styles.containerView}>
   {follow1.map((item, index) => (
    <View>
     <Button
      key={(Math.random() * 999).toString}
      title={`${item}`}
      onPress={() => {
		  doFollow1(index);
		  //setforceUpdate({});
		  //navigation.goBack();
      }}
     />
    </View>
   ))}
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

export default Follow2Screen;