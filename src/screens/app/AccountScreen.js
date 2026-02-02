import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../navigation/RootNavigator";

const AccountScreen = () => {

  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" 
    }}>

      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        AccountScreen
      </Text>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={() => setIsLoggedIn(false)}
        style={{
          backgroundColor: "#ef4444",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 8
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default AccountScreen;
