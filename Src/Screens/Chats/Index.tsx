import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
const Chats = () => {


  const Array = [
    {
      id: '1', image: require('../../Assets/Images/Alex.png'), name: "Alex Hales", Detail: 'My pleasure. All the best \n for...', day: "Today", time: "  10.00 AM"
    },
    {
      id: '2', image: require('../../Assets/Images/Aiden.png'), name: "Aidan Allende", Detail: 'Your solution is great!', day: "Yesterday", time: "  18.00 PM"
    },
    {
      id: '3', image: require('../../Assets/Images/Salvotor.png'), name: "Salvatore Heredia", Detail: 'Thanks for the help ', day: "20/12/2023", time: " 10.30 AM"
    },
    {
      id: '4', image: require('../../Assets/Images/Alex.png'), name: "Delaney Mangino", Detail: 'I have received, thank \n you v...', day: "14/12/2023", time: "17.00 PM"
    },
   
    {
      id: '5', image: require('../../Assets/Images/Aiden.png'), name: "Aidan Allende", Detail: 'Your solution is great!', day: "Yesterday", time: "  18.00 PM"
    },
    {
      id: '6', image: require('../../Assets/Images/Salvotor.png'), name: "Salvatore Heredia", Detail: 'Thanks for the help ', day: "20/12/2023", time: " 10.30 AM"
    },
    {
      id: '7', image: require('../../Assets/Images/Alex.png'), name: "Delaney Mangino", Detail: 'I have received, thank \n you v...', day: "14/12/2023", time: "17.00 PM"
    },
   
  ]





  return (
    <View style={styles.container}>
      <Reuse_Header
        headerText='Chats'
        backimage={require('../../Assets/Images/logoimage.png')}

      />


      <View style={styles.Flat_View}>
        <FlatList
          data={Array}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Card_View}>
              <Image source={item.image} style={styles.Image_Style} />
              <View style={styles.Texts_View}>
                <Text style={styles.Name_Text}>
                  {item.name}
                </Text>
                <Text style={styles.My_Text}>
                  {item.Detail}
                </Text>
              </View>
              <View style={styles.Days_View}>
                <Text style={styles.Day_Text}>
                  {item.day}
                </Text>
                <Text style={styles.Day_Text}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          )}

        />
      </View>





    </View>
  )
}

export default Chats