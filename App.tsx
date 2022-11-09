import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';

export default function App() {

  function myTestFunction(a: number, b: number) {
    return a + b;
  }

  return (
    <ScrollView className="p-5">
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
        <Text>{myTestFunction(2, 2)}</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <View className='flex justify-center items-center bg-slate-200 p-4 rounded-md mt-6'>
        <Text>React Native</Text>
        <Text>Has Fast Refresh!</Text>
      </View>
      <StatusBar style="auto" />
    </ ScrollView>
  );
}

// Using Stylesheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
