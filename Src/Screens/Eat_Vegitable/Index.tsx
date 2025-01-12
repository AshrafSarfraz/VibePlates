import { View, Text,TouchableOpacity,FlatList,Image } from 'react-native'
import React from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
import Reuse_TextInput from '../../Components/Reuse_TextInput/Index'
const Eat_Vegitable = () => {


  const Array = [
    {id: '1', image: require('../../Assets/Images/comfort.png'), name: "Comfort food"},
    {id: '2', image: require('../../Assets/Images/Pakistani.png'), name: "Pakistani"},
    {id: '3', image: require('../../Assets/Images/british.png'), name: "British"},
    {id: '4', image: require('../../Assets/Images/europen.png'), name: "European"},
    {id: '5', image: require('../../Assets/Images/spanish.png'), name: "Spanish"},
    {id: '6', image: require('../../Assets/Images/barbe.png'), name: "Barbecue"},
    {id: '7', image: require('../../Assets/Images/steak.png'), name: "Steak"},
    {id: '8', image: require('../../Assets/Images/Korean.png'), name: "Korean"},
    {id: '7', image: require('../../Assets/Images/steak.png'), name: "Steak"},
    {id: '8', image: require('../../Assets/Images/Pakistani.png'), name: "Pakistani"},
  ]



  return (
    <View style={styles.container}>
      <Reuse_Header headerText='E&V' dotsimage={'null'} backimage={require("../../Assets/Images/logoimage.png")}/>

      <Reuse_TextInput  placeholder='Search' />

      <View style={styles.Flat_View}>
        <FlatList
          data={Array}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Card_View}>
               <Text style={styles.Name_Text}>
                  {item.name}
                </Text>
              <Image source={item.image} style={styles.Image_Style} />
           
               
            </TouchableOpacity>

          )}

        />
      </View>
    </View>
  )
}

export default Eat_Vegitable