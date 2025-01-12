import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Flat_View: {
        width: '90%',
        marginHorizontal: '5%'
    },
    Image_Style: {
        height: 60,
        width: 60,
        resizeMode: 'contain'
    },
    Card_View: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:'5%'
    },
    Texts_View: {
        marginHorizontal: '3%',
        justifyContent: 'center',
        width:'55%'
    },
    Name_Text: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.Black2,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 19,
    },
    My_Text: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.Black2,
        fontFamily: Fonts.SF_Regular,
        lineHeight: 19,
        flexWrap: 'wrap'
    },
    Days_View: {
        justifyContent:'flex-end',
        alignSelf:'center',
        
        
    },
    Day_Text: {
        fontWeight: '500',
        fontSize: 12,
        color: Colors.Grey4,
        justifyContent:'flex-end',
       alignSelf:'center',
       alignItems:'flex-end'
    }
})
export default style