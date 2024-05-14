import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, List, FlatList} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import MealItem from "../components/MealDetails";


export default function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) !== -1);

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
                renderItem={itemData => (<Text>{itemData.item.title}</Text>)}
           />
        </View>
    );



}