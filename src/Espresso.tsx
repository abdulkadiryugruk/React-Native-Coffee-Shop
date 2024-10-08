import React from 'react';
import { SafeAreaView } from 'react-native';
import CoffeeCard from './CoffeeCard'; 


const Espresso = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CoffeeCard
          image={require('../img/Espresso.png')}
          title="Espresso"
          price={25}
          description="A concentrated coffee beverage brewed by forcing hot water."
          volume="30 ml"
        />
      </SafeAreaView>
    );
  };
export default Espresso;
