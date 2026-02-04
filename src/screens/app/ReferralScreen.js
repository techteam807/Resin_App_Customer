import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground, // Added this
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  Feather, 
  MaterialCommunityIcons, 
  Ionicons, 
  MaterialIcons 
} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const ReferralScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={refStyles.safeArea}>
      {/* Header */}
      <View style={refStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={refStyles.backBtn}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={refStyles.headerTitle}>Referral & Rewards</Text>
        <TouchableOpacity style={refStyles.moonBtn}>
          <AntDesign name="moon" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={refStyles.scrollContent}>
        
        {/* Blue Hero Card with Background Image */}
        <View style={refStyles.heroCardWrapper}>
          <ImageBackground 
            source={require('../../../assets/water-bg.jpg')} 
            style={refStyles.heroCard}
            imageStyle={{ borderRadius: 24 }}
          >
            {/* Overlay to match the blue theme from your photo */}
            <LinearGradient 
              colors={['rgba(0, 172, 254, 0.95)', 'rgba(0, 172, 254, 0.60)']} 
              style={refStyles.heroOverlay}
            >
              <View style={refStyles.giftBoxContainer}>
                <Feather name="gift" size={30} color="white" />
              </View>
              <Text style={refStyles.heroTitle}>Share the flow, earn rewards</Text>
              <Text style={refStyles.heroSubtitle}>Help your friends save on their water bill while you earn credits!</Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Give/Get Card */}
        <View style={refStyles.promoCard}>
          <Text style={refStyles.promoTitle}>Give $10, Get $10</Text>
          <Text style={refStyles.promoSubtitle}>Invite friends to manage their water service and you both get $10 off your next bill.</Text>
          
          <View style={refStyles.codeBox}>
            <Text style={refStyles.codeLabel}>YOUR UNIQUE CODE</Text>
            <TouchableOpacity style={refStyles.codeRow}>
              <Text style={refStyles.codeText}>WATER50</Text>
              <Ionicons name="copy" size={23} color="#0ea5e9" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={refStyles.shareButton}>
            <Feather name="share-2" size={20} color="white" />
            <Text style={refStyles.shareButtonText}>Share Code</Text>
          </TouchableOpacity>
        </View>

        {/* How it works */}
        <Text style={refStyles.sectionHeading}>How it works</Text>
        <View style={refStyles.grid}>
          <TouchableOpacity style={refStyles.gridItem}>
            <View style={refStyles.gridIconCircle}>
              <AntDesign name="usergroup-add" size={20} color="#0ea5e9" />
            </View>
            <Text style={refStyles.gridTitle}>For Friend</Text>
            <Text style={refStyles.gridText}>They get $10 off their first water bill payment.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={refStyles.gridItem}>
            <View style={refStyles.gridIconCircle}>
              <MaterialCommunityIcons name="piggy-bank" size={20} color="#0ea5e9" />
            </View>
            <Text style={refStyles.gridTitle}>For You</Text>
            <Text style={refStyles.gridText}>Get $10 off when they pay their first bill.</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Share */}
        <Text style={refStyles.sectionHeading}>Quick Share</Text>
        <View style={refStyles.shareRow}>
          <View style={refStyles.shareIconItem}>
            <TouchableOpacity style={[refStyles.shareIconCircle, {backgroundColor: '#25D366'}]}>
              <Ionicons name="logo-whatsapp" size={24} color="white" />
            </TouchableOpacity>
            <Text style={refStyles.shareIconLabel}>WhatsApp</Text>
          </View>
          <View style={refStyles.shareIconItem}>
            <TouchableOpacity style={[refStyles.shareIconCircle, {backgroundColor: '#3b82f6'}]}>
              <Feather name="mail" size={24} color="white" />
            </TouchableOpacity>
            <Text style={refStyles.shareIconLabel}>Email</Text>
          </View>
          <View style={refStyles.shareIconItem}>
            <TouchableOpacity style={[refStyles.shareIconCircle, {backgroundColor: '#6366f1'}]}>
              <MaterialIcons name="chat" size={24} color="white" />
            </TouchableOpacity>
            <Text style={refStyles.shareIconLabel}>SMS</Text>
          </View>
          <View style={refStyles.shareIconItem}>
            <TouchableOpacity style={[refStyles.shareIconCircle, {backgroundColor: '#e5e7eb'}]}>
              <Feather name="more-horizontal" size={24} color="gray" />
            </TouchableOpacity>
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

export default ReferralScreen;

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
    paddingVertical: 15,
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
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 50
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  heroCardWrapper: {
    borderRadius: 24,
    overflow: 'hidden', // Required for ImageBackground borderRadius to work
    marginBottom: 20,
    marginTop: 10
  },
  heroCard: {
    width: '100%',
    minHeight: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroOverlay: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
    borderRadius: 24
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
    color: '#0ea5e9',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
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