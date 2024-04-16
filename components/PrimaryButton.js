import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} style={styles.innerContainer}  android_ripple={{ color: '#640233'}}>
          
                <Text style={styles.buttonText}>{children}</Text>
    
            </Pressable>
        </View>
        
           
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        textAlign: "center",
    },

    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',     
    },
    innerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    }
});