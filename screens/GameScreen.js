import { Text, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { useState } from "react";


function generateNextGuess(min, max) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

let currentMin = 1;
let currentMax = 100;

export default function GameScreen({selectedNumber, onGameOver}) {

    const initialGuess = generateNextGuess(currentMin, currentMax);

    if (initialGuess === selectedNumber) {
        onGameOver();
    }

    const [currentGuess, updateCurrentGuess] = useState(initialGuess);
    
    
    function onPressHandler(direction) {

        //test agains actual to see tha we are not cheating
        if ((direction === "lower" && currentGuess < selectedNumber) 
            || (direction === "greater" && currentGuess > selectedNumber)) {
                Alert.alert("Cheater alert",
                "You know this is not true!",
                [{text: "Ok", style: "destructive"}]);
                return;
            }


        if (direction === "lower") {
            currentMax = currentGuess - 1;
        }
        else {
            currentMin = currentGuess + 1;
        }
        const nextGuess = generateNextGuess(currentMin, currentMax);
        if (nextGuess === selectedNumber) {
            onGameOver();
        }
        updateCurrentGuess(nextGuess);

    }
   
    

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View><Text>{currentGuess}</Text></View>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={() => onPressHandler("lower")}>-</PrimaryButton></View>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={() => onPressHandler("greater")}>+</PrimaryButton></View>
                </View>
            </View>
            {/* Logg of tries */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 100,
        marginHorizontal: 24,

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});