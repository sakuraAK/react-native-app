import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [goalText, setGoalText] = useState({});
  const [listOfGoals, updateListOfGoals] = useState([]);

  function onChangeTextEventHandler(inputText) {
    setGoalText({key: Math.random().toString(), value: inputText});
    console.log(inputText);
  }

  function onPressEventHandler() {
      updateListOfGoals(goals => [...goals, goalText]);
      console.log(listOfGoals);
  }

  return (
      <View style={styles.container}>
        <StatusBar hidden></StatusBar>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={onChangeTextEventHandler} style={styles.inputText} placeholder='Add your goal...'/>
          <View style={styles.inputButtonContainer}>
            <Button onPress={onPressEventHandler} title='Add'/>
          </View>
          
        </View>
        <ScrollView style={{padding: 5}}>
          { listOfGoals.map(goalItem => (<View style={styles.goalItemContainer}><Text style={styles.goalText} key={goalItem.key}>{goalItem.value}</Text></View>)) }
         
        </ScrollView>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10
  },
  inputText: {
    flex: 6,
    borderWidth: 1,
    borderColor: "#cccccc"
  },
  inputButtonContainer: {
    flex: 1,
    marginLeft: 3,
    backgroundColor: "red"
  },
  goalItemContainer: {
    backgroundColor: "#2FDDF5",
    margin: 2,
    borderRadius: 6,
    width: "60%",
    padding: 3,
  },
  goalText: {
    color: "white",
    textAlignVertical: "center",
    padding: 4,
  }
});


