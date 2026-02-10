import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CHART_HEIGHT = 160;

const UsageScreen = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      {/* <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#0f172a" />
          </TouchableOpacity>

          <Text style={styles.title}>Water Consumption</Text>

          <TouchableOpacity>
            <Ionicons name="download-outline" size={22} color="#0f172a" />
          </TouchableOpacity>
        </View> */}

      {/* TABS */}
      <View style={styles.tabContainer}>
        {["Weekly", "Monthly", "Yearly"].map((tab) => {
          const isActive = activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              activeOpacity={0.8}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabItem, isActive && styles.tabItemActive]}
            >
              <Text
                style={[styles.tabLabel, isActive && styles.tabLabelActive]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* TOTAL USAGE */}
      <View style={styles.usageCardNew}>
        {/* Header */}
        <View style={styles.usageHeader}>
          <View>
            <Text style={styles.usageTitle}>Water Score</Text>
            <Text style={styles.usageSubTitle}>
              {new Date().toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })}
            </Text>
          </View>

          <View style={styles.iconBox}>
            <Ionicons name="water" size={22} color="#0284c7" />
          </View>
        </View>

        {/* Main Value */}
        <Text style={styles.usageMainValue}>4.2</Text>
        <Text style={styles.usageUnit}>Milligrams per Liter (mg/L)</Text>

        {/* Progress Bar */}
        {/* <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View> */}

        {/* Footer */}
        <View style={styles.usageFooter}>
          <View style={styles.footerItem}>
            {/* <Ionicons name="trending-down" size={14} color="#16a34a" /> */}
            <Text style={styles.footerText}>{/* 12% Less */}</Text>
          </View>

          <Text style={styles.compareText}>{/* vs July */}</Text>
        </View>
      </View>

      {/* USAGE HISTORY */}
      {/* USAGE HISTORY HEADER */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>Usage History</Text>
        <Text style={styles.historySub}>Last 6 Months</Text>
      </View>

      {/* GRAPH CARD */}
      <View style={styles.graphCard}>
        {/* Bars */}
        <View style={styles.graphRow}>
          {[
            { month: "MAR", value: 40 },
            { month: "APR", value: 55 },
            { month: "MAY", value: 70 },
            { month: "JUN", value: 60 },
            { month: "JUL", value: 80 },
            { month: "AUG", value: 65 },
          ].map((item, index) => {
            const barHeight = (item.value / 100) * CHART_HEIGHT;

            return (
              <View key={index} style={styles.barItem}>
                <Text style={styles.barValue}>{item.value / 10}(mg/L)</Text>

                <View style={styles.barBg}>
                  <View style={[styles.barFill, { height: barHeight }]} />
                </View>

                <Text style={styles.barMonth}>{item.month}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* STATS */}
      {/* <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Daily Average</Text>
          <Text style={styles.statValue}>140 Ltrs</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Peak Usage</Text>
          <Text style={styles.statValue}>Aug 14</Text>
        </View>
      </View> */}

      {/* SMART TIP */}
      <View style={styles.tipCard}>
        <View style={styles.tipIcon}>
          <Ionicons name="bulb" size={20} color="#0284c7" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.tipTitle}>Smart Saving Tip</Text>

          <Text style={styles.tipText}>
            Fixing a leaky faucet can save up to 3(mg/L) of water a month. Your
            usage peaked on weekends.
          </Text>
        </View>
      </View>

      {/* DETAILS */}
      <View style={styles.detailsBox}>
        <Text style={styles.detailsTitle}>Detailed Insights</Text>

        <View style={styles.detailRow}>
          <Ionicons name="home-outline" size={18} color="#0284c7" />
          <Text style={styles.detailText}>Household Avg.</Text>
          <Text style={styles.detailValue}>3.8 (mg/L)</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={18} color="#0284c7" />
          <Text style={styles.detailText}>Days in Cycle</Text>
          <Text style={styles.detailValue}>31 Days</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="wifi-outline" size={18} color="#0284c7" />
          <Text style={styles.detailText}>Meter Status</Text>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>Active</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UsageScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#e5eff9",
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 4,
    marginTop: 12,
    marginBottom: 22,
  },

  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 12,
  },

  tabItemActive: {
    backgroundColor: "#0284c7",

    // Shadow for Android
    elevation: 3,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  tabLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
  },

  tabLabelActive: {
    color: "#fff",
    fontWeight: "700",
  },

  /* USAGE */

  /* ===== NEW PREMIUM USAGE CARD ===== */

  usageCardNew: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,

    // Shadow
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  usageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  usageTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },

  usageSubTitle: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 2,
  },

  iconBox: {
    backgroundColor: "#e0f2fe",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  usageMainValue: {
    fontSize: 46,
    fontWeight: "800",
    color: "#0284c7",
    textAlign: "center",
  },

  usageUnit: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 14,
  },

  progressBarBg: {
    height: 8,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 14,
  },

  progressBarFill: {
    width: "72%", // change % as per usage
    height: CHART_HEIGHT,
    backgroundColor: "#0284c7",
    borderRadius: 10,
  },

  usageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  footerText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#16a34a",
  },

  compareText: {
    fontSize: 12,
    color: "#64748b",
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
  },

  sectionSub: {
    fontSize: 11,
    color: "#94a3b8",
  },

  /* CHART */

  /* ===== PROFESSIONAL GRAPH ===== */

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },

  historyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },

  historySub: {
    fontSize: 12,
    color: "#94a3b8",
  },

  graphCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,

    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  graphRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 10,
  },

  barItem: {
    flex: 1,
    alignItems: "center",
  },

  barValue: {
    fontSize: 11,
    fontWeight: "600",
    color: "#0284c7",
    marginBottom: 6,
  },

  barBg: {
    width: 18,
    height: CHART_HEIGHT,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    justifyContent: "flex-end",
    overflow: "hidden",
  },

  barFill: {
    width: "100%",
    backgroundColor: "#0284c7",
    borderRadius: 10,
  },

  barMonth: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
  },

  /* STATS */

  statsRow: {
    flexDirection: "row",
    marginHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },

  statLabel: {
    fontSize: 12,
    color: "#64748b",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },

  /* TIP */

  tipCard: {
    backgroundColor: "#eff6ff",
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  tipIcon: {
    backgroundColor: "#fff",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  tipTitle: {
    fontWeight: "700",
    marginBottom: 2,
  },

  tipText: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 16,
  },

  /* DETAILS */

  detailsBox: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 16,
    marginBottom: 30,
    elevation: 2,
  },

  detailsTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 12,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },

  detailText: {
    flex: 1,
    fontSize: 13,
    color: "#334155",
  },

  detailValue: {
    fontSize: 13,
    fontWeight: "700",
  },

  activeBadge: {
    backgroundColor: "#dcfce7",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  activeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#15803d",
  },
});
