import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {Entypo} from '@expo/vector-icons'

var itemArray = new Array(9).fill("empty"); // New Array with 9 empty elements


const TicTacToeScreen = ({ navigation }) => {
	   

	const [isCross, setIsCross] = useState(false)
	const [winGame, setWinGame] = useState("")


	const drawItem = (itemNumber) =>
	{
		if (itemArray[itemNumber] === "empty")
		{
			itemArray[itemNumber] = isCross;
			setIsCross(!itemArray[itemNumber]);
		}
		chooseWinner();
 	};

	const chooseIcon = (itemNumber) => {
		if (itemArray[itemNumber] !== "empty")
		{
			return itemArray[itemNumber] ? "cross" : "circle";
		}
		return "pencil";
	};

	const chooseColor = (itemNumber) =>
	{
		if (itemArray[itemNumber] !== "empty")
		{
			return itemArray[itemNumber] ? "red" : "green";
		}
		return "lightblue";
	};

	resetGame = () =>
	{
		itemArray.fill("empty");
		setWinGame("");
	};


	const chooseWinner = () => {
  if (
   itemArray[0] !== "empty" &&
   itemArray[0] == itemArray[1] &&
   itemArray[1] == itemArray[2]
  ) {
   setWinGame((itemArray[0] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[3] !== "empty" &&
   itemArray[3] == itemArray[4] &&
   itemArray[4] == itemArray[5]
  ) {
   setWinGame((itemArray[3] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[6] !== "empty" &&
   itemArray[6] == itemArray[7] &&
   itemArray[7] == itemArray[8]
  ) {
    setWinGame((itemArray[6] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[0] !== "empty" &&
   itemArray[0] == itemArray[3] &&
   itemArray[3] == itemArray[6]
  ) {
    setWinGame((itemArray[0] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[1] !== "empty" &&
   itemArray[1] == itemArray[4] &&
   itemArray[4] == itemArray[7]
  ) {
    setWinGame((itemArray[1] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[2] !== "empty" &&
   itemArray[2] == itemArray[5] &&
   itemArray[5] == itemArray[8]
  ) {
    setWinGame((itemArray[2] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[0] !== "empty" &&
   itemArray[0] == itemArray[4] &&
   itemArray[4] == itemArray[8]
  ) {
    setWinGame((itemArray[0] ? "Cross" : "Circle").concat(" Wins"));
  } else if (
   itemArray[2] !== "empty" &&
   itemArray[2] == itemArray[4] &&
   itemArray[4] == itemArray[6]
  ) {
    setWinGame((itemArray[2] ? "Cross" : "Circle").concat(" Wins"));
  }
 };



      return (
        <View style={styles.container}>
          <Text style={{fontSize: 50, margin: 30}}>Tic Tac Toe</Text>
          <View style={styles.grid}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(0)}}
                >
                  <Entypo
                    name={chooseIcon(0)}
                    size={50}
                    color={chooseColor(0)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(1);}}
                >
                  <Entypo
                    name={chooseIcon(1)}
                    size={50}
                    color={chooseColor(1)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(2);}}
                >
                  <Entypo
                    name={chooseIcon(2)}
                    size={50}
                    color={chooseColor(2)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(3);}}
                >
                  <Entypo
                    name={chooseIcon(3)}
                    size={50}
                    color={chooseColor(3)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => {drawItem(4)}}
                >
                  <Entypo
                    name={chooseIcon(4)}
                    size={50}
                    color={chooseColor(4)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(5);}}
                >
                  <Entypo
                    name={chooseIcon(5)}
                    size={50}
                    color={chooseColor(5)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(6);}}
                >
                  <Entypo
                    name={chooseIcon(6)}
                    size={50}
                    color={chooseColor(6)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(7);}}
                >
                  <Entypo
                    name={chooseIcon(7)}
                    size={50}
                    color={chooseColor(7)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {drawItem(8);}}
                >
                  <Entypo
                    name={chooseIcon(8)}
                    size={50}
                    color={chooseColor(8)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.winstyle}>{winGame}</Text>
          <Button
            title='reset'
            onPress={() => {resetGame()}}
          />
        </View>
      );
    
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    grid:
    {

    },
    row:
    {
      flexDirection:'row'
    },
    item:
    {
      borderWidth: 0.5,
      borderColor: 'lightblue',
      borderRadius: 5,
      padding: 30

    },
    winstyle:
    {
      fontSize: 25,
      margin: 30
    },
  });

export default TicTacToeScreen;