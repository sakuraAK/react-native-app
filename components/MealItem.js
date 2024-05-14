import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
  } from 'react-native';
  
  function MealItem() {
    return (
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image/>
              <Text style={styles.title}></Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailItem}> m</Text>
              <Text style={styles.detailItem}></Text>
              <Text style={styles.detailItem}></Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
  
  export default MealItem;
  
  const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      borderRadius: 8,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 200,
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 8,
    },
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
  });