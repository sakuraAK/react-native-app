import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GreetingsScreen from "./screens/GreetingsScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  name="GreetingsScreen" component={GreetingsScreen}/>
        <Drawer.Screen name="UserScreen" component={UserScreen}/>
      </Drawer.Navigator>

    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  rootComponent: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});


