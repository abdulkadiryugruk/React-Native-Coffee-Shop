import React from 'react';
import { SafeAreaView } from 'react-native';
import CoffeeCard from './CoffeeCard'; 


const BlackCoffee = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CoffeeCard
          image={require('../img/BlackCoffee.png')}
          title="Black Coffee"
          price={28}
          description="A strong coffee with no milk."
          volume="60 ml"
        />
      </SafeAreaView>
    );
  };
export default BlackCoffee;
