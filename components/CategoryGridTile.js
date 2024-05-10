import { Pressable, View, Text, StyleSheet } from "react-native";

export default function CategoryGridTile({title, color, onPress}) {

    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ color: '#ccc'}} 
             style={({pressed}) => [styles.button, pressed ? styles.buttonPressed: null]}
             onPress={onPress}
             >
                <View style={[styles.innerContainer, { backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>

            </Pressable>
        </View>
    );


}

const styles = StyleSheet.create(
{
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center',    
    
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    }

}
);