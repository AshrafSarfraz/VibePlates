import { View, Text, Image, ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
import Reuse_TextInput from '../../Components/Reuse_TextInput/Index'
import Reuse_Button from '../../Components/Reuse_Button/Index'


const Home = (props:any) => {
  const {navigation} = props
  return (
    <View style={styles.container}>
      <Reuse_Header
        backimage={require('../../Assets/Images/logoimage.png')}   backimageSTyle={styles.Ring_Image}
        textimage={require('../../Assets/Images/textimage.png')} TextimageStyle={styles.TextImage_Style} ImagesView={styles.imagesView}
        dotsimage={require('../../Assets/Images/Notification.png')}   DotimageSTyle={styles.BellImage_Style}     DotImage_View={styles.BellOut_View}  />
        <ScrollView>
      <View style={styles.Text_View}>
        <Text style={styles.Internet_Text}>
          Interact through your <Text style={styles.Appetite_Text}> Appetite

          </Text> </Text>
      </View>

      <Reuse_TextInput placeholder='Search for someone' />

      <View style={styles.TextImage_View}>
        <Text style={styles.Vibes_Text}>
          Vibes Found!
        </Text>
        <Image source={require('../../Assets/Images/ThreeUser.png')} style={styles.ThreeUserImge} />
        <Text style={styles.All_Text}>
          All
        </Text>
      </View>

      <ImageBackground source={require('../../Assets/Images/backgroundImageg.png')} style={styles.BackImge_Style} imageStyle={{ borderRadius: 10 }} >

        <View style={styles.TextButton_View}>
          <View style={styles.ImageDiscover_View}>
            <Text style={styles.Janin_Text}>
              Janine, 24
            </Text>
            <View style={styles.ImageText_View}>
              <Image source={require('../../Assets/Images/DiscoveryImage.png')} style={styles.Discovery} />
              <Text style={styles.New_Text}>
                New York
              </Text>
            </View>
          </View>

          <Reuse_Button title="View details" Button_View={styles.ButtonView} onPress={()=>navigation.navigate('Details')}  />

        </View>
      </ImageBackground>
      
      <ImageBackground source={require('../../Assets/Images/backgroundImageg.png')} style={styles.BackImge_Style} imageStyle={{ borderRadius: 10 }} />
      </ScrollView>
    </View>
  )
}

export default Home