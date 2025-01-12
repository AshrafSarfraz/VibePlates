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
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../Themes/Colors';
import { Discovery, H_Logo, Hide, Lock, Message, Profile, Show } from '../../../Themes/Images';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import { Fonts } from '../../../Themes/Fonts';
import CustomButton from '../../../Components/CustomButton/CustomButton';


interface SignupProps {
  navigation: any,
 
}

const SignIn_Screen: React.FC<SignupProps> = ({ navigation }) => {
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [ShowPassword,setShowPassword]=useState<Boolean>(false)
  const [isChecked, setIsChecked] = useState<Boolean>(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        <Image source={H_Logo} style={styles.H_Logo} resizeMode="contain" />
        <Text style={styles.Welcome_Txt}>Welcome Back!</Text>
        <Text style={styles.SignUp_Txt}>Sign in with your account</Text>
        <View style={styles.InputContainer}>
         
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
          <View style={styles.Forget_Cont} >
          <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, isChecked ? styles.checked : null]}
        onPress={toggleCheckbox}
      >
        {isChecked && <Icons name="check" color="white" size={12} />}
      </TouchableOpacity>
      <Text style={styles.label}>Remember me</Text>
    </View>
    <TouchableOpacity  style={styles.Forget_Btn} >
        <Text style={styles.Forget_Txt} >Forgot Password</Text>
    </TouchableOpacity>
    </View>

        </View>
        <View style={styles.SignUp_Btn} >
        <CustomButton title='Sign In' onPress={()=>{navigation.navigate('SignUp_Screen')}} />
        </View>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Don’t have an account?  </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} style={styles.SignIn_Btn} >
          <Text  style={styles.SignIn_Txt} >Sign Up</Text>
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
    marginTop:'10%',
   
    
  },
  Welcome_Txt: {
    fontSize: 24,
    fontFamily:Fonts.SF_Bold,
    color:Colors.DarkPurple,
    lineHeight:28,
    alignSelf: 'center',
    
  },
  SignUp_Txt: {
    fontSize: 16,
    color: Colors.Black2,
    fontFamily:Fonts.SF_Medium,
    alignSelf: 'center',
    lineHeight:20,
    marginTop:'1%'
   
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
     borderColor:Colors.LightPurple,
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
   marginTop:'30%',
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
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderRadius:5,
    borderColor: Colors.DarkPurple,
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',
    borderColor: Colors.DarkPurple,
  },
  label: {
    fontSize: 14,
    // color: Colors.Grey5,
    fontFamily:Fonts.SF_Medium,
    lineHeight:18, 
  },
  Forget_Cont:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
  },
  Forget_Btn:{

  },
  Forget_Txt:{
    fontSize: 14,
    color: Colors.Black2,
    fontFamily:Fonts.SF_Bold,
    lineHeight:18,
  }
});

export default SignIn_Screen;
