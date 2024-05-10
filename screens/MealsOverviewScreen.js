import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";


export default function MealsOverviewScreen({ route }) {
    const categoryId = route.params.categoryId;


    return (
        <View>
            <Text>Meals Overview for category - {categoryId} </Text>
        </View>
    );



}