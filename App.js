import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// local files
import { Welcome, Main } from "./components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // hide header in stack navitor react navigation
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          // options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

// TODO: ScrollView,
