import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const PlanScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs", { screen: "Home" })}
        >
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Plan & Subscription</Text>

        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CURRENT PLAN CARD */}
      <View style={styles.planCard}>
        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>CURRENT PLAN • Active</Text>
        </View>

        <Text style={styles.planTitle}>
          Betterwater Yearly High Hardness Plan
        </Text>

        <Text style={styles.planSub}>Premium water utility coverage</Text>

        <View style={styles.planInfoRow}>
          <View>
            <Text style={styles.infoLabel}>VALIDITY</Text>
            <Text style={styles.infoValue}>Aug 2025 - May 2026</Text>
          </View>

          <View>
            <Text style={styles.infoLabel}>ANNUAL AMOUNT</Text>
            <Text style={styles.infoValue}>₹49,560</Text>
          </View>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.renewBtn}>
            <Text style={styles.renewText}>Renew Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.detailText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* INCLUDED BENEFITS */}
      <Text style={styles.sectionTitle}>INCLUDED BENEFITS</Text>

      {[
        "High Hardness Treatment",
        "24/7 Priority Support",
        "Annual Quality Testing",
      ].map((item, index) => (
        <View key={index} style={styles.benefitCard}>
          <View style={styles.benefitIcon}>
            <MaterialIcons name="verified" size={20} color="#0284c7" />
          </View>

          <Text style={styles.benefitText}>{item}</Text>

          <Ionicons name="checkmark-circle" size={22} color="green" />
        </View>
      ))}

      {/* MANAGE */}
      <Text style={styles.sectionTitle}>MANAGE</Text>

      {["Upgrade to Platinum", "Payment History", "Billing Settings"].map(
        (item, index) => (
          <TouchableOpacity key={index} style={styles.manageItem}>
            <Text style={styles.manageText}>{item}</Text>

            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        ),
      )}

      {/* SPECIAL OFFER */}
      <View style={styles.offerCard}>
        <MaterialIcons name="local-offer" size={28} color="#4f46e5" />

        <View style={{ flex: 1 }}>
          <Text style={styles.offerTitle}>Special Offer</Text>

          <Text style={styles.offerText}>Get 10% off on your next renewal</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 45,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  /* PLAN CARD */

  planCard: {
    backgroundColor: "#0284c7",
    borderRadius: 22,
    padding: 20,
    marginBottom: 25,
  },

  activeBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
  },

  activeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  planTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  planSub: {
    color: "#dbeafe",
    marginTop: 4,
    marginBottom: 16,
  },

  planInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  infoLabel: {
    color: "#c7e7ff",
    fontSize: 11,
  },

  infoValue: {
    color: "#fff",
    fontWeight: "700",
    marginTop: 2,
  },

  btnRow: {
    flexDirection: "row",
    gap: 10,
  },

  renewBtn: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  renewText: {
    color: "#0284c7",
    fontWeight: "700",
  },

  detailBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  detailText: {
    color: "#fff",
    fontWeight: "700",
  },

  /* SECTION */

  sectionTitle: {
    fontSize: 13,
    color: "gray",
    marginBottom: 10,
    fontWeight: "600",
  },

  /* BENEFITS */

  benefitCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    gap: 10,
  },

  benefitIcon: {
    backgroundColor: "#e0f2fe",
    padding: 6,
    borderRadius: 20,
  },

  benefitText: {
    flex: 1,
    fontWeight: "600",
  },

  /* MANAGE */

  manageItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  manageText: {
    fontWeight: "600",
  },

  /* OFFER */

  offerCard: {
    backgroundColor: "#eef2ff",
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
    alignItems: "center",
    marginBottom: 40,
  },

  offerTitle: {
    fontWeight: "700",
    marginBottom: 2,
  },

  offerText: {
    color: "#4338ca",
    fontSize: 12,
  },
});
