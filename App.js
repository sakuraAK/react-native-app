import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

let currentScreen = null;

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setGameOver] = useState(false);
  

  function numberSelectedHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  function onGameOverHandler() {
      setGameOver(true);
  }

  function onResetHandler() {
    setUserNumber(null);
  }

  currentScreen = <StartGameScreen onNumberSelected={numberSelectedHandler}/>;


  if (userNumber) {
    currentScreen = <GameScreen selectedNumber={userNumber} onGameOver={onGameOverHandler}/>;
  }

  if (userNumber && isGameOver) {
    currentScreen = <GameOverScreen onReset={onResetHandler}/>;
  }
  
  return (
    <LinearGradient style={styles.rootComponent} colors={["#FBF4DE", "#FABF06"]}>
      <ImageBackground
      source={require("./assets/images/background.jpg")}
      resizeMode='cover'
      style={styles.rootComponent}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootComponent}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootComponent: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

// export default function App() {

//   const [goalText, setGoalText] = useState({});
//   const [listOfGoals, updateListOfGoals] = useState([]);

//   function onChangeTextEventHandler(inputText) {
//     setGoalText({key: Math.random().toString(), value: inputText});
//     console.log(inputText);
//   }

//   function onPressEventHandler() {
//       updateListOfGoals(goals => [...goals, goalText]);
//       console.log(listOfGoals);
//   }

//   return (
//       <View style={styles.container}>
//         <StatusBar hidden></StatusBar>
//         <View style={styles.inputContainer}>
//           <TextInput onChangeText={onChangeTextEventHandler} style={styles.inputText} placeholder='Add your goal...'/>
//           <View style={styles.inputButtonContainer}>
//             <Button onPress={onPressEventHandler} title='Add'/>
//           </View>
          
//         </View>
//         <ScrollView style={{padding: 5}}>
//           { listOfGoals.map(goalItem => (<View style={styles.goalItemContainer}><Text style={styles.goalText} key={goalItem.key}>{goalItem.value}</Text></View>)) }
         
//         </ScrollView>
//       </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   inputContainer: {
//     flexDirection: "row",
//     padding: 10
//   },
//   inputText: {
//     flex: 6,
//     borderWidth: 1,
//     borderColor: "#cccccc"
//   },
//   inputButtonContainer: {
//     flex: 1,
//     marginLeft: 3,
//     backgroundColor: "red"
//   },
//   goalItemContainer: {
//     backgroundColor: "#2FDDF5",
//     margin: 2,
//     borderRadius: 6,
//     width: "60%",
//     padding: 3,
//   },
//   goalText: {
//     color: "white",
//     textAlignVertical: "center",
//     padding: 4,
//   }
// });


