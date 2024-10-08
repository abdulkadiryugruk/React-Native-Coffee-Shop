import React from 'react';
import { SafeAreaView } from 'react-native';
import CoffeeCard from './CoffeeCard'; 


const ColdCoffee = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CoffeeCard
          image={require('../img/ColdCoffee.png')}
          title="Cold Coffee"
          price={30}
          description="A refreshing cold coffee drink."
          volume="60 ml"
        />
      </SafeAreaView>
    );
  };
export default ColdCoffee;
