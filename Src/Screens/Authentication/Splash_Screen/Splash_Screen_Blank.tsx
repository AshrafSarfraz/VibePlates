import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'

interface SplashScreenProps {
    navigation:any,
}



const Splash_Screen_Blank:React.FC<SplashScreenProps>= ({navigation}) => {
  
 setTimeout(() => {
     navigation.navigate('SplashScreen')
  }, 2000);

    return (
    <View style={styles.Main_Container} >
  
    </View>
  )
}

export default Splash_Screen_Blank
const styles=StyleSheet.create({
 Main_Container:{
    flex:1,
    backgroundColor:Colors.White
 }
})