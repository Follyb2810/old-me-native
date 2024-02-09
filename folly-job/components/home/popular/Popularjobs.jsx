import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation,useRouter } from 'expo-router'; // Change from 'useRouter' to 'useNavigation'
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import useFetch from './../../../hook/useFetch.js'
import PopularJobCard from '../../common/cards/popular/PopularJobCard.jsx';
const Popularjobs = () => {
  const router = useRouter(); // Change from 'router' to 'navigation'
  const navigation = useNavigation(); // Change from 'router' to 'navigation'
  // const isLoading = false;
  // const error = false;
 const [selectJob,setSelectedJob]= useState()
  const {data,isLoading,error} = useFetch('search',{
    query:'React developer',
    num_pages:1
  })
  const handleCardPress =(item)=>{
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  console.log()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} 
               selectedJob={selectJob}
               handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.id?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
