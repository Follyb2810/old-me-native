import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Change from 'expo-router' to '@react-navigation/native'
import styles from './nearbyjobs.style.js';
import { COLORS, SIZES } from '../../../constants';
import useFetch from './../../../hook/useFetch.js';
import PopularJobCard from '../../common/cards/nearby/NearbyJobCard.jsx';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard.jsx';
import { useRouter } from 'expo-router';

const Nearbyjobs = () => {
  const router = useRouter()
  const navigation = useNavigation(); // Change from 'router' to 'navigation'

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  });

  console.log();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Job</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => navigation.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
