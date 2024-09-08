import { View, Text, SafeAreaView, FlatList } from 'react-native'
import  React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONT, SIZES} from '../../constants/theme'
import { fetchData } from '../../axiosUtility/api'
import { Backend_Url } from '../../constants'
import NewSubscriptionPlanForm from '@/components/newSubscriptionPlanForm'

const SubscriptionPlansScreen = () => {
    const [subscriptionPlans, setSubscriptionPlans] = useState([])





    const fetchSubscriptionPlans = async () => {
        try {
            const response = await fetchData(`${Backend_Url}/razorpaySubscription/getallPlans`);
            console.log(response.plans)
            setSubscriptionPlans(response.plans.items)
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchSubscriptionPlans()
    }, [])


    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    gestureEnabled: true,
                    headerBackTitleVisible: true,
                    headerBackVisible: true,
                    headerLargeTitle: false,
                    headerTitle: "Please Select a Plan",
                    fullScreenGestureEnabled: true,
                }} />

            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: SIZES.medium, fontFamily: FONT.semiBold, color: COLORS.tertiary }}>Create a New Subscription Plan</Text>
                </View>
                <View >

                    <NewSubscriptionPlanForm />
                </View>

            </SafeAreaView>
        </>
    )
}

export default SubscriptionPlansScreen