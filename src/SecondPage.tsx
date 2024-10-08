import React from 'react';
import { SafeAreaView, Image, Dimensions, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../styles';

type HomeScreenNavigationProp = StackNavigationProp<{
  Home: undefined;
  SecondPage: undefined;
}>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

// Data öğelerinin tipi
type CoffeeData = {
  id: string;
  page: any;
  title: string;
  description: string;
  price: string;
  image: any; // Image tipi için uygun bir değer (ImageSourcePropType kullanabilirsin)
};

const data: CoffeeData[] = [
  { id: '1', page:'Latte', title: 'Latte', description: 'Best Coffee', price: '$30', image: require('../img/Latte.png') },
  { id: '2', page:'BlackCoffee', title: 'Black Coffee', description: 'Best Coffee', price: '$28', image: require('../img/BlackCoffee.png') },
  { id: '3', page:'ColdCoffee', title: 'Cold Coffee', description: 'Best Coffee', price: '$30', image: require('../img/ColdCoffee.png') },
  { id: '4', page:'Espresso', title: 'Espresso', description: 'Best Coffee', price: '$25', image: require('../img/Espresso.png') }
];

const SecondPage: React.FC<Props> = ({ navigation }) => {
  Dimensions.get("screen");

  // renderItem fonksiyonuna tipi belirt
  const renderItem = ({ item }: { item: CoffeeData }) => (
    <View style={[styles.card, { width: '45%' }]}>
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
          <Image
            resizeMode="contain"
            style={{ width: 120, height: 150 }}
            source={item.image}
          />
          <Text style={styles.h3}>{item.title}</Text>
          <Text style={styles.h4}>{item.description}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.money, { marginTop: 2 }]}>
            <Text style={styles.h3}>{item.price}</Text>
            <Text style={styles.toCard}>Add To Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.page2bg}>
      <Text style={[styles.h1, { marginTop: 30, marginBottom: 20, fontSize: 30 }]}>
        It's a Great Day for Coffee
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ justifyContent: 'space-around', margin: 10 }}
      />
    </SafeAreaView>
  );
};

export default SecondPage;
