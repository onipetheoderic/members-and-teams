import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloProvider } from "@apollo/client";
import client from "./services/client";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_400Regular_Italic,
} from "@expo-google-fonts/poppins";

// SCREENS IMPORTS
import { Team } from "./src/screens";
import { AllMembers } from "./src/screens";
import { OverallContextProvider } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <OverallContextProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AllMembers" component={AllMembers} />
            <Stack.Screen name="Team" component={Team} />
            {/*  */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </OverallContextProvider>
  );
}
