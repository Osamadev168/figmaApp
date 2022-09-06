import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../Screens/WelcomeScreen";
import User from "../Screens/User";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../Screens/OnboardingScreen";
export default function Navgition() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={User}
      >
        <Stack.Screen name="User" component={User} />

        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen name="Home" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
