import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert ,ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';

interface Slide {
  key: number;
  LogoImg: any; // Replace with image source type
  bgImg:any;
  TickImg:any;
  TickImg2:any;
  TickImg3:any;
  Point1:string;
  Point2:string;
  Point3:string;
  Plan:String;
  Price:String;
  Time:String
}
interface OnboardingProps {
  navigation:any,
}

const slides: Slide[] = [
  {
    key: 1,
    bgImg:require('../../Assets/Images/Frame2.png'),
    LogoImg: require('../../Assets/Images/White_Logo.png'),
    TickImg: require('../../Assets/Icons/Tick_Square.png'),
    TickImg2: require('../../Assets/Icons/Tick_Square.png'),
    TickImg3: '',
    Plan:'Basic Plan',
    Price:'$20',
    Time:'/Weekly',
    Point1:'You can get Five Per Day',
    Point2:'people on Basic plan.' , 
    Point3:''
  },
  {
  key: 2,
  bgImg:require('../../Assets/Images/Frame.png'),
  LogoImg: require('../../Assets/Images/White_Logo.png'),
  TickImg: require('../../Assets/Icons/Tick_Square.png'),
  TickImg2: require('../../Assets/Icons/Tick_Square.png'),
  TickImg3: require('../../Assets/Icons/Tick_Square.png'),
  Plan:'Premium Plan',
  Price:'$35',
  Time:'/Month',
  Point1:'You can get Ten Per Day.',
  Point2:'people on Basic plan.' ,
  Point3:'Gift and emojis to Earn' 
},
{
  key: 3,
  bgImg:require('../../Assets/Images/Frame3.png'),
  LogoImg: require('../../Assets/Images/White_Logo.png'),
  TickImg: require('../../Assets/Icons/Tick_Square.png'),
  TickImg2: require('../../Assets/Icons/Tick_Square.png'),
  TickImg3: require('../../Assets/Icons/Tick_Square.png'),
  Plan:'Standard plan',
  Price:'$50',
  Time:'/Month',
  Point1:'people on Premium  plan',
  Point2:'Vibe with people on Basic, Premium & Standard.' ,
  Point3:'Gift emojis to Earn' 
},
];

const Subscription:React.FC<OnboardingProps> = ({navigation}) => {

  const [showRealApp, setShowRealApp] = useState(false);
  const sliderRef = useRef<AppIntroSlider | null>(null); // Ref for the slider
  const [currentIndex, setCurrentIndex] = useState(0);



  const renderItem = ({ item, index }: { item: Slide; index: number }) => {
    const isLastSlide = index === slides.length - 1;
    const isFirstSlide = index === 0;

    return (
      <View style={styles.container }>
        <ImageBackground source={item.bgImg}  style={styles.Bg_Image} resizeMode="cover"  imageStyle={{borderRadius:20}}  >
         <View style={styles.Logo_Header} >
        <Image source={item.LogoImg} style={styles.image} resizeMode="cover" />
        <View style={styles.Plan_Cont} >
          <Text style={styles.Plan_Txt} >{item.Plan}</Text>
          <View  style={styles.Price_Cont}>
            <Text style={styles.Price_Txt} >{item.Price}</Text>
            <Text style={styles.Time_Txt} >{item.Time}</Text>
          </View>
        </View>
        </View>
        <View style={styles.Line}></View>
        <View style={styles.Points_Detail} >
         <View style={styles.Point_Cont} >
          <Image source={item.TickImg} style={styles.Tick_Img} />
          <Text style={styles.Point}>{item.Point1}</Text>
         </View>
         <View style={styles.Point_Cont} >
          <Image source={item.TickImg2} style={styles.Tick_Img} />
          <Text style={styles.Point}>{item.Point2}</Text>
         </View>
         <View style={styles.Point_Cont} >
          <Image source={item.TickImg3} style={styles.Tick_Img} />
          <Text style={styles.Point}>{item.Point3}</Text>
         </View>
         </View>
         <TouchableOpacity onPress={()=>{navigation.navigate('SignIn_Screen')}} style={styles.Select_Btn} >
         <Text style={styles.Btn_Txt} >Select Plan</Text>
         </TouchableOpacity>
        </ImageBackground>

        <View style={styles.paginationContainer}>
          {slides.map((slide, ind) => (
            <View
              key={slide.key}
              style={[
                styles.paginationDot,
                ind === currentIndex ? styles.activePaginationDot : null,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

    return (
      <View style={styles.container}>
        <CustomHeader title='Subscriptions Plans' onBackPress={()=>{navigation.goBack()}}/>
        <AppIntroSlider
          ref={sliderRef}
          renderItem={renderItem}
          data={slides}
          initialNumToRender={slides.length} // Add this line
          onSlideChange={(index) => setCurrentIndex(index)}
          renderNextButton={() => null}
          renderDoneButton={() => null}
          renderPagination={() => null}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    padding:"3%",
    justifyContent:'center'
  },
  Bg_Image:{
    width:'100%',
  alignSelf:'center',
  paddingVertical:'10%',
  },
  Logo_Header:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal:'3%',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginRight:'7%'
  },
  Plan_Cont:{
     
  },
  Plan_Txt:{
   fontSize:22,
   lineHeight:28,
   color:Colors.White,
   fontFamily:Fonts.SF_SemiBold,
  },
  Price_Cont:{
    flexDirection:'row',
    alignItems:'flex-end'
  },
  Price_Txt:{ 
    fontSize:22,
    lineHeight:28,
    color:Colors.White,
    fontFamily:Fonts.SF_SemiBold,},
  Time_Txt:{
    fontSize:16,
    lineHeight:20,
    color:Colors.White,
    fontFamily:Fonts.SF_SemiBold,
  },
  Line:{
    height:1,
    backgroundColor:Colors.White,
    width:'90%',
    marginVertical:'5%',
    marginBottom:'10%',
    alignSelf:'center',
  },
  Points_Detail:{
    alignSelf:'flex-start',
    marginLeft:'5%',
  },
 Point_Cont:{
 flexDirection:'row',
 marginBottom:'9%',
 alignItems:'center'
 
 },
 Point:{
  fontSize:14,
  lineHeight:20,
  width:'80%',
  color:Colors.White,
  fontFamily:Fonts.SF_SemiBold,
 },
 Tick_Img:{
   width:20,height:20,
   marginRight:"4%",
 },
  buttonContainer: {
    height: 50,
    width:'100%',
    justifyContent: 'flex-end',
    marginTop: '10%',
  },
  prevButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  prevButtonText: {
    color: Colors.Black2,
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.Grey4,
    marginHorizontal: 2,
  },
  activePaginationDot: {
    backgroundColor: Colors.LightPurple,
    width: 30,
    height: 8,
    borderRadius: 6,
  },
 
  Select_Btn:{
  width:'90%',
  marginTop:'2%',
  alignSelf:'center',
  backgroundColor:Colors.White,
  padding:'4%',
  borderRadius:10,
  alignItems:'center'
  },
  Btn_Txt:{
    color: Colors.Black2,
    fontSize: 16,
    fontFamily:Fonts.SF_Bold,
    textAlign: 'center',
    lineHeight:20,
  }
});

export default Subscription;
