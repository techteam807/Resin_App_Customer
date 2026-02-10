import React, { useContext } from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Go To OTP"
        onPress={() => navigation.navigate("Otp")}
      />
    </View>
  );
}
