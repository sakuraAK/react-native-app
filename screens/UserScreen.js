import { StyleSheet, View, Text } from "react-native";


export default function UserScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}>user</Text> screen!
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight : {
        fontWeight: 'bold',
        color: 'red',
    }
});