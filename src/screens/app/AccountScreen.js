import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../navigation/RootNavigator";

const AccountScreen = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      // Remove stored data
      await AsyncStorage.multiRemove(["token", "customer"]);

      // Update auth state
      setIsLoggedIn(false);
    } catch (err) {
      console.log("Logout Error:", err);
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Account Screen</Text>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#ef4444",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
