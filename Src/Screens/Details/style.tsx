import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const style = StyleSheet.create({
    container:{
        flex:1
    },
    slide1: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:'5%'
      },
      wrapper: { height:240},
  
    BackImge_Style:{
        width:'97%',
        height:238,
        borderRadius:10,
        marginLeft:'3%',
        marginRight:'3%',
       
     
    
    },
    TextButton_View:{
        width:'90%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignSelf:'center',
        marginHorizontal:'5%',
        marginBottom:'2%'
    },
    ButtonView:{
        width:'45%',
        height:46,
        borderRadius:10,
        
    },
    NotButtonView:{
        width:'45%',
        height:46,
        borderRadius:10,
        backgroundColor:Colors.White
    },
    TextButton:{
        alignSelf:"center",
        justifyContent:'center',
        fontWeight:'700',
        fontSize:10,
        lineHeight:14,
        fontFamily:Fonts.SF_Medium,
        color:Colors.Black2
    },
    ImageDiscover_View:{
     
    },
    New_Text:{
        fontSize:14,
        fontWeight:'500',
        lineHeight:19,
        fontFamily:Fonts.SF_Regular,
        color:Colors.Black2,
        alignSelf:'center',
        marginLeft:5,
     
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor:Colors.LightPurple,
      },
    Discovery:{
        height:16,
        width:16,
        alignSelf:'center'
    },
    ImageText_View:{
        flexDirection:'row',
        marginTop:5,
      
    },
    Janin_Text:{
        fontWeight:'600',
        fontSize:20,
        lineHeight:23,
        color:Colors.Black2,
        fontFamily:Fonts.SF_Medium,
        marginTop:'5%'
    },
    Whats_Text:{
        fontWeight:'600',
        fontSize:17,
        lineHeight:23,
        color:Colors.Black2,
        fontFamily:Fonts.SF_Medium ,
        marginHorizontal:'5%',
        marginTop:'7%'
    },
    IEnjoy_Text:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:16,
        color:Colors.Black2,
        marginHorizontal:'5%',
        flexWrap:'wrap',
        marginVertical:'2%'
    },
    You_Text:{
        fontWeight:'600',
        fontSize:17,
        lineHeight:23,
        color:Colors.Black2,
        fontFamily:Fonts.SF_Medium ,
        marginHorizontal:'5%',
      
    },
    Buttons_View:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:"5%"
    },
    Button_View:{
        flexDirection:'row',
        height:35,
        width:101,
        borderRadius:10,
        backgroundColor:Colors.DarkPurple,
        justifyContent:'center'
    
    },
    Text_Button:{
        alignSelf:"center",
        justifyContent:'center',
        fontWeight:'500',
        fontSize:14,
        lineHeight:17,
        fontFamily:Fonts.SF_Medium,
        color:Colors.White
    },
    imageButton:{
        height:16,
        width:16,
        alignSelf:'center',
        marginRight:5,
        resizeMode:'contain'
    },
    Twobutton_View:{
        flexDirection:'row',
        width:'90%',
        marginTop:'10%',
        marginHorizontal:"5%",
        justifyContent:'center'
    }
})
export default style