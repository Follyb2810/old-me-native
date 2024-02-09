import React from 'react'
import { View, Text, FlatList,TouchableOpacity } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const Tabs = ({tabs,activeTab,setctiveTab}) => {

  const TabButton =({name,activeTab,onHandleSearchType})=>{
    <TouchableOpacity
     style={styles.btn(name,activeTab)}
     onPress={onHandleSearchType}
    >
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
    </TouchableOpacity>
  }
  return (
    <View style={styles.container}>
    <FlatList
     data={tabs}
     renderItem={({item})=>(
      <TabButton
        name={item}
        activeTab={activeTab}
        onHandleSearchType={()=>setctiveTab(item)}
      />
     )}
     horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor={item=>item}
     contentContainerStyle={{columnGap:SIZES.small/2}}
    />
      <Text>Tabs</Text>
    </View>
  )
}

export default Tabs