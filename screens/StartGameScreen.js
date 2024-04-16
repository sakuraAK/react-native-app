import { TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({onNumberSelected}) {

    const [enteredNumber, setEnteredNumber] = useState("");

    function numberConfirmedHandler() {
        //test value is a number between 1-99
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number",
            "Number has to be an integer bewteen 1-99",
            [{text: "Ok", style: "destructive", onPress: numberResetHandler}]);
            return;
        }

        onNumberSelected(chosenNumber);

    }

    function numberResetHandler() {
        setEnteredNumber("");
    }

    function numberChangedHandler(enteredText) {
        setEnteredNumber(enteredText);
    }



    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false} 
                value={enteredNumber}
                onChangeText={numberChangedHandler}   
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContain}>
                    <PrimaryButton onPress={numberResetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContain}>
                    <PrimaryButton onPress={numberConfirmedHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );

    
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        elevation: 10,
        alignItems: 'center',
        borderRadius: 8,

    },
    numberInput: {
        height: 50,
        width: 50,
        borderBottomColor: "#DDB52F",
        borderBottomWidth: 2,
        color: "#DDB52F",
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContain: {
        flex: 1,
    }
});
