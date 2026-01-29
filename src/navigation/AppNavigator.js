import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import HomeScreen from "../screens/app/HomeScreen";
import UsageScreen from "../screens/app/UsageScreen";
import BillsScreen from "../screens/app/BillsScreen";
import SupportScreen from "../screens/app/SupportScreen";
import AccountScreen from "../screens/app/AccountScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } 
          else if (route.name === "Usage") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          } 
          else if (route.name === "Bills") {
            iconName = focused ? "receipt" : "receipt-outline";
          } 
          else if (route.name === "Support") {
            iconName = focused ? "headset" : "headset-outline";
          } 
          else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Usage" component={UsageScreen} />
      <Tab.Screen name="Bills" component={BillsScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
