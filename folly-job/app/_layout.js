import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { View, ActivityIndicator } from 'react-native'
import { Stack } from 'expo-router'

const Layout = () => {
 const [fontsLoaded, fontError] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
 });

 const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
 }, [fontsLoaded, fontError]);

 if (!fontsLoaded && !fontError) {
    // Font is still loading, return a loading indicator or null
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
 }

 return (
    <Stack onLayout={onLayoutRootView}/>
 );
}

export default Layout
// import { Stack } from 'expo-router'
// import React, { useCallback } from 'react'
// import { useFonts } from 'expo-font'
// import * as SplashScreen from 'expo-splash-screen'
// const Layout = () => {
   
//     const [fontsLoaded, fontError] = useFonts({
//         DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
//         DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
//         DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
//       });
    
//       const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded || fontError) {
//           await SplashScreen.hideAsync();
//         }
//       }, [fontsLoaded, fontError]);
    
//       if (!fontsLoaded && !fontError) {
//         // Font is still loading, return a loading indicator or null
//         return null;
//       }
   

//     return <Stack onLayout={onLayoutRootView}/>
// }

// export default Layout

 // const [fontsLoaded, fontError] = useFonts({
    //     // DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    //     DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    //     DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
    //   });
    
    //   const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded || fontError) {
    //       await SplashScreen.hideAsync();
    //     }
    //   }, [fontsLoaded, fontError]);
    
    //   if (!fontsLoaded && !fontError) {
    //     return null;
    //   }

 // const [fontsLoaded] = useFonts({
        // DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        // DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        // DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
    // })
    // const onLayoutRootView = useCallback(async ()=>{
    //     await SplashScreen.hideAsync()
    // },[fontsLoaded])

    // if(!fontsLoaded) return null