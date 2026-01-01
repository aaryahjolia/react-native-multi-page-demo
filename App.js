import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import "./global.css"

import Quotes from './components/Quotes';
import Counter from './components/Counter';
import ToDo from './components/ToDo';

const AppBackground = "bg-white";
const Tab = createBottomTabNavigator();

const routeNames = {
  "CounterName": "Counter Page",
  "QuotesName": "Quotes Page",
  "ToDoName" : "To Do Page"
}

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView className={`flex-1 ${AppBackground}`}>
    //     <Counter />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === routeNames.CounterName) {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === routeNames.QuotesName) {
              iconName = focused ? 'text' : 'text-outline';
            } else if (route.name === routeNames.ToDoName) {
              iconName = focused ? 'reader' : 'reader-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={routeNames.CounterName} component={Counter} />
        <Tab.Screen name={routeNames.QuotesName} component={Quotes} />
        <Tab.Screen name={routeNames.ToDoName} component={ToDo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles container
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
