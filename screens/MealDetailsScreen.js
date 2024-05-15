import { StyleSheet, ScrollView, View, Image, Text, Subtitle, List } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";


export default function MealDetailsScreen({ route }) {

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (

    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>

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