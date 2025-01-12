import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType,TextInput,ViewStyle } from 'react-native'
import React, { FC } from 'react';
import { Colors } from '../../Themes/Colors';

interface Reuse_HeaderProps {
    searchimage?: ImageSourcePropType;
    TextinputContainer?: ViewStyle;
    onPress?: () => void;
    onPressdot?: () => void;
}


const Reuse_TextInput: FC<ReuseHeaderProps> = ({ placeholder,TextinputContainer  }) => {
    return (
        <View style={[styles.container,TextinputContainer]}>
            <View style={styles.Images_View}>
                    <Image source={require('../../Assets/Images/searchimage.png')} style={styles.Search_Image} />
                     <TextInput placeholder={placeholder} placeholderTextColor={Colors.DarkPurple}/>
               </View>
        </View>
    )
}

export default Reuse_TextInput

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
        backgroundColor:Colors.Grey4,
    },
    Images_View:{ flexDirection: 'row',
     width:'100%'
    },
    Search_Image: {
        height: 16,
        width: 15,
        alignSelf:'center',
        marginHorizontal:10
    },
    

    


})