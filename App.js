import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalText from './components/GoalText';


export default function App() {

  const [goalText, setGoalText] = useState("");
  const [listOfGoals, updateListOfGoals] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);

  function onChangeTextEventHandler(inputText) {
    setGoalText(inputText);
  }

  function onPressEventHandler() {
      updateListOfGoals(goals => [...goals, { id: Math.random().toString(), text: goalText }]);
      setInputVisible(false);
  }

  function onPressGoalEventHandler(id) {
    console.log(id);
    updateListOfGoals(goals => goals.filter(item => item.id !== id));
  }

  function onPressCancelEventHandler() {
    setInputVisible(false);
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require("./assets/images/goal.png")}/>
        </View>
      
        <Button title='Add goal' onPress={() => setInputVisible(true)} />
        <GoalInput
          onChangeTextEventHandler={onChangeTextEventHandler}
          onPressEventHandler={onPressEventHandler}
          visible={inputVisible}
          onPressCancelEventHandler={onPressCancelEventHandler}
        />
        <FlatList
          data={listOfGoals}
          renderItem={({ item, index }) => (
            <GoalText item={item} onPressEventHandler={onPressGoalEventHandler} />
          )}
          keyExtractor={item => item.id}
        />
        
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: "#7831E0",
  },
  image: {
    width: 100,
    height: 100,
  }
});


