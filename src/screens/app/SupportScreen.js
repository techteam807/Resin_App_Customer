import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SupportScreen = () => {
  const [selected, setSelected] = useState("Pipe Leakage");
  const [selectedTab, setSelectedTab] = useState("Log Complaint");

  const issues = [
    { name: "Pipe Leakage", icon: "home" },
    { name: "Low Pressure", icon: "water" },
    { name: "Billing Issue", icon: "document-text" },
    { name: "Water Quality", icon: "droplet" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        {/* <View style={styles.header}>
          <Ionicons name="arrow-back" size={22} />
          <Text style={styles.headerText}>Complaint Management</Text>
          <Ionicons name="help-circle-outline" size={22} />
        </View> */}

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {["Log Complaint", "Track Active", "History"].map((tab, index) => {
            const isActive = selectedTab === tab;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.tabButton, isActive && styles.activeTabButton]}
                onPress={() => setSelectedTab(tab)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    isActive && styles.activeTabButtonText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.title}>What's the issue?</Text>

        <View style={styles.grid}>
          {issues.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, selected === item.name && styles.activeCard]}
              onPress={() => setSelected(item.name)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  selected === item.name && { backgroundColor: "#E3F2FD" },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={28}
                  color={selected === item.name ? "#2196F3" : "#555"}
                />
              </View>
              <Text
                style={[
                  styles.cardText,
                  selected === item.name && {
                    color: "#2196F3",
                    fontWeight: "600",
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Location */}
        <Text style={styles.section}>LOCATION</Text>

        <View style={styles.locationContainer}>
          <View style={styles.locationIcon}>
            <Ionicons name="location-outline" size={22} color="#2196F3" />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.locationTitle}>Service Address</Text>
            <Text style={styles.locationText}>
              123 Urban Avenue, Central District
            </Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.section}>DESCRIPTION</Text>

        <TextInput
          style={styles.input}
          placeholder="Please describe the issue..."
          multiline
        />

        {/* Upload Section */}
        {/* Upload Section */}
        <Text style={styles.section}>ATTACH PHOTOS (OPTIONAL)</Text>

        <View style={styles.photoRow}>
          {/* Image Preview */}
          <View style={styles.photoPreviewBox}>
            <Image
              source={{ uri: "https://i.imgur.com/6IUbEMf.jpg" }}
              style={styles.photoPreview}
            />

            {/* Remove Button */}
            <TouchableOpacity style={styles.removeBtn}>
              <Ionicons name="close" size={14} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Add Photo Box */}
          <TouchableOpacity style={styles.addPhotoBox} activeOpacity={0.8}>
            <Ionicons name="camera-outline" size={26} color="#8AAAE5" />
            <Text style={styles.addPhotoText}>ADD PHOTO</Text>
          </TouchableOpacity>
        </View>

        {/* Map Preview */}
        <View style={styles.mapBox}>
          <Text style={{ color: "#555" }}>Map Preview</Text>

          <TouchableOpacity style={styles.verifyBtn}>
            <Text style={{ color: "#2196F3" }}>Verify Location</Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit Complaint →</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  activeTabButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2196F3",
    // shadowColor: "#2196F3",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },

  tabButtonText: {
    color: "#555",
    fontWeight: "500",
  },

  activeTabButtonText: {
    color: "#2196F3",
    fontWeight: "600",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    margin: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    transitionDuration: "200ms",
  },
  activeCard: {
    borderWidth: 2,
    borderColor: "#2196F3",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },

  section: {
    marginHorizontal: 15,
    marginTop: 20,
    fontSize: 12,
    color: "#777",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    marginHorizontal: 15,
    marginTop: 10,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  locationIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  locationInfo: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 2,
  },

  locationText: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
    lineHeight: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    minHeight: 80,
    textAlignVertical: "top",
  },
  photoRow: {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 15,
  marginTop: 10,
  gap: 15,
},

/* Preview Box */
photoPreviewBox: {
  width: 90,
  height: 90,
  borderRadius: 12,
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#F3F4F6",
},

photoPreview: {
  width: "100%",
  height: "100%",
},

/* Remove Button */
removeBtn: {
  position: "absolute",
  top: 6,
  right: 6,
  width: 22,
  height: 22,
  borderRadius: 11,
  backgroundColor: "#EF4444",
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
},

/* Add Photo Box */
addPhotoBox: {
  width: 90,
  height: 90,
  borderRadius: 12,
  borderWidth: 2,
  borderStyle: "dashed",
  borderColor: "#CBD5E1",
  backgroundColor: "#F8FAFC",
  justifyContent: "center",
  alignItems: "center",
},

addPhotoText: {
  fontSize: 11,
  fontWeight: "600",
  color: "#64748B",
  marginTop: 4,
  letterSpacing: 0.5,
},


  previewRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  previewItem: {
    width: 70,
    height: 70,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  previewImg: {
    width: "100%",
    height: "100%",
  },

  removeIcon: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#EF4444",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  mapBox: {
    height: 120,
    backgroundColor: "#eee",
    margin: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  submitBtn: {
    backgroundColor: "#2196F3",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
