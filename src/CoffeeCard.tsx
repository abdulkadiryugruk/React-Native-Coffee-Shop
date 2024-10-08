import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity,ImageSourcePropType} from 'react-native';
import { styles } from '../styles';

type Props = {
    image: ImageSourcePropType; // image kaynağı için doğru tip
    title: string;              // title string olacak
    price: number;              // price bir sayı olacak
    description: string;        // description string olacak
    volume: string;             // volume string olacak
  };

const CoffeeCard: React.FC<Props> = ({ image, title, price, description, volume }) => {
  const [adet, setAdet] = useState(0);

  const add = () => {
    setAdet(adet + 1);
  };

  const reduce = () => {
    setAdet(adet - 1);
    if (adet < 1) {
      setAdet(0);
    }
  };

  return (
    <View style={styles.container}>
      <Image resizeMode='contain'
        style={{
          width: '100%',
          height: 250,
        }}
        source={image}
      />
      <Text style={styles.headerText}>BEST COFFEE</Text>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={reduce}>
            <Text style={styles.counterButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{adet}</Text>
          <TouchableOpacity onPress={add}>
            <Text style={styles.counterButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
      <Text style={styles.volumeText}>
        <Text style={styles.boldText}>Volume:</Text> {volume}
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonTexts}>Add to</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;
