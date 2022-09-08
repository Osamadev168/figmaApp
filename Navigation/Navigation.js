import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signupscreen from "../Screens/Signupscreen";
import Creds from "../Screens/UserCredentialsScreen";
export default function Navgition() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen name="Creds" component={Creds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
