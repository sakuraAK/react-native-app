import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, List, FlatList} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import MealItem from "../components/MealItem";


export default function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) !== -1);

    function onMealItemPressHandler(mealId) {
       navigation.navigate('MealDetails', {mealId: mealId});
    }


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
          (category) => category.id === categoryId
        ).title;
    
        navigation.setOptions({
          title: categoryTitle,
        });
      }, [categoryId, navigation]);

    return (
        <View>
           <FlatList
                data={meals}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                <MealItem 
                  title={itemData.item.title} 
                  imageURL={itemData.item.imageUrl}
                  duration={itemData.item.duration}
                  affordability={itemData.item.affordability}
                  complexity={itemData.item.complexity}
                  onPressHandler={() => onMealItemPressHandler(itemData.item.id)}
                  />)}
           />
        </View>
    );



}