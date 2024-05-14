import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text } from "react-native";
import { useEffect, useLayoutEffect } from "react";


export default function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find(
    //       (category) => category.id === categoryId
    //     ).title;
    
    //     navigation.setOptions({
    //       title: categoryTitle,
    //     });
    //   }, [categoryId, navigation]);

    return (
        <View>
            <Text>Meals Overview for category - {categoryId} </Text>
        </View>
    );



}