import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput(props) {
    return (
      <Modal animationType='slide' visible={props.visible}>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={props.onChangeTextEventHandler} style={styles.inputText} placeholder='Add your goal...' />
          <View style={styles.inputButtonContainer}>
            <View style={styles.button}>
              <Button onPress={props.onPressEventHandler} title='Add' />
            </View>
            <View style={styles.button}>
              <Button onPress={props.onPressCancelEventHandler} title='Cancel' />
            </View>

          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    
    inputContainer: {
      padding: 6,
      alignItems: "center",
    },
    inputText: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#cccccc",
      padding: 6,
    },
    inputButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
      //backgroundColor: "red"
    },
    button: {
      width: "30%",
      marginHorizontal: 3,
    }
  });