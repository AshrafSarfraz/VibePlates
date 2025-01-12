import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType,TextStyle,ViewStyle } from 'react-native'
import React, { FC } from 'react';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';

interface Reuse_Button {
    searchimage: ImageSourcePropType;
  ButtonText_Style: TextStyle;
    onPress: () => void;
    onPressdot: () => void;
    Button_View:ViewStyle;
    title?:string
}



const Reuse_Button: FC<ReuseHeaderProps> = ({ onPress,ButtonText_Style,title,Button_View  }) => {
    return (
        <TouchableOpacity style={[styles.container,Button_View]} onPress={onPress}>
            <Text style={[styles.TextButton,ButtonText_Style]}>
          {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Reuse_Button

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:56,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius:10,
        alignSelf: 'center',
        marginVertical: '2%',
        alignItems: 'center',
        backgroundColor:Colors.DarkPurple,
        justifyContent:'center',
    },
    TextButton:{
        alignSelf:"center",
        justifyContent:'center',
        fontWeight:'700',
        fontSize:10,
        lineHeight:14,
        fontFamily:Fonts.SF_Medium,
        color:Colors.White
    }
   
    

    


})