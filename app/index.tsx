import { Text, TouchableHighlight, View } from "react-native";
import React from "react";
import NewSubscriptionPlanForm from "@/components/newSubscriptionPlanForm";
import Button from "@/components/ui/button";
import RazorpayCheckout from 'react-native-razorpay'
import { router } from "expo-router";

export default function Index() {

  const razorPay_Order_Url = "https://api.razorpay.com/v1/orders";
  
  
  const handleRazorPayPayment = async () => {
    const response = await fetch(razorPay_Order_Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization : "Basic c key",
      },
      body: JSON.stringify({
        amount: 100,
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1,
      }),
    });
    const data = await response.json();
    console.log(data);
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: data.amount,
      currency: data.currency,
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email:  ""
      },
      notes: {
        address: "Razorpay Corporate Office",
      },  
      theme: {
        color: "#3399cc",
      },
    };
    // const rzp1 = new Razorpay(options);
    // rzp1.open();
  }


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableHighlight onPress={() => {
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: '', // Your api key
    amount: '5000',
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '7013396624',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}><Text>Pay</Text></TouchableHighlight>
<TouchableHighlight onPress={() =>router.push("/_sitemap")}><Text>Redirect</Text></TouchableHighlight>

         {/* <TouchableHighlight onPress={() => {
                var options = {
                    description: 'Credits towards consultation',
                    image: 'https://i.imgur.com/3g7nmJC.jpg',
                    currency: 'INR',
                    key: '<YOUR_KEY_ID>',
                    amount: '5000',
                    name: 'Acme Corp',
                    order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
                    prefill: {
                        email: 'gaurav.kumar@example.com',
                        contact: '9191919191',
                        name: 'Gaurav Kumar'
                    },
                    theme: { color: '#53a20e' }
                }
                RazorpayCheckout.open(options).then((data: { razorpay_payment_id: any; }) => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                }).catch((error: { code: any; description: any; }) => {
                    // handle failure
                    alert(`Error: ${error.code} | ${error.description}`);
                });
            }}>payload </TouchableHighlight> */}
     
    </View>
  );
}
