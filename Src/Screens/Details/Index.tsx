import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
import Reuse_TextInput from '../../Components/Reuse_TextInput/Index'
import Reuse_Button from '../../Components/Reuse_Button/Index'
import Swiper from 'react-native-swiper'
import { Colors } from '../../Themes/Colors'

import { StackNavigationProp } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';



type RootStackParamList ={
    Home: undefined;
    Bottom_Tab:undefined;
  }
  
  type Home_Screen = StackNavigationProp<RootStackParamList>;
const Details = () => {
    const navigation = useNavigation<Home_Screen>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../../Assets/Images/backgroundImageg.png'),
        require('../../Assets/Images/backgroundImageg.png'),
        require('../../Assets/Images/backgroundImageg.png'),

    ];


    const handleDotPress = (index: number) => {
        setCurrentIndex(index);
    };


    return (
        <View style={styles.container}>
            <Reuse_Header 
        
                headerText='Details' onPress={()=>navigation.goBack()}
                dotsimage={require('../../Assets/Images/Dotsimage.png')} />
          
          <ScrollView>
<Swiper style={styles.wrapper} showsButtons={true} dotColor='gray'activeDotColor={Colors.DarkPurple}>
        <View style={styles.slide1}>
        <Image source={require('../../Assets/Images/backgroundImageg.png')} style={styles.BackImge_Style}  />
        </View>
        <View style={styles.slide1}>
        <Image source={require('../../Assets/Images/backgroundImageg.png')} style={styles.BackImge_Style}  />
        </View>
        <View style={styles.slide1}>
        <Image source={require('../../Assets/Images/backgroundImageg.png')} style={styles.BackImge_Style}  />
        </View>
      </Swiper>
     
            <View style={styles.TextButton_View}>
                <View style={styles.ImageDiscover_View}>
                    <Text style={styles.Janin_Text}>
                        Janine, 24
                    </Text>
                    <View style={styles.ImageText_View}>
                        <Image source={require('../../Assets/Images/Discoverysige.png')} style={styles.Discovery} />
                        <Text style={styles.New_Text}>
                            New York
                        </Text>
                    </View>
                </View>


            </View>
            <Text style={styles.Whats_Text}>
                What's Janine like
            </Text>


            <Text style={styles.IEnjoy_Text}>
                I enjoy exploring the city and trying new restaurants and cafes. They are also an avid reader, and enjoy reading a variety of genres, from classic literature to contemporary fiction. Alex is a social person and enjoys spending time with their close group of friends, whether it's attending concerts or simply hanging out at home.
            </Text>

            <Text style={styles.You_Text}>
                You both like
            </Text>

            <View style={styles.Buttons_View}>
                <TouchableOpacity style={styles.Button_View}>
                    <Image style={styles.imageButton} source={require('../../Assets/Images/femail.png')} />
                    <Text style={styles.Text_Button}>
                        Female
                    </Text>
                </TouchableOpacity>

              
                    <TouchableOpacity style={styles.Button_View}>
                        <Image style={styles.imageButton} source={require('../../Assets/Images/Itelian.png')} />
                        <Text style={styles.Text_Button}>
                        Italian
                        </Text>
                    </TouchableOpacity>
                  
                        <TouchableOpacity style={styles.Button_View}>
                            <Image style={styles.imageButton} source={require('../../Assets/Images/popicon.png')} />
                            <Text style={styles.Text_Button}>
                            Pop
                            </Text>
                        </TouchableOpacity>
                  </View>
                  <View style={styles.Twobutton_View}>
                    <Reuse_Button title="Or Not" Button_View={styles.NotButtonView} ButtonText_Style={styles.TextButton} />
                    <Reuse_Button title="Catch a vibe" Button_View={styles.ButtonView} />
                    </View>
                    </ScrollView>
                </View>
                )
}

                export default Details