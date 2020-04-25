import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Screens
import HomeScreen from '../screens/HomeScreen';
import DemoScreen from "../screens/DemoScreen";
import BackgroundChanger from "../screens/BackgroundChanger";

const MainNavigator = createStackNavigator(
{
	Home: HomeScreen,
		Demo: DemoScreen,
	BGChanger: BackgroundChanger,
},
{
	initialRouteName: 'Home',
	defaultNavigationOptions:
	{
		title: 'Home',
		headerTintColor: 'white', //Header button colors
		headerStyle:
		{
			backgroundColor: 'lightblue' // header bg color
		},
		headerTitleStyle: 
		{
			color: 'black' // header font color
		}
	}
});

export default createAppContainer(MainNavigator);