import React from 'react'
import { View, Text,TouchableOpacity, Linking } from 'react-native'
import { icons } from '../../../constants'
import styles from './footer.style'


const Footer = ({url}) => {
  return (
    <View tyle={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          styles={styles.likeBtnImage}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}
        onPress={()=>Linking.openURL(url)}
      >
       <Text style={styles.applyBtnText}>Aplly fot job</Text>
      </TouchableOpacity>
      <Text>Footer</Text>
    </View>
  )
}

export default Footer