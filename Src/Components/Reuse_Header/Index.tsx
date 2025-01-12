import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType,ViewStyle,ImageStyle,TextStyle } from 'react-native'
import React, { FC } from 'react';
import { Fonts } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

interface Reuse_HeaderProps {
    backimage?: ImageSourcePropType;
    textimage?: ImageSourcePropType;
    dotsimage?: any;
    header_View?:ViewStyle;
    ImagesView?:ViewStyle;
    backimageSTyle?:ImageStyle;
    TextimageStyle?:ImageStyle;
    DotimageSTyle?:ImageStyle;
    headerText?:string
    TextSTyle?:TextStyle;
    DotImage_View?:ViewStyle
    onPress?: () => void;
    onPressdot?: () => void;
}


const Reuse_Header = (props:Reuse_HeaderProps) => {
    const {headerText,header_View,ImagesView,backimageSTyle,TextimageStyle,DotimageSTyle,TextSTyle, backimage, textimage, dotsimage,DotImage_View, onPress, onPressdot }= props
    return (
        <View style={[styles.container,header_View]}>
            <View style={[styles.Images_View,ImagesView]}>
                <TouchableOpacity onPress={onPress}>
                <Image source={backimage || require("../../Assets/Images/backimage.png")} style={[styles.BackImage_Style,backimageSTyle]} />
                </TouchableOpacity>
                {textimage ? (
      <Image source={textimage} style={[styles.TextImage_Style, TextimageStyle]} />
    ) : (
      <Text style={[styles.Text_Style,TextSTyle]}>{headerText}</Text>
    )}
            </View>
            <TouchableOpacity onPress={onPressdot} style={DotImage_View} >
            <Image source={dotsimage || require('../../Assets/Images/Dotsimage.png')} style={[styles.DotImage_Style,DotimageSTyle]} />
            
            </TouchableOpacity>
        </View>
    )
}

export default Reuse_Header

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '8%',
        width: '90%',
        marginHorizontal: '5%',
        // backgroundColor:'red',
        alignSelf: 'center',
        marginVertical: '2%',
        alignItems: 'center'
    },
    Images_View:{ flexDirection: 'row',
     width:'96%',
 
    },
    Text_Style:{
     fontWeight:'600',
     fontSize:20,
     lineHeight:24,
     fontFamily:Fonts.SF_SemiBold,
     color:Colors.Black2,
     marginLeft:10,

    },
    BackImage_Style: {
       width:28,
       height:28,
    },
    TextImage_Style: {
     
    },
    DotImage_Style: {
      width:10,
      height:15,
      resizeMode:'contain'
    

    }


})