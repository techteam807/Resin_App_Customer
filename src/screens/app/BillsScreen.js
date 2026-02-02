import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const BillsScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <ScrollView style={{ width: '90%', alignSelf: 'center', flex: 1 }}>
        {/* back & title */}
        <View style={{ width: '100%', paddingTop: 10, flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', flex: 1 }}>
            Billing & Invoices
          </Text>
          <View style={{ width: 40 }}></View>
        </View>

        {/* balance */}
        <View style={{ backgroundColor: '#ffffffac', width: '100%', padding:20, borderRadius:20, marginVertical:20 }}>
          <Text style={{ color: 'gray', fontSize:14, fontWeight:'600', marginVertical:5 }}>CURRENT BALANCE</Text>

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{gap:5}}>
              <Text style={{color:'black', fontSize:47, fontWeight:'700'}}>
                $0.00
              </Text>
              <View style={{flexDirection:'row', alignItems:'center', gap:3, backgroundColor:'#dcfddb', padding:5, borderRadius:20, paddingHorizontal:10}}>
                <Ionicons name="checkmark-circle-sharp" size={17} color="green" />
                <Text style={{color:'green'}}>PAID IN FULL</Text>
              </View>
            </View>

            <View style={{justifyContent:'space-evenly'}}>
                <Text>
                  Next Bill Date
                </Text>
                <Text>
                  Feb 28, 2024
                </Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BillsScreen