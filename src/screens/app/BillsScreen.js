import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PAYMENT_DATA = [
  {
    id: 'WTR-882193',
    month: 'September 2023',
    amount: 38.20,
    status: 'paid',
  },
  {
    id: 'WTR-881042',
    month: 'August 2023',
    amount: 41.15,
    status: 'paid',
  },
  {
    id: 'WTR-879821',
    month: 'July 2023',
    amount: 39.50,
    status: 'paid',
  },
  {
    id: 'WTR-878511',
    month: 'June 2023',
    amount: 35.80,
    status: 'pending',
  },
];

const BillsScreen = () => {

  const navigation = useNavigation();

  const [activeTab, SetActiveTab] = useState('all');

  const filteredpayments =
    activeTab === 'all'
      ? PAYMENT_DATA
      : PAYMENT_DATA.filter(item => item.status === activeTab);



  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* back & title */}
        <View style={{ width: '90%', alignSelf: 'center' }}>

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
          <View style={{ backgroundColor: '#ffffffac', width: '100%', borderRadius: 20, marginVertical: 20, borderWidth: 1, borderColor: '#ddd', overflow: 'hidden' }}>
            <View style={{ backgroundColor: '#d6f2f9', alignItems: 'center', padding: 20 }}>
              <MaterialIcons name="water-drop" size={44} color="#04c7f8" />
            </View>
            <View style={{ padding: 20 }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: 'gray', fontSize: 15, letterSpacing: 0.5, fontWeight: '600', marginVertical: 5 }}>CURRENT BALANCE</Text>
                <View style={{ backgroundColor: '#fff1c3', alignItems: 'center', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 5 }}>
                  <Text style={{ color: '#a74f0c', fontWeight: '600', fontSize: 14 }}>
                    PENDING
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ gap: 5 }}>
                  <Text style={{ color: 'black', fontSize: 40, fontWeight: '700' }}>
                    $42.50
                  </Text>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <View>
                      <Text style={{ color: 'gray', fontWeight: '400', fontSize: 14 }}>
                        Next Bill Date
                      </Text>
                      <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>
                        Feb 28, 2024
                      </Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#3bb6ec', alignItems: 'center', borderRadius: 4, justifyContent: 'center' }}>
                      <Text style={{ color: 'white', fontWeight: '600', fontSize: 15, paddingHorizontal: 15 }}>
                        Pay Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>


          </View>
        </View>

        {/* Payment history */}
        <Text style={{ fontSize: 20, fontWeight: "700", marginHorizontal: 5, marginBottom: 10, marginHorizontal: 22 }}>
          Payment History
        </Text>


        {/* TABS */}
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e5e7eb', marginBottom: 10, width: '100%', alignSelf: 'center' }}>
          {['all', 'paid', 'pending'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => SetActiveTab(tab)}
              style={{ marginRight: 1, paddingBottom: 8, borderBottomWidth: activeTab === tab ? 2 : 0, borderColor: '#0ea5e9', marginHorizontal: 7, marginHorizontal: 22, }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: '600', color: activeTab === tab ? '#0ea5e9' : '#64748b' }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


        {/* PAYMENT LIST */}
        {/* PAYMENT LIST */}
        {filteredpayments.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 16,
              paddingHorizontal: 15,
              borderRadius: 15,
              marginBottom: 12,
              borderColor:'#0ea5e9',
              borderWidth:1,
              backgroundColor: '#fff',
              width:'97%',
              alignSelf:'center',
              
              // iOS shadow
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              
              // Android shadow
              elevation: 4,
            }}
          >
            {/* ICON */}
            <View style={{
              backgroundColor: '#e0f2fe',
              padding: 12,
              borderRadius: 16,
              marginRight: 14,
            }}>
              <Ionicons name="receipt-outline" size={22} color="#0284c7" />
            </View>

            {/* TEXT */}
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>
                  {item.month}
                </Text>

                <View style={{
                  backgroundColor: item.status === 'paid' ? '#dcfddb' : '#fff1c3',
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 6
                }}>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: item.status === 'paid' ? '#16a34a' : '#a74f0c'
                  }}>
                    {item.status.toUpperCase()}
                  </Text>
                </View>
              </View>

              <Text style={{ color: '#64748b', marginTop: 4 }}>
                ID: #{item.id} • ${item.amount.toFixed(2)}
              </Text>
            </View>

            {/* DOWNLOAD */}
            <TouchableOpacity style={{ padding: 10, borderRadius: 10 }}>
              <Ionicons name="download-outline" size={20} color="#0ea5e9" />
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

export default BillsScreen