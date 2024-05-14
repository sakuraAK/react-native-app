import { StyleSheet, ScrollView, View, Image, Text, Subtitle, List } from "react-native";
import MealDetails from "../components/MealDetails";


export default function MealDetailsScreen() {
    
    const selectedMeal = {}; //todo

    return (
    <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} />
    <Text style={styles.title}></Text>
    <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      textStyle={styles.detailText}
    />
    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List/>
        <Subtitle>Steps</Subtitle>
        <List />
      </View>
    </View>
  </ScrollView>
);
}


const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
      width: '100%',
      height: 350,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white',
    },
    detailText: {
      color: 'white',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    },
  });