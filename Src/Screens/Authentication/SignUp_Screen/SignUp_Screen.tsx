import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../../Themes/Colors';
import { Discovery, H_Logo, Hide, Lock, Message, Profile, Show } from '../../../Themes/Images';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import { Fonts } from '../../../Themes/Fonts';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { Icon } from 'react-native-vector-icons/Icon';
interface SignupProps {
  navigation: any;
}

const SignUp_Screen: React.FC<SignupProps> = ({ navigation }) => {
  const [Username, setUsername] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [Location, setLocation] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [ConfirmPassword, setConfirmPassword] = useState<string>('');
  const [ShowPassword,setShowPassword]=useState<Boolean>(false)
  const [ShowConfirmPassword,setShowConfirmPassword]=useState<Boolean>(false)

  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        <CustomHeader title="" onBackPress={() => { navigation.goBack(); }} />
        <Image source={H_Logo} style={styles.H_Logo} resizeMode="contain" />
        <Text style={styles.Welcome_Txt}>Welcome!</Text>
        <Text style={styles.SignUp_Txt}>Sign up to continue</Text>
        <View style={styles.InputContainer}>
         
        <View style={[styles.Input_Field,Username!==''? styles.Active_Input_Field:null]}>
            <Image source={Profile} style={[styles.Input_Icon ,{tintColor:Username!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Name"
              value={Username}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setUsername(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field,Email!==''? styles.Active_Input_Field:null]}>
            <Image source={Message} style={[styles.Input_Icon ,{tintColor:Email!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Luke.Skywalker@domain.com"
              value={Email}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setEmail(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field,Location!==''? styles.Active_Input_Field:null]}>
            <Image source={Discovery} style={[styles.Input_Icon ,{tintColor:Location!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Located Area"
              value={Location}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setLocation(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field,Password!==''? styles.Active_Input_Field:null]}>
            <Image source={Lock} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Password"
              value={Password}
              secureTextEntry={!ShowPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setPassword(txt); }}
              style={styles.User_Input} />
              { ShowPassword===false?  
              <TouchableOpacity onPress={()=>{setShowPassword(true)}} >
              <Image source={Hide} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
              </TouchableOpacity> 
               :  
               <TouchableOpacity onPress={()=>{setShowPassword(false)}} >
               <Image source={Show} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
               </TouchableOpacity> 
                 }
          </View>
          <View style={[styles.Input_Field,ConfirmPassword!==''? styles.Active_Input_Field:null]}>
            <Image source={Lock} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Confirm Password"
              value={ConfirmPassword}
              secureTextEntry={!ShowConfirmPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setPassword(txt); }}
              style={styles.User_Input} />
              { ShowConfirmPassword===false?  
              <TouchableOpacity onPress={()=>{setShowPassword(true)}} >
              <Image source={Hide} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
              </TouchableOpacity> 
               :  
               <TouchableOpacity onPress={()=>{setShowPassword(false)}} >
               <Image source={Show} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
               </TouchableOpacity> 
                 }
          </View>
        </View>
        <View style={styles.SignUp_Btn} >
        <CustomButton title='Sign Up' onPress={()=>{navigation.navigate('Bottom_Tab')}} />
        </View>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Already have an account?  </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Bottom_Tab')}} style={styles.SignIn_Btn} >
          <Text  style={styles.SignIn_Txt} >Sign In</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: Colors.White,
    padding: 10,
    paddingHorizontal:20,
    flexGrow: 1,
  },
  H_Logo: {
    width: '60%',
    height:100,
    alignSelf: 'center',
    bottom:'2%'
    
  },
  Welcome_Txt: {
    fontSize: 24,
    fontFamily:Fonts.SF_Bold,
    color:Colors.DarkPurple,
    lineHeight:28,
    alignSelf: 'center',
    bottom:'2%'
  },
  SignUp_Txt: {
    fontSize: 16,
    color: Colors.Black2,
    fontFamily:Fonts.SF_Medium,
    alignSelf: 'center',
    lineHeight:20,
    bottom:'1%'
  },
  InputContainer: {
    marginTop:'7%',

  },
  Input_Field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.White4,
    elevation:1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 14,
  },
  Active_Input_Field:{
     borderWidth:2,
     borderColor:Colors.DarkPurple,
     backgroundColor:Colors.White

  },
  Input_Icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: Colors.Grey9,
  },
  User_Input: {
    flex: 1,
    fontSize: 16,
    color: Colors.Black2,
  },
  Password_Field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Grey9,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  SignUp_Btn:{
   marginVertical:'8%',
  },
  Btn_Cont:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   marginBottom:'5%',
  },
  Already_Txt:{
    fontSize: 14,
    // color: Colors.Grey5,
    fontFamily:Fonts.SF_Medium,
    alignSelf: 'center',
    lineHeight:18,
    
  },
  SignIn_Btn:{  
  },
  SignIn_Txt:{
    fontSize: 14,
    // color: Colors.Grey5,
    fontFamily:Fonts.SF_Bold,
    alignSelf: 'center',
    lineHeight:18,
   
  }
});

export default SignUp_Screen;
