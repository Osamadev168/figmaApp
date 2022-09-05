import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "../App";
import WelcomeScreen from "../Screens/WelcomeScreen";
import User from "../User";
import { createStackNavigator } from "@react-navigation/stack";

export default function Navgition() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={WelcomeScreen}
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
