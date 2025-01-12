import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.White
    },
    TextsImage_Style:{
width:115,
height:20
},
Image_View:{
    width:'63%'
},
Profile_View:{
    width:'90%',
    height:142,
    borderRadius:10,
    backgroundColor:Colors.LightPurple,
    marginHorizontal:"5%",
    marginTop:'3%',
    marginBottom:'5%',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center'
},
ImageStyling: {
    width: 108,
    height: 108,
    borderRadius:100
  },
Circular_View:{
width:108,
height:108,
borderRadius:100,
backgroundColor:Colors.White,
alignSelf:'center',
justifyContent:'center'
},
User_Image:{
    position:'absolute',
height:54,
width:54,
justifyContent:'center',
alignSelf:'center'
},
Luke_View:{
    alignSelf:'center',
width:'50%'
},
Luke_Text:{
fontWeight:'700',
fontSize:20,
lineHeight:24,
fontFamily:Fonts.SF_SemiBold,
color:Colors.White,
justifyContent:'center',
alignSelf:'center',
marginBottom:'3%'
},
Number_Style:{
    fontWeight:'600',
    fontSize:14,
    lineHeight:19,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    justifyContent:'center',
    alignSelf:'center',
    marginVertical:'3%'
},


    Flat_View: {
        width: '90%',
        marginHorizontal: '5%'
    },
    Image_Style: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
       alignSelf:'center',
       marginHorizontal:'2%'
    },
    Card_View: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:'2%',
        backgroundColor:Colors.White,
        borderRadius:10,
        width:'100%',
        height:52,
        elevation:4,
    },
   Texts_View:{
   width:'70%',
   justifyContent:'flex-start',
   alignSelf:'center',

   
   },
    Name_Text: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.Black2,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 19,
    },
   
    Button_View: {
      
        justifyContent:'center',
        alignSelf:'center',
      

    },
   Arrow_Image:{
       width:20,
       height:20,
        justifyContent:'center',
        alignSelf:'center',
        marginRight:'5%'
    },
    Button_backView:{
        backgroundColor:Colors.White,
        borderWidth:1,
        borderColor:Colors.LightPurple,
        marginVertical:'10%'
    },
    Button_Text:{
         color:Colors.LightPurple,
   justifyContent:'center',
   alignSelf:'center',
   fontSize:14,
   fontWeight:'400',
   fontFamily:Fonts.SF_Medium

    },
    Switch_Style:{
        backgroundColor:"red",
        justifyContent:'center',
        marginTop:'10%',
        width:'40%'
           
    }
   
})
export default style