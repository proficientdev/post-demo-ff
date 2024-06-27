import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PostCommentScreen from "./screens/PostCommentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#fc0394", // Color de fondo del encabezado
            },
            headerTintColor: "#fff", // Color del texto del encabezado
            headerTitleStyle: {
              fontWeight: "bold", // Estilo del texto del encabezado
            },
          }}
          name="Posts"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#fc0394", // Color de fondo del encabezado
            },
            headerTintColor: "#fff", // Color del texto del encabezado
            headerTitleStyle: {
              fontWeight: "bold", // Estilo del texto del encabezado
            },
          }}
          name="Comments"
          component={PostCommentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
