import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Screens
import HomeScreen from '../screens/HomeScreen';
import DemoScreen from "../screens/DemoScreen";
import BackgroundChanger from "../screens/BackgroundChanger";
import DiceScreen from "../screens/DiceScreen";
import CurrencyScreen from "../screens/CurrencyScreen";
import TicTacToeScreen from "../screens/TicTacToeScreen";
import SoundScreen from "../screens/SoundScreen";
import FollowScreen from "../screens/FollowScreen";
import Follow2Screen from "../screens/Follow2Screen";


const MainNavigator = createStackNavigator(
 {
  Home: HomeScreen,
  Demo: DemoScreen,
  BGChanger: BackgroundChanger,
  Dice: DiceScreen,
  Currency: CurrencyScreen,
  TicTacToe: TicTacToeScreen,
  Sound: SoundScreen,
  Follow: FollowScreen,
  Follow2: Follow2Screen,
 },
 {
  initialRouteName: "Home",
  defaultNavigationOptions: {
   title: "Home",
   headerTintColor: "white", //Header button colors
   headerStyle: {
    backgroundColor: "lightblue", // header bg color
   },
   headerTitleStyle: {
    color: "black", // header font color
   },
  },
 }
);

export default createAppContainer(MainNavigator);