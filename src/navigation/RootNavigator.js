import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import PlanScreen from "../screens/app/PlanScreen";
import ReferralScreen from "../screens/app/ReferralScreen";

export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      setIsLoggedIn(!!token);
    } catch (err) {
      console.log("Token Check Error:", err);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : isLoggedIn ? (
          /* ✅ Logged In Stack */
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Bottom Tabs */}
            <Stack.Screen name="Tabs" component={AppNavigator} />

            {/* Hidden Screen */}
            <Stack.Screen name="Plan" component={PlanScreen} />
            <Stack.Screen name="Referral" component={ReferralScreen} />

          </Stack.Navigator>
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
