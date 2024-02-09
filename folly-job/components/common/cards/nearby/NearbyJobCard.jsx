import React from 'react'
import { View, Text } from 'react-native'
import { checkImageUrl } from '../../../../utils'
import styles from './nearbyjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NearbyJobCard = ({job,handleNavigate}) => {
  return (
   <TouchableOpacity style={styles.container(selectedJob,item)}
    onPress={handleNavigate}>
     <TouchableOpacity style={styles.logoContainer}>
      <Image 
       source={{ uri:checkImageUrl(job.employer_logo)?
        item.employer_logo :
        'httpa://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05h.jpg'
      }}
       resizeMode='contain'
       style={styles.logImage}
      />
     </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{item.job_ttle}</Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
     </TouchableOpacity>
  )
}

export default NearbyJobCard