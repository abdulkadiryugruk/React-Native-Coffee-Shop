import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import SecondPage from './src/SecondPage';
import Latte from './src/Latte';
import Espresso from './src/Espresso';
import ColdCoffee from './src/ColdCoffee';
import BlackCoffee from './src/BlackCoffee';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Latte" component={Latte} />
        <Stack.Screen name="Espresso" component={Espresso} />
        <Stack.Screen name="ColdCoffee" component={ColdCoffee} />
        <Stack.Screen name="BlackCoffee" component={BlackCoffee} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
