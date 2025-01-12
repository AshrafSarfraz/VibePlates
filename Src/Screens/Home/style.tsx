import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const style = StyleSheet.create({
    container:{
        flex:1
    },
    Text_View:{
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:'3%'
    },
    Internet_Text:{
fontSize:22,
fontWeight:'500',
lineHeight:26,
fontFamily:Fonts.SF_Medium,
color:Colors.Black2
    },
    Appetite_Text:{
        fontSize:22,
        fontWeight:'500',
        lineHeight:26,
        fontFamily:Fonts.SF_Medium,
        color:Colors.DarkPurple
    },
    TextImage_View:{
        flexDirection:'row',
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:'3%'
    },
    Vibes_Text:{
        fontSize:18,
        fontWeight:'600',
        lineHeight:21,
        fontFamily:Fonts.SF_Medium,
        color:Colors.Black2,
        alignSelf:'center',
        width:'85%'
    },
    All_Text:{
        fontSize:12,
        fontWeight:'500',
        lineHeight:16,
        fontFamily:Fonts.SF_Medium,
        color:Colors.DarkPurple,
        alignSelf:'center'
    },
    ThreeUserImge:{
        width:18,
        height:13,
        alignSelf:'center',
        marginRight:"3%",
    },
    BackImge_Style:{
        width:'97%',
        height:392,
        borderRadius:10,
        marginLeft:'3%',
        marginRight:'3%',
        justifyContent:'flex-end',
        marginBottom:'3%'
    
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
        width:90,
        height:32,
        borderRadius:10,
     
    },
    imagesView:{
        width:'90%'
    },
    Ring_Image:{
        height: 36,
        width: 47,
        resizeMode:'contain'
    },
    BellImage_Style:{
        height: 15,
        width: 13,
        marginRight: '2%',
        justifyContent:'center',
        alignSelf:'center'
 
    },
    BellOut_View:{
width:36,
height:36,
borderRadius:30,
backgroundColor:Colors.Grey4,
justifyContent:'center',
alignSelf:'center'

    },
    TextImage_Style:{
        height: 32,
        width: 82,
    },
    ImageDiscover_View:{
     
    },
    New_Text:{
        fontSize:14,
        fontWeight:'500',
        lineHeight:19,
        fontFamily:Fonts.SF_Regular,
        color:Colors.White,
        alignSelf:'center',
     
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
        color:Colors.White,
        fontFamily:Fonts.SF_Medium
    },

})
export default style