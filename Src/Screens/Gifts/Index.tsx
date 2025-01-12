import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
const Gifts = () => {


  const Array = [
    {
      id: '1', image: require('../../Assets/Images/SmilingFace.png'), pakistani_Price: "4000EV ", Dolar_Price: '10$', Button:'Gift'
    },
    {
      id: '2', image: require('../../Assets/Images/Heart.png'), pakistani_Price: "5500EV", Dolar_Price: '12$', Button:'Gift'
    },
    {
      id: '3', image: require('../../Assets/Images/SmilingHeart-Eyes.png'), pakistani_Price: "6000EV", Dolar_Price: '13$',Button:'Gift'
    },
    {
      id: '4', image: require('../../Assets/Images/FlowerBouquet.png'), pakistani_Price: "8000EV", Dolar_Price: '15$', Button:'Gift'
    },
   
    {
      id: '5', image: require('../../Assets/Images/StarTrophy.png'), pakistani_Price: "10000EV ", Dolar_Price: '20$', Button:'Gift'
    },
    {
      id: '6', image: require('../../Assets/Images/Carriage.png'), pakistani_Price: "15000EV", Dolar_Price: '25$', Button:'Gift'
    },
   
   
  ]





  return (
    <View style={styles.container}>
      <Reuse_Header
        headerText='Gifts'
        backimage={require('../../Assets/Images/logoimage.png')}
       dotsimage={'null'}
      />


      <View style={styles.Flat_View}>
        <FlatList
          data={Array}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Card_View}>
              <Image source={item.image} style={styles.Image_Style} />
              <View style={styles.Texts_View}>
                <Text style={styles.Price_Text}>
                  {item.pakistani_Price}
                </Text>
                <Text style={styles.Dolar_Text}>
                  {item.Dolar_Price}
                </Text>
              </View>
              <TouchableOpacity style={styles.Button_View}>
                <Text style={styles.Button_Text}>
                  {item.Button}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}

        />
      </View>





    </View>
  )
}

export default Gifts