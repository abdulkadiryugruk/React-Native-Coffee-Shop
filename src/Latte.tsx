import React from 'react';
import { SafeAreaView } from 'react-native';
import CoffeeCard from './CoffeeCard'; 

const Latte = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CoffeeCard
        image={require('../img/Latte.png')}
        title="Latte"
        price={30}
        description="Coffee is a major source of antioxidants in the diet. It has many health benefits"
        volume="60 ml"
      />
    </SafeAreaView>
  );
};

export default Latte;
