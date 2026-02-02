import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Animated,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../navigation/RootNavigator";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [focused, setFocused] = useState(false);
  const [step, setStep] = useState(1);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const otpRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const isValid = phone.length === 10;

  const pressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const goToOTP = async () => {
    setLoadingOTP(true);
    try {
      const res = await fetch(`${API_URL}customer_App/signInCustomer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile_number: phone }),
      });

      const data = await res.json();
      if (data.status) {
        Animated.timing(slideAnim, {
          toValue: -width,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          setStep(2);
          slideAnim.setValue(width);
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        });
      } else {
        Alert.alert("Error", data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong while sending OTP");
    } finally {
      setLoadingOTP(false);
    }
  };

  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP");
      return;
    }
    setLoadingVerify(true);

    try {
      const res = await fetch(`${API_URL}customer_App/verifySignInCustomer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile_number: phone, otp: fullOtp }),
      });

      const data = await res.json();

      if (data.status) {
        await AsyncStorage.setItem("token", data.data.token);
        await AsyncStorage.setItem(
          "customer",
          JSON.stringify(data.data.customer),
        );

        setIsLoggedIn(true);
      } else {
        Alert.alert("Error", data.message || "OTP verification failed");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong while verifying OTP");
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={["#0369A1", "#0EA5E9", "#38BDF8"]}
        style={StyleSheet.absoluteFill}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.hero}>
              <View style={styles.logoRow}>
                <Ionicons name="water" size={34} color="#fff" />
                <Text style={styles.logo}>BetterWater</Text>
              </View>

              <Text style={styles.heroTitle}>
                Pure Water.
                {"\n"}Better Life.
              </Text>

              <Text style={styles.heroSub}>
                Smart water management for your daily needs
              </Text>
            </View>
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [{ translateX: slideAnim }],
                },
              ]}
            >
              {step === 1 ? (
                <>
                  <Text style={styles.welcome}>Welcome Back 👋</Text>

                  <Text style={styles.cardTitle}>Sign In</Text>

                  <Text style={styles.subtitle}>
                    Login with your mobile number to continue
                  </Text>

                  <View
                    style={[styles.inputBox, focused && styles.inputFocused]}
                  >
                    <View style={styles.country}>
                      <Text style={styles.flag}>🇮🇳</Text>
                      <Text style={styles.code}>+91</Text>
                    </View>

                    <TextInput
                      style={styles.input}
                      keyboardType="phone-pad"
                      maxLength={10}
                      placeholder="Enter mobile number"
                      placeholderTextColor="#94A3B8"
                      value={phone}
                      autoFocus={true}
                      returnKeyType="done"
                      onChangeText={(v) => {
                        const numeric = v.replace(/[^0-9]/g, "");
                        setPhone(numeric);
                      }}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                  </View>

                  <TouchableOpacity
                    disabled={!isValid || loadingOTP}
                    onPressIn={pressIn}
                    onPressOut={pressOut}
                    onPress={goToOTP}
                    activeOpacity={0.9}
                  >
                    <Animated.View
                      style={[
                        styles.btn,
                        (!isValid || loadingOTP) && styles.btnDisabled,
                        { transform: [{ scale: scaleAnim }] },
                      ]}
                    >
                      {loadingOTP ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <>
                          <Text style={styles.btnText}>Continue</Text>
                          <Ionicons
                            name="arrow-forward"
                            size={20}
                            color="#fff"
                          />
                        </>
                      )}
                    </Animated.View>
                  </TouchableOpacity>

                  <View style={styles.infoRow}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={15}
                      color="#64748B"
                    />
                    <Text style={styles.infoText}>
                      Your data is 100% secure
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <Text style={[styles.cardTitle, { textAlign: "center" }]}>
                    Enter OTP
                  </Text>

                  <Text style={styles.subtitle}>OTP sent to +91 {phone}</Text>

                  <View style={styles.otpRow}>
                    {otp.map((digit, i) => (
                      <TextInput
                        key={i}
                        ref={(ref) => (otpRefs.current[i] = ref)}
                        style={styles.otpBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={digit}
                        onChangeText={(val) => {
                          if (!/^[0-9]?$/.test(val)) return;

                          const newOtp = [...otp];
                          newOtp[i] = val;
                          setOtp(newOtp);

                          if (val && i < 5) {
                            otpRefs.current[i + 1]?.focus();
                          }

                          if (!val && i > 0) {
                            otpRefs.current[i - 1]?.focus();
                          }
                        }}
                      />
                    ))}
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleVerify}
                    disabled={loadingVerify}
                  >
                    <View
                      style={[styles.btn, loadingVerify && styles.btnDisabled]}
                    >
                      {loadingVerify ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <>
                          <Text style={styles.btnText}>Verify & Continue</Text>
                          <Ionicons
                            name="arrow-forward"
                            size={20}
                            color="#fff"
                          />
                        </>
                      )}
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
  },
  hero: {
    height: height * 0.4,
    paddingHorizontal: 28,
    justifyContent: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: 44,
    marginBottom: 12,
  },

  heroSub: {
    color: "#E0E7FF",
    fontSize: 16,
    lineHeight: 24,
  },

  /* CARD */

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },

  welcome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0EA5E9",
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
  },

  /* INPUT */

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderWidth: 1.5,
    borderColor: "#CBD5F5",
    borderRadius: 12,
    paddingHorizontal: 18,
    backgroundColor: "#F8FAFC",
    marginBottom: 24,
  },

  inputFocused: {
    borderColor: "#0EA5E9",
    backgroundColor: "#fff",
  },

  country: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },

  flag: {
    fontSize: 18,
    marginRight: 6,
  },

  code: {
    fontWeight: "600",
    color: "#0F172A",
  },

  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
    color: "#0F172A",
  },
  btn: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#0EA5E9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  btnDisabled: {
    backgroundColor: "#CBD5E1",
  },

  btnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    marginRight: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  infoText: {
    marginLeft: 6,
    color: "#64748B",
    fontSize: 13,
  },

  /* OTP */

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  otpBox: {
    width: 45,
    height: 55,
    borderWidth: 1.5,
    borderColor: "#CBD5F5",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    backgroundColor: "#F8FAFC",
  },
});
