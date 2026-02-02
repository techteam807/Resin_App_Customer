import React from "react";
import { View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Svg, { Path } from "react-native-svg";
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: "90%", alignSelf: "center" }}
    >

      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          justifyContent: "space-between",
          alignItems: "center",
          width: '98%',
          alignSelf: 'center',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#6e6969" }}>Good Morning,</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{ fontSize: 22, fontWeight: "700" }}
          >
            HARIKRUSHNA LABELS PRIVATE LIMITED
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity style={{ backgroundColor: '#ffffffac', padding: 7, borderColor: '#ddd', borderWidth: 2, borderRadius: 20 }}>
            <Ionicons name="notifications-outline" size={23} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#def4f9', padding: 7, borderColor: '#a6e5f3', borderWidth: 2, borderRadius: 20 }}>
            <Ionicons name="document-text-outline" size={24} color="#00d0ff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* water card */}
      <View
        style={{
          backgroundColor: "#14a3e3",
          borderRadius: 20,
          padding: 20,
          marginTop: 20,
          overflow: "hidden",
        }}
      >
        {/* water svg */}
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 150 200"
          style={{
            position: "absolute",
            right: -75,
            bottom: -10,
          }}
        >
          <Path
            d="M100 20 C100 20 40 90 40 140 A60 60 0 1 0 160 140 C160 90 100 20 100 20 Z"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="12"
          />
        </Svg>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#dff4ff", letterSpacing: 1 }}>
            CURRENT CONSUMPTION
          </Text>

          <View
            style={{
              backgroundColor: "#3bb6ec",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>LIVE</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end", marginTop: 10 }}>
          <Text style={{ fontSize: 40, color: "#fff", fontWeight: "700" }}>
            4.2
          </Text>
          <Text style={{ color: "#ccefff", marginBottom: 6, marginLeft: 4 }}>
            kL
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <FontAwesome6 name="arrow-trend-down" size={14} color="#ccefff" />
          <Text style={{ color: "#ccefff" }}>
            12% less than last month
          </Text>
        </View>

        <View
          style={{
            height: 6,
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 10,
            marginTop: 14,
          }}
        >
          <View
            style={{
              width: "65%",
              height: "100%",
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#ccefff" }}>Usage: 4,200L</Text>
          <Text style={{ color: "#ccefff" }}>Limit: 6,500L</Text>
        </View>
      </View>

      {/* billing & plan */}
      <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* bill */}
        <TouchableOpacity style={{ width: '49%' }} onPress={() => navigation.navigate('Bills')}>
          <View style={{ backgroundColor: '#ffffffac', padding: 20, borderRadius: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <View style={{ backgroundColor: '#dcfddb', padding: 8, borderRadius: 6 }}>
                <Ionicons name="receipt-outline" size={18} color="green" />
              </View>
              <Text style={{ color: 'gray' }}>
                BILLING
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ letterSpacing: 1, color: '#000', fontSize: 20, fontWeight: "700", paddingLeft: 2 }}>
                ₹0
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Octicons name="dot-fill" size={20} color="#12cc01" />
              <Text style={{ color: '#12cc01' }}>Paid</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* plan */}
        <TouchableOpacity style={{ backgroundColor: '#ffffffac', padding: 20, borderRadius: 20, width: '49%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <View style={{ backgroundColor: '#d6e6fc', padding: 8, borderRadius: 6 }}>
              <Octicons name="verified" size={20} color="#000dff" />
            </View>
            <Text style={{ color: 'gray' }}>
              PLAN
            </Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ letterSpacing: 1, color: '#000', fontSize: 12, fontWeight: "700", paddingLeft: 2 }}>
              Betterwater Yearly
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ color: 'gray' }}>ACTIVE</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* action */}
      <View style={{ paddingTop: 25 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '96%', alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Quick Actions
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#00d5ff', fontSize: 15, fontWeight: "400" }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        {/* icon */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5, padding: 25, height: "auto" }}>

          <TouchableOpacity style={{ alignItems: 'center', gap: 5, height: '100%' }}>
            <View style={{ backgroundColor: '#ffffffac', padding: 15, alignItems: 'center', borderWidth: 2, borderColor: '#ddd', borderRadius: 17 }}>
              <Entypo name="credit-card" size={25} color="#00d5ff" />
            </View>
            <Text style={{ fontSize: 12, color: 'gray', fontWeight: "700" }}>
              Pay Bill
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', gap: 5, height: '100%' }}>
            <View style={{ backgroundColor: '#ffffffac', padding: 15, alignItems: 'center', borderWidth: 2, borderColor: '#ddd', borderRadius: 17 }}>
              <AntDesign name="home" size={25} color="orange" />
            </View>
            <Text style={{ fontSize: 12, color: 'gray', fontWeight: "700" }}>
              Report Leak
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', gap: 5, height: '100%' }}>
            <View style={{ backgroundColor: '#ffffffac', padding: 15, alignItems: 'center', borderWidth: 2, borderColor: '#ddd', borderRadius: 17 }}>
              <Ionicons name="calendar-clear-outline" size={25} color="blue" />
            </View>
            <Text style={{ fontSize: 12, color: 'gray', fontWeight: "700" }}>
              Book Service
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', gap: 5, height: '100%' }}>
            <View style={{ backgroundColor: '#ffffffac', padding: 15, alignItems: 'center', borderWidth: 2, borderColor: '#ddd', borderRadius: 17 }}>
              <MaterialCommunityIcons name="wallet-giftcard" size={25} color="#fe4343" />
            </View>
            <Text style={{ fontSize: 12, color: 'gray', fontWeight: "700" }}>
              Refer
            </Text>
          </TouchableOpacity>
        </View>

        {/* tip */}
        <TouchableOpacity style={{ backgroundColor: '#dde8fd', flexDirection: 'row', padding: 20, alignItems: 'center', gap: 15, overflow: 'hidden', paddingHorizontal: 15, borderRadius: 20, borderWidth: 1, borderColor: '#c2c5fa' }}>
          <View style={{ backgroundColor: '#c2d7ff', alignItems: 'center', borderRadius: 25 }}>
            <MaterialIcons name="lightbulb-outline" size={24} color="blue" style={{ padding: 10 }} />
          </View>
          <View style={{ flex: 1, gap: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: '#4d4d4d' }}>
              Water Saving Tip
            </Text>
            <Text style={{ color: '#262ec0', fontWeight: "400" }}>
              Fixing a leaky faucet can save up to 3kL of water a month
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* recent activity */}
      <View style={{ paddingTop: 25, paddingBottom: 20 }}>
        <View style={{ paddingBottom: 20, width: '96%', alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Recent Activity
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 18, alignItems: 'center', backgroundColor: '#ffffffac', borderWidth: 1, borderColor: '#ddd', borderRadius: 20, }}>
          <View style={{ backgroundColor: '#e3e3e3', padding: 8, borderRadius: 25, alignItems: 'center' }}>
            <Ionicons name="document-text-outline" size={23} color="gray" />
          </View>

          <View style={{ gap: 5 }}>
            <Text style={{ color: '#000', fontSize: 17, fontWeight: "500" }}>
              Bill Paid ( Jan 2024 )
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
              <Text style={{ color: 'gray' }}>
                24 Jan
              </Text>
              <Octicons name="dot-fill" size={10} color="gray" />
              <Text style={{ color: 'gray' }}>
                ID #WTR-11019
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>
              ₹1,200
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingBottom: 20}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 18, alignItems: 'center', backgroundColor: '#ffffffac', borderWidth: 1, borderColor: '#ddd', borderRadius: 20 }}>
          <View style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 25, alignItems: 'center' }}>
            <FontAwesome5 name="pen-alt" size={18} color="gray" />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 55, alignItems: 'center' }}>
            <View style={{ gap: 5 }}>
              <Text style={{ color: '#000', fontSize: 17, fontWeight: "500" }}>
                Service Complated
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Text style={{ color: 'gray' }}>
                  12 Jan
                </Text>
                <Octicons name="dot-fill" size={10} color="gray" />
                <Text style={{ color: 'gray' }}>
                  Pipe Leak Fix
                </Text>
              </View>
            </View>

            <View>
              <FontAwesome5 name="check-circle" size={24} color="lightgreen" />
            </View>
          </View>
        </View>
        <View></View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}