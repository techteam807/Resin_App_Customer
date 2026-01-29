import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../navigation/RootNavigator";

const OtpScreen = () => {

  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OTP Screen</Text>

      <Button
        title="Verify & Go to Home"
        onPress={() => setIsLoggedIn(true)}
      />
    </View>
  );
};

export default OtpScreen;
