import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.White
    },
    Flat_View: {
        width: '90%',
        marginHorizontal: '5%'
    },
    Image_Style: {
        height:70,
        width: 97,
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        marginTop:'1.8%',
        borderBottomRightRadius:10
        
    },
    Card_View: {
    width:"45%",
    height:100,
     backgroundColor:Colors.Grey4,
    borderRadius:10,
    marginHorizontal:'2.5%',
    marginVertical:'2.5%'
    
    },
   
    Name_Text: {
        marginTop:12,
        marginLeft:12,
        fontSize: 14,
        fontWeight: '500',
        color: Colors.Black2,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 15,
    },
   
})
export default style