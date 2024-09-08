import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as SecureStore from "expo-secure-store";
import { Backend_Url } from '../constants';


const instance = axios.create({
  baseURL: Backend_Url,
});



export const fetchData = async (endpoint, config = {}) => {

  const token = await SecureStore.getItemAsync("AplusToken");

  try {
    const response = await instance.request({
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
      ...config,
    });


    return response.data;
  } catch (error) {
    console.error('Axios request error:', error);
    throw error;
  }
};

export const postData = async (endpoint, data, config = {}) => {
  const token = await SecureStore.getItemAsync("AplusToken");


  try {
    const response = await instance.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Axios POST request error:', error);
    throw error;
  }
};

export const deleteData = async (endpoint, config = {}) => {
  const token = await SecureStore.getItemAsync("AplusToken");


  // token = 

  try {
    const response = await instance.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Axios delete request error:', error);
    throw error;
  }
};

export const deleteAllData = async (endpoint, data, config = {}) => {
  const token = await SecureStore.getItemAsync("AplusToken");


  // 
  // token = 

  try {
    const response = await instance.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
      ...config,
      data, // Assuming Axios expects the data to be passed in the 'data' property for DELETE requests
    });

    return response.data;
  } catch (error) {
    console.error('Axios delete request error:', error);
    throw {
      message: 'Error making delete request',
      originalError: error,
    };
  }
};



export const activateCoupon = async (endpoint, data, config = {}) => {
  const token = await SecureStore.getItemAsync("AplusToken");


  try {
    const response = await instance.put(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Axios put request error:', error);
    throw error;
  }
};

export default instance;
