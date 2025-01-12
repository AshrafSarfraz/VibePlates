import { View, Text, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Gif, Logo } from '../../../Themes/Images'
import { NavigationProp, useNavigation } from '@react-navigation/native'


interface SplashScreenProps {
  navigation:any;
}

const Splash_Screen:React.FC<SplashScreenProps>=({navigation}) => {
  
setTimeout(() => {
   navigation.navigate('OnBoarding')
}, 3000);

  return (
    <View style={styles.Main_Container} >
      <Image source={Logo} style={styles.Logo_Img} />
      <Image source={Gif}    style={styles.Gif_Img} />
    </View>
  )
}

export default Splash_Screen

const styles=StyleSheet.create({
 Main_Container:{
     flex:1,
     paddingTop:'20%',
     paddingBottom:'6%',
    backgroundColor:Colors.White,
    alignItems:'center',
    justifyContent:'space-between'
 },
 Logo_Img:{
  width:'55%',
  height:'45%',
  resizeMode:'cover'
},
Gif_Img:{
  width:70,height:70
},
}
)