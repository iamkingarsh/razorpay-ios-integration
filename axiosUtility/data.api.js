import { useSelector } from 'react-redux';
import api from './api'
import * as SecureStore from "expo-secure-store";

export const fetchDataWithToken = async (endpoint) => {
  // const token = document.cookie.replace(/(?:(?:^|.*;\s*)AplusToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const token = await SecureStore.getItemAsync("AplusToken");



  console.log(token)
  try {
    const response = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(token)
    // Handle the response as needed
    console.log('API Response:', response);
  } catch (error) {
    // console.error('Error fetching data:', error);
  }
};