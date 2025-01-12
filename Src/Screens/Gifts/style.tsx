import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.White
    },
    Flat_View: {
        width: '90%',
        marginHorizontal: '5%'
    },
    Image_Style: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
       alignSelf:'center',
       marginHorizontal:'2%'
    },
    Card_View: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:'5%',
        backgroundColor:Colors.Grey4,
        borderRadius:10,
        width:'100%',
        height:77
    },
   Texts_View:{
   width:'53%',
   justifyContent:'flex-start',
   alignSelf:'center',
   
   },
    Price_Text: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.Black2,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 19,
    },
    Dolar_Text: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.DarkPurple,
        fontFamily: Fonts.SF_Regular,
        lineHeight: 19,
        flexWrap: 'wrap',
        marginTop:2
    },
    Button_View: {
      
        justifyContent:'center',
        alignSelf:'center',
        width:64,
        height:31,
        backgroundColor:Colors.DarkPurple,
        borderRadius:5,
        marginRight:'3%'

    },
    Button_Text:{
        fontWeight:'600',
        fontSize:11,
        color:Colors.White,
        justifyContent:'center',
        alignSelf:'center'
    }
   
})
export default style