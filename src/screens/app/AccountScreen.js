import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../navigation/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';

// referral
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');

const AccountScreen = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  // hook
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(["token", "customer"]);
      setIsLoggedIn(false);
    } catch (err) {
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ================= PROFILE ================= */}
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileWrapper}>
            <View style={styles.avatar}>
              <Text>🌿</Text>
            </View>

            <TouchableOpacity style={styles.editBtn}>
              <Ionicons name="pencil" size={18} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>

          <Text style={styles.companyName}>
            HARIKRUSHNA LABELS PRIVATE LIMITED
          </Text>
          <Text style={styles.customerId}>Customer ID: BW-CUST-108</Text>

          <View style={styles.statusContainer}>
            <View style={styles.statusBadge}>
              <Octicons name="dot-fill" size={16} color="#32c12d" />
              <Text>Account: Active</Text>
              <MaterialIcons name="water-drop" size={16} color="#04c7f8" />
            </View>
          </View>
        </View>

        <View style={styles.line} />

        {/* ================= ACCOUNT DETAILS ================= */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>ACCOUNT DETAILS</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <MaterialIcons name="email" size={24} color="#04c7f8" />
            </View>
            <View>
              <Text style={styles.infoLabel}>EMAIL ADDRESS</Text>
              <Text style={styles.infoValue}>
                contact@harikrushnalabels.com
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <MaterialIcons name="call" size={24} color="#04c7f8" />
            </View>
            <View>
              <Text style={styles.infoLabel}>PHONE NUMBER</Text>
              <Text style={styles.infoValue}>+91 98765 43210</Text>
            </View>
          </View>
        </View>

        {/* ================= MANAGE ACCOUNT ================= */}
        <Text style={styles.sectionTitleOuter}>MANAGE ACCOUNT</Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons
              name="location-on"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>My Addresses</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <TouchableOpacity style={styles.row}>
            <MaterialCommunityIcons
              name="credit-card-multiple"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>Payment Methods</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <TouchableOpacity style={styles.row} onPress={()=>navigation.navigate("Referral")}>
            <MaterialCommunityIcons
              name="gift-outline"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>Referral & Rewards</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <TouchableOpacity style={styles.row}>
            <MaterialCommunityIcons
              name="history"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>Usage History</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>
        </View>

        {/* ================= SUPPORT & SETTINGS ================= */}
        <Text style={styles.sectionTitleOuter}>SUPPORT & SETTINGS</Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <MaterialCommunityIcons
              name="help-box"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>Help Center</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <TouchableOpacity style={styles.row}>
            <Ionicons
              name="settings-sharp"
              size={26}
              color="#04c7f8"
              style={styles.rowIcon}
            />
            <Text style={styles.rowText}>App Settings</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <TouchableOpacity style={styles.row} onPress={handleLogout}>

            <MaterialCommunityIcons name="logout" size={26} color="#ef4444"
              style={[styles.rowIcon, styles.rowIcon2]} />
            <Text style={[styles.rowText, styles.logout]}>Logout</Text>
            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ReferralScreen = ({navigation})=>{
  return(
    <SafeAreaView style={refStyles.safeArea} edges={[]}>
        {/* Header */}
        <View style={refStyles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={refStyles.backBtn}>
                <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={refStyles.headerTitle}>Referral & Rewards</Text>
            <TouchableOpacity style={refStyles.moonBtn}>
                <Feather name="moon" size={20} color="white" />
            </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={refStyles.scrollContent}>
            
            {/* Blue Hero Card */}
            <LinearGradient colors={['#4facfe', '#00f2fe']} style={refStyles.heroCard}>
                <View style={refStyles.giftBoxContainer}>
                    <Feather name="gift" size={30} color="white" />
                </View>
                <Text style={refStyles.heroTitle}>Share the flow, earn rewards</Text>
                <Text style={refStyles.heroSubtitle}>Help your friends save on their water bill while you earn credits!</Text>
            </LinearGradient>

            {/* Give/Get Card */}
            <View style={refStyles.promoCard}>
                <Text style={refStyles.promoTitle}>Give $10, Get $10</Text>
                <Text style={refStyles.promoSubtitle}>Invite friends to manage their water service and you both get $10 off your next bill.</Text>
                
                <View style={refStyles.codeBox}>
                    <Text style={refStyles.codeLabel}>YOUR UNIQUE CODE</Text>
                    <View style={refStyles.codeRow}>
                        <Text style={refStyles.codeText}>WATER50</Text>
                        <Feather name="copy" size={20} color="#3b82f6" />
                    </View>
                </View>

                <TouchableOpacity style={refStyles.shareButton}>
                    <Feather name="share-2" size={20} color="white" />
                    <Text style={refStyles.shareButtonText}>Share Code</Text>
                </TouchableOpacity>
            </View>

            {/* How it works */}
            <Text style={refStyles.sectionHeading}>How it works</Text>
            <View style={refStyles.grid}>
                <View style={refStyles.gridItem}>
                    <View style={refStyles.gridIconCircle}>
                        <Feather name="users" size={20} color="#3b82f6" />
                    </View>
                    <Text style={refStyles.gridTitle}>For Friend</Text>
                    <Text style={refStyles.gridText}>They get $10 off their first water bill payment.</Text>
                </View>
                <View style={refStyles.gridItem}>
                    <View style={refStyles.gridIconCircle}>
                        <MaterialCommunityIcons name="piggy-bank-outline" size={20} color="#3b82f6" />
                    </View>
                    <Text style={refStyles.gridTitle}>For You</Text>
                    <Text style={refStyles.gridText}>Get $10 off when they pay their first bill.</Text>
                </View>
            </View>

            {/* Quick Share */}
            <Text style={refStyles.sectionHeading}>Quick Share</Text>
            <View style={refStyles.shareRow}>
                <View style={refStyles.shareIconItem}>
                    <View style={[refStyles.shareIconCircle, {backgroundColor: '#25D366'}]}>
                        <Ionicons name="logo-whatsapp" size={24} color="white" />
                    </View>
                    <Text style={refStyles.shareIconLabel}>WhatsApp</Text>
                </View>
                <View style={refStyles.shareIconItem}>
                    <View style={[refStyles.shareIconCircle, {backgroundColor: '#3b82f6'}]}>
                        <Feather name="mail" size={24} color="white" />
                    </View>
                    <Text style={refStyles.shareIconLabel}>Email</Text>
                </View>
                <View style={refStyles.shareIconItem}>
                    <View style={[refStyles.shareIconCircle, {backgroundColor: '#6366f1'}]}>
                        <MaterialIcons name="chat" size={24} color="white" />
                    </View>
                    <Text style={refStyles.shareIconLabel}>SMS</Text>
                </View>
                <View style={refStyles.shareIconItem}>
                    <View style={[refStyles.shareIconCircle, {backgroundColor: '#e5e7eb'}]}>
                        <Feather name="more-horizontal" size={24} color="gray" />
                    </View>
                    <Text style={refStyles.shareIconLabel}>More</Text>
                </View>
            </View>

            {/* Stats Card */}
            <View style={refStyles.statsCard}>
                <View style={refStyles.statsTopRow}>
                    <View>
                        <Text style={refStyles.statsLabel}>TOTAL EARNED</Text>
                        <Text style={refStyles.statsValue}>$120.00</Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text style={refStyles.statsLabel}>SUCCESSFUL REFERRALS</Text>
                        <Text style={refStyles.statsValue}>12</Text>
                    </View>
                </View>
                <View style={refStyles.statsDivider} />
                <TouchableOpacity style={refStyles.historyBtn}>
                    <Text style={refStyles.historyText}>View Referral History</Text>
                    <Feather name="arrow-right" size={16} color="#60a5fa" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default function Accountstack(){
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Account" component={AccountScreen}/>
        {/* <Stack.Screen name="Referral" component={ReferralScreen}/> */}
      </Stack.Navigator>
  )
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },

  profileContainer: { width: "90%", alignSelf: "center" },
  profileWrapper: { paddingTop: 40, alignItems: "center" },

  avatar: {
    backgroundColor: "#fad2b0",
    padding: 40,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
  editBtn: {
    position: "absolute",
    bottom: 3,
    right: 115,
    backgroundColor: "#00d5ff",
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },

  companyName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 10,
  },
  customerId: {
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },

  statusContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#dfffde",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 25,
  },

  line: { height: 1, backgroundColor: "#e5e7eb" },

  sectionContainer: { width: "90%", alignSelf: "center" },
  sectionTitle: {
    color: "gray",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 15,
  },
  sectionTitleOuter: {
    color: "gray",
    fontSize: 14,
    fontWeight: "600",
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 15,
  },
  infoIcon: {
    backgroundColor: "#d1f3fb",
    padding: 12,
    borderRadius: 10,
  },
  infoLabel: { color: "gray", fontSize: 13 },
  infoValue: { fontSize: 15, fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    padding: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  rowIcon: { width: "15%" },
  rowText: { width: "70%", fontSize: 16, fontWeight: "500" },
  rowIcon2:{
    paddingLeft:3
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 5,
  },

  logout: { color: "#ef4444" },
});

const refStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  backBtn: {
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 50
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  moonBtn: {
    backgroundColor: '#0f172a',
    padding: 8,
    borderRadius: 50
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  heroCard: {
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20
  },
  giftBoxContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15
  },
  heroTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heroSubtitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9
  },
  promoCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 25
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b'
  },
  promoSubtitle: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8
  },
  codeBox: {
    width: '100%',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bfdbfe',
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  codeLabel: {
    color: '#3b82f6',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  codeText: {
    fontSize: 28,
    fontWeight: '800',
    marginRight: 10,
    color: '#1e293b'
  },
  shareButton: {
    backgroundColor: '#0ea5e9',
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 15
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  gridItem: {
    backgroundColor: '#f8fafc',
    width: '48%',
    padding: 16,
    borderRadius: 20
  },
  gridIconCircle: {
    backgroundColor: '#dbeafe',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  gridTitle: {
    fontWeight: 'bold',
    color: '#1e293b'
  },
  gridText: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 18
  },
  shareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 24,
    marginBottom: 25
  },
  shareIconItem: {
    alignItems: 'center'
  },
  shareIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  shareIconLabel: {
    fontSize: 11,
    color: '#64748b'
  },
  statsCard: {
    backgroundColor: '#020617',
    borderRadius: 30,
    padding: 25,
    marginBottom: 20
  },
  statsTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsLabel: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  statsValue: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5
  },
  statsDivider: {
    height: 1,
    backgroundColor: '#1e293b',
    marginVertical: 20
  },
  historyBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  historyText: {
    color: '#60a5fa',
    fontWeight: 'bold',
    marginRight: 8
  }
});