import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Input from './ui/Input'
import { APP_DESCRIPTION, APP_NAME, COLORS, FONT, SIZES } from '../constants/theme';
import { SelectList } from 'react-native-dropdown-select-list'
import { fetchData, postData } from '../axiosUtility/api';
import Button from './ui/button';
import RazorpayCheckout from 'react-native-razorpay';
// import { EXPO_PUBLIC_RAZORPAY_KEY_ID } from '@env';
import { router } from 'expo-router';

const NewSubscriptionPlanForm = () => {
    const [selectedService, setSelectedService] = useState();
    const [services, setServices] = useState([])
    const [above12, setAbove12] = useState()
    const [below12, setBelow12] = useState()
    const [plans, setPlans] = useState([])
    const [plan, setPlan] = useState([])
    const [name, setName] = useState('')
    const [period, setPeriod] = useState('per month')
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)



    const getPlans = async () => {
        try {
            const response = await fetchData('/planPricing/getall')
            console.log('response', response.data)
            setPlans(response.data)

        } catch (error) {
            console.log('error', error)
        }
    }

    const getServices = async () => {

        try {
            const response = await fetchData('/service/allwithitems')
            console.log('response', response)
            const filteredServices = response.services.filter((service) => service.isSubscriptionService === true).map((service) => { return service })
            console.log('filteredServices', filteredServices)
            const formatedServices = filteredServices.map((service) => {
                return {
                    key: service._id,
                    value: service.serviceTitle
                }
            })
            setServices(formatedServices)

        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getPlans()
        getServices()
    }, [])

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    const [selected, setSelected] = React.useState("");

    const fetchPlans = async (service, period) => {

        console.log('service', service, period);
        const filteredPlans = plans.filter((plan) => {
            return plan.service._id === service && plan.periodPlan === period;
        });
        setPlan(filteredPlans[0])
        // form.setValue("name", filteredPlans[0]?.planName || "")
        setName(filteredPlans[0]?.name || "")
        console.log('filteredplan', filteredPlans);
    };

    useEffect(() => {
        fetchPlans(selectedService, period)
        const setTotalAmount = () => {
            const above12Price = plan?.above12?.amount || 0;
            const below12Price = plan?.below12?.amount || 0;

            const adult_qty = above12 || 0
            const kids_qty = below12 || 0

            const totalAbove12Amount = above12Price * adult_qty;
            const totalBelow12Amount = below12Price * kids_qty;

            const totalAmount = totalAbove12Amount + totalBelow12Amount || 0
            console.log("amount", totalAmount);
            setAmount(parseInt(totalAmount))

        }
        setTotalAmount()

    }, [plan, above12, below12]);

    const handleSubscription = async () => {
        if (plan) {

            setLoading(true)
            const data = {
                period: "monthly",
                interval: period === "per month" ? 1 : values.period === "per 3 months" ? 3 : values.period === "per 6 months" ? 6 : values.period === "per 9 months" ? 9 : 12,
                item: {
                    name: name || "",
                    amount: amount * 100,

                },
                kids_qty: below12,
                adult_qty: above12,
                service_id: selectedService,
                // user_id: customerData._id,
            };

            try {
                const response1 = await postData('/razorpaySubscription/createNewPlan', data);
                console.log('response1', response1);
                const responseData = {
                    plan_id: response1?.plan?.id,
                    total_count: 12,
                    quantity: 1,
                    notes: response1?.plan.notes
                };

                const response2 = await postData('/razorpaySubscription/createSubscriptionCheckout', responseData);

                console.log('response2', response2);
                const data2 = {
                    plan_id: response1.id,
                    quantity: 1,
                    total_count: 1,

                }
                // const response = await postData('/razorpaySubscription/createSubscriptionCheckout', data) as any

                // console.log(response, 'teesr')
                // const options = {
                //     key: process.env.NEXT_PUBLIC_EXPO_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                //     amount: response2?.data?.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                //     currency: "INR",
                //     name: BrandName,
                //     description: "Test Transaction",
                //     image: "https://example.com/your_logo",
                //     subscription_id: response2?.data?.id,
                //     redirect: true,
                //     recurring: true,
                //     handler: async function (response) {
                //         // console.log('rajooor pay', response);
                //         const data = {
                //             ...response,
                //             razorpay_plan_id: response1?.plan?.id,
                //             customer_id: values.customer_id,
                //             subscription_id: response1.subscription._id

                //         }

                //         const reply = await postData('/razorpaySubscription/subscriptionTransaction/save', data)
                //         console.log(reply)
                //         alert(response.razorpay_payment_id);
                //         alert(response.razorpay_subscription_id);
                //         alert(response.razorpay_signature);
                //         // instance.payments.fetch(paymentId)
                //     },
                //     // prefill: {
                //     //     name: CustomerData?.fullName,
                //     //     email: CustomerData?.email,
                //     //     contact: CustomerData?.mobileNumber,
                //     // },


                // }
                var options = {
                    description: APP_DESCRIPTION,
                    image: 'https://i.imgur.com/3g7nmJC.jpg',
                    currency: 'INR',
                    key: "rzp_test_bXDoN2Q1QTkbvw",
                    amount: response2?.data?.amount_due,
                    name: APP_NAME,
                    subscription_id: response2?.data?.id,//Replace this with an order_id created using Orders API.
                    prefill: {
                        email: customerData.email,
                        contact: customerData.mobileNumber,
                        name: customerData.fullName
                    },
                    theme: { color: COLORS.primary }
                }
                setLoading(false)
                RazorpayCheckout.open(options).then(async (data) => {
                    // handle success
                    setLoading(true)
                    const data2 = {
                        ...data,
                        razorpay_plan_id: response1?.plan?.id,
                        customer_id: customerData._id,
                        subscription_id: response1.subscription._id

                    }

                    const reply = await postData('/razorpaySubscription/subscriptionTransaction/save', data2)

                    setLoading(false)

                    router.push('/orderSuccessScreen')
                }).catch((error) => {
                    // handle failure
                    console.log('error', error)
                    // alert(`Error: ${error.code} | ${error.description}`);
                });
                // console.log('API Response:', response2);


                // Optionally, you can redirect the user or perform other actions upon successful submission.
                // router.push('/services');
            } catch (error) {
                setLoading(false)
                // console.error('Error creating Item:', error);

            }
        }
    }


    return (
        <>
            {loading ? <View style={{ justifyContent: 'center', height: "80%", alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View> :
                <View style={{ padding: 20, flexDirection: 'column', gap: 4 }}>
                    {/* <Text>newSubscriptionPlanForm</Text> */}
                    <View>
                        {/* <Text style={{ fontSize: SIZES.medium }}>Select a Service</Text> */}

                        <SelectList
                            setSelected={(key) => setSelectedService(key)}
                            data={services}
                            fontFamily={FONT.medium}
                            dropdownShown={true}
                            search={false}
                            defaultOption={selectedService}
                            dropdownItemStyles={
                                {
                                    padding: 10,
                                    backgroundColor: COLORS.white2,
                                    margin: 4,
                                    marginHorizontal: 15,
                                    borderRadius: 8,

                                    // borderBottomWidth: 0.5,
                                    // borderBottomColor: COLORS.gray2
                                }
                            }
                            boxStyles={{
                                backgroundColor: COLORS.white2,
                                borderRadius: 8,
                                // padding: 0,
                                borderWidth: 0.8,
                                marginBottom: 15,

                                borderColor: COLORS.gray2

                            }}
                            placeholder='Select Service'
                            inputStyles={{
                                color: COLORS.gray2,
                                fontFamily: FONT.medium,
                                paddingTop: 3,
                                fontSize: SIZES.medium,

                            }}
                            save="key"
                        />

                        {/* <View>
                    <Picker
                        selectedValue={selectedLanguage}
                        placeholder='Select Service'
                        mode='dropdown'
                        ref={pickerRef}
                        collapsable={true}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Monthly" color={COLORS.primary} value="monthly" />
                        <Picker.Item label="Yearly" value="yearly" />
                    </Picker>

                </View> */}
                    </View>
                    <Input
                        label={true}
                        labelTitle="Enter No. of Adults"
                        placeholder="Enter No. of Adults"
                        type="numeric"
                        value={above12}
                        onTextChange={(text) => setAbove12(text)}
                        description="Adults above 12 years of age"

                    />
                    <Input
                        label={true}
                        labelTitle="Enter No. of Kids"
                        placeholder="Enter No. of Kids"
                        type="numeric"
                        value={below12}
                        onTextChange={(text) => setBelow12(text)}
                        description="Kids below 12 years of age"
                    />
                    {/* <Picker
                selectedValue={selectedService}

                placeholder='Select Plan Period'
                mode='dropdown'

                ref={pickerRef}
                collapsable={true}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedService(itemValue)
                }>
                <Picker.Item label="Monthly" color={COLORS.primary} value="monthly" />
                <Picker.Item label="Yearly" value="yearly" />
            </Picker> */}
                    <View >
                        {amount > 0 ?
                            <Button variant="primary" onPress={() => handleSubscription()}>Subscribe - Rs. {amount} / Month
                                {/* {new Intl.NumberFormat('en-US', {
                     style: 'currency',
                     currency: 'INR',
                    }).format(finalTotal2)} */}
                            </Button>
                            : null}
                    </View>
                </View>}
        </>

    )
}

export default NewSubscriptionPlanForm
