import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={()=>{
              if(searchTerm){
                router.push(`search/${searchTerm}`)
              }
            }}            
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// export default Home;

// import { StyleSheet, Text, View ,ScrollView,SafeAreaView} from 'react-native';
// import { useState } from 'react';
// import { Stack,useRouter } from 'expo-router';

// import {COLORS, SIZES, icons, images} from '../constants' 
// import {NearbyJobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

// const Home =()=> {
//     const router = useRouter()
//  return (
//     <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
//         <Stack.Screen
//            options={{
//             headerStyle:{backgroundColor:COLORS.lightWhite},
//             headerShadowVisible:false,
//             headerLeft:()=>(
//                 <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
//             ),
//             headerRight:()=>(
//                 <ScreenHeaderBtn iconUrl={images.profile} dimension='60%'/>
//             ),
//             headerTitle:''
//            }}
//         >
//         <ScrollView showsVerticalScrollIndicator={false}>
//          <View style={{flex:1,padding:SIZES.medium,height:'100%'}}>
//            <Welcome/>
//          </View>
//         </ScrollView>
//         </Stack.Screen>
//     </SafeAreaView>
//  );
// }
// export default function Home() {
// const Home =()=> {
//     const router = useRouter()
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
//         <Stack.Screen
//            options={{
//             headerStyle:{backgroundColor:COLORS.lightWhite},
//             headerShadowVisible:false,
//             headerLeft:()=>(
//                 <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
//             ),
//             headerRight:()=>(
//                 <ScreenHeaderBtn iconUrl={images.profile} dimension='60%'/>
//             ),
//             headerTitle:''
//            }}
//         >
//         <ScrollView showsVerticalScrollIndicator={false}>
//          <View style={{flex:1,padding:SIZES.medium}}>
//            <Welcome/>
//          </View>
//         </ScrollView>
//         </Stack.Screen>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default Home


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';

// import {COLORS, SIZES, icons, images} from '../constants';
// import {NearbyJobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';

// const Stack = createStackNavigator();

// const Home =() => {
//     const navigation = useNavigation();
//     return (
//       <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
//           <Stack.Navigator
//              screenOptions={{
//               headerStyle:{backgroundColor:COLORS.lightWhite},
//               headerShadowVisible:false,
//               headerLeft:()=>(
//                   <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
//               ),
//               headerRight:()=>(
//                   <ScreenHeaderBtn iconUrl={images.profile} dimension='60%'/>
//               ),
//               headerTitle:''
//              }}
//           >
//             <Stack.Screen name='Home'>
//             {() => (
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                   <View style={{flex:1,padding:SIZES.medium}}>
//                     <Welcome/>
//                     <Popularjobs/>
//                     <NearbyJobs/>
//                   </View>
//                 </ScrollView>
//             )}
//             </Stack.Screen>
//           </Stack.Navigator>
//       </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default Home;