import React from 'react';
import {
  SafeAreaView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { styles } from '../styles';


type HomeScreenNavigationProp = StackNavigationProp<{
  Home: undefined;
  SecondPage: undefined;
}>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  Dimensions.get('screen');

  return (
    <SafeAreaView style={styles.background}>
      <Image
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          position: 'absolute',
        }}
        source={require('../img/bg.png')}
      />

      <View style={styles.content}>
        <Text style={styles.h1}>Coffee Shop</Text>

        <Text style={styles.text}>Feeling Low? Take a Sip of Coffee</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SecondPage')}
        >
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default Home;
