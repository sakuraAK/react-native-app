import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({onReset}){
    return (
        <View style={styles.main}>
            <Text>Game Over!</Text>
            <View>
                <PrimaryButton onPress={() => onReset()}>Play Again</PrimaryButton>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        elevation: 10,
        alignItems: 'center',
        borderRadius: 8,

    },});