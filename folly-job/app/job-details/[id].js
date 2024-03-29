import React, { useCallback, useState } from 'react'
import { Text, View ,SafeAreaView, ActivityIndicator} from 'react-native'
import {Stack, useRouter,useSearchParams} from 'expo-router'


import { Company,JobAbout,JobFooter,JobTabs,ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, SIZES, icons } from '../../constants'
import useFetch from '../../hook/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'

const tabs = ['About','Qualifications','Responsibilities']
const JobeDetails = () => {
    const [refreshing,setRefreshing] = useState(false)
    const [activeTab,setActiveTab] = useState(tabs[0])
    const params = useSearchParams()
    const router = useRouter()
    const {data,isLoading,error,refetch} = useFetch('job-details',{
        job_id:params.id
    })

    const onRefresh =useCallback(()=>{
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    },[])
    const displayTabContent =()=>{
        switch(activeTab){
            case "Qualifications":
            return <Specifics
            
                 tittle='Qualifications'
                 points={data[0].job_highlights?.Qualificatios?? ['N/A'] }
            />
            break
            case 'About':
            return <JobAbout
              info={data[0].hob_description ?? 'NO data provided'}
            />
            break
            case 'Responsibilities':
            return <Specifics
            
            tittle='Responsibilities'
            points={data[0].job_highlights?.Responsibilities?? ['N/A'] }
       />
            break
            default:
            return 
            break
        }
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
             options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn
                     iconUrl={icons.left}
                     dimension='60%'
                     handlePress={()=>router.back()}
                    />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn
                     iconUrl={icons.share}
                     dimension='60%'
                    />
                ),
                headerTitle:''
             }}
            />
            <>
              <ScrollView 
                showsVerticalScrollIndicator={false} 
                 refreshControl={<RefreshControl 
                 refreshing={refreshing} 
                  onRefresh={onRefresh}/>} >

                  {
                    isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ):error?(
                        <Text>Something went wrong</Text>
                    ):data.length ===0 ? (
                        <Text>No data</Text>
                    ):(
                        <View style={{padding:SIZES.medium,paddingBottom:100}}>
                          <Company
                           companyLogo ={data[0].employer_logo}
                           jobTitle ={data[0].job_title}
                           companyName ={data[0].employer_name}
                           location ={data[0].jpb_country}
                          />
                          <JobTabs
                          
                           tabs={tabs}
                           activeTab={activeTab}
                           setActiveTab={setActiveTab}
                          />
                          {displayTabContent()}
                        </View>
                    )
                  }
              
              </ScrollView>
              <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/result'}/>
            </>
            
        </SafeAreaView>
    )
}

export default JobeDetails
