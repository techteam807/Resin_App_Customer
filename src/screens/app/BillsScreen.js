import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const PAYMENT_DATA = [
  {
    id: "WTR-882193",
    month: "September 2023",
    amount: 38.2,
    status: "paid",
  },
  {
    id: "WTR-881042",
    month: "August 2023",
    amount: 41.15,
    status: "paid",
  },
  {
    id: "WTR-879821",
    month: "July 2023",
    amount: 39.5,
    status: "paid",
  },
  {
    id: "WTR-878511",
    month: "June 2023",
    amount: 35.8,
    status: "pending",
  },
];

const BillsScreen = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState("all");

  const filteredPayments =
    activeTab === "all"
      ? PAYMENT_DATA
      : PAYMENT_DATA.filter((i) => i.status === activeTab);

  return (
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.balanceCard}>
          <View style={styles.balanceIcon}>
            <MaterialIcons name="water-drop" size={40} color="#2c9ad1" />
          </View>

          <Text style={styles.balanceLabel}>Current Balance</Text>

          <Text style={styles.balanceAmount}>$42.50</Text>

          <View style={styles.balanceRow}>
            <View>
              <Text style={styles.smallLabel}>Next Bill</Text>
              <Text style={styles.smallValue}>Feb 28, 2024</Text>
            </View>

            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.payText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>Payment History</Text>
        </View>
        <View style={styles.filterRow}>
          {["all", "paid", "pending"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.filterBtn,
                activeTab === tab && styles.activeFilter,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  activeTab === tab && styles.activeFilterText,
                ]}
              >
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* LIST */}
        {filteredPayments.map((item) => (
          <View key={item.id} style={styles.paymentCard}>
            {/* STATUS BAR */}
            <View
              style={[
                styles.statusLine,
                item.status === "paid"
                  ? styles.linePaid
                  : styles.linePending,
              ]}
            />
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.month}>{item.month}</Text>

                <Text style={styles.amount}>
                  ${item.amount.toFixed(2)}
                </Text>
              </View>
              <Text style={styles.idText}>Invoice: #{item.id}</Text>
              <View style={styles.cardBottom}>
                <View
                  style={[
                    styles.statusBadge,
                    item.status === "paid"
                      ? styles.paidBadge
                      : styles.pendingBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      item.status === "paid"
                        ? styles.paidText
                        : styles.pendingText,
                    ]}
                  >
                    {item.status.toUpperCase()}
                  </Text>
                </View>

                <TouchableOpacity>
                  <Ionicons
                    name="download-outline"
                    size={22}
                    color="#64748b"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <Text style={styles.supportText}>
          Need help?{" "}
          <Text style={styles.supportLink}>Contact Support</Text>
        </Text>
      </ScrollView>
  );
};

export default BillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  pageTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  balanceCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    marginTop:5,
    elevation: 3,
  },

  balanceIcon: {
    backgroundColor: "#e0f2fe",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },

  balanceLabel: {
    textAlign: "center",
    color: "#64748b",
    fontWeight: "600",
  },

  balanceAmount: {
    textAlign: "center",
    fontSize: 38,
    fontWeight: "800",
    marginVertical: 6,
    color: "#020617",
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    alignItems: "center",
  },

  smallLabel: {
    color: "#64748b",
    fontSize: 12,
  },

  smallValue: {
    fontWeight: "600",
    fontSize: 14,
  },

  payBtn: {
    backgroundColor: "#2c9ad1",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  payText: {
    color: "#fff",
    fontWeight: "700",
  },
  historyHeader: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  historyTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },

  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
  },

  activeFilter: {
    backgroundColor: "#2c9ad1",
  },

  filterText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
  },

  activeFilterText: {
    color: "#fff",
  },

  paymentCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 14,
    flexDirection: "row",
    overflow: "hidden",
    elevation: 2,
  },

  statusLine: {
    width: 5,
  },

  linePaid: {
    backgroundColor: "#22c55e",
  },

  linePending: {
    backgroundColor: "#f97316",
  },

  cardContent: {
    flex: 1,
    padding: 14,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  month: {
    fontSize: 15,
    fontWeight: "700",
    color: "#020617",
  },

  amount: {
    fontSize: 15,
    fontWeight: "700",
  },

  idText: {
    fontSize: 12,
    color: "#94a3b8",
    marginVertical: 4,
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },

  paidBadge: {
    backgroundColor: "#dcfce7",
  },

  pendingBadge: {
    backgroundColor: "#ffedd5",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "800",
  },

  paidText: {
    color: "#15803d",
  },

  pendingText: {
    color: "#c2410c",
  },

  /* FOOTER */

  supportText: {
    textAlign: "center",
    marginVertical: 24,
    color: "#94a3b8",
    fontSize: 12,
  },

  supportLink: {
    color: "#0284c7",
    fontWeight: "700",
  },
});
