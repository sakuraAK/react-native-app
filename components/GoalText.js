import { Text, StyleSheet, Pressable } from 'react-native';

export default function GoalText(props) {

    // function onPressEventHandlerWrapper() {
    //     props.onPressEventHandler(props.item.id);
    // }

    return (
        <Pressable android_ripple={{color: "#D63BA2"}} onPress={() => props.onPressEventHandler(props.item.id)}>
            <Text style={styles.goalText}>{`${props.item.text}`}</Text>
        </Pressable>
        
    );
}


const styles = StyleSheet.create({
    goalText: {
      flex: 1,
      backgroundColor: "#C698E3",
      color: "white",
      textAlignVertical: "center",
      padding: 4,
      borderRadius: 6,
      marginTop: 3,
    }, 
    pressed: {
        backgroundColor: "#E714EB",
    }
  });
  