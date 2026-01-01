import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Counter() {

  const [counter, setcounter] = useState(0);

  const incrementCounter = () => {
    setcounter(counter + 1);
  }

  const resetCounter = () => {
    setcounter(0);
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-100 justify-center px-5">
      <Text className="text-4xl text-center p-5 font-semibold">A Not so 'Cool' Counter</Text>

      {/* Button */}
      <TouchableOpacity className="bg-blue-500 py-3 px-6 rounded-md shadow-md" onPress={incrementCounter}>
        <Text className="text-white text-lg font-bold text-center">
          Increment
        </Text>
      </TouchableOpacity>


      {/* Counter Text */}
      <Text className="text-2xl text-center p-5">You have clicked <Text className="text-green-800 font-bold">{counter}</Text> times</Text>

      <TouchableOpacity className="bg-red-600 py-3 shadow-md my-7 rounded-xl" onPress={resetCounter}>
        <Text className="text-white text-lg font-bold text-center">
          Reset
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffff',
  },
});