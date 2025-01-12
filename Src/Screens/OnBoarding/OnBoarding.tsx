import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import { useNavigation } from '@react-navigation/native';

interface Slide {
  key: number;
  text: string;
  image: any; // Replace with image source type
  backgroundColor: string;
}
interface OnboardingProps {
  navigation:any,
 
}


import { StackNavigationProp } from '@react-navigation/stack';




type RootStackParamList = {
  Notifications: undefined;
  New_Accepted:undefined;
  Bottom_Tab:undefined;
  Subscription:undefined;
 
};

type Notifications_Screen = StackNavigationProp<RootStackParamList>

const slides: Slide[] = [
  {
    key: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    image: require('../../Assets/Images/boarding.png'),
    backgroundColor: Colors.White,
  },
  {
    key: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    image: require('../../Assets/Images/boarding1.png'),
    backgroundColor: Colors.White,
  },
  {
    key: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    image: require('../../Assets/Images/boarding2.png'),
    backgroundColor: Colors.White,
  },
];


const OnBoarding = () => {
  const navigation = useNavigation<Notifications_Screen>();
  const [showRealApp, setShowRealApp] = useState(false);
  const sliderRef = useRef<AppIntroSlider | null>(null); // Ref for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current?.goToSlide(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current?.goToSlide(currentIndex - 1);
    }
  };

  const renderItem = ({ item, index }: { item: Slide; index: number }) => {
    const isLastSlide = index === slides.length - 1;
    const isFirstSlide = index === 0;

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        {isFirstSlide ? null : (
          <TouchableOpacity style={styles.prevButton} onPress={handlePrevSlide}>
            {/* <Image source={Back_Icon} style={styles.Back_Icon} /> */}
          </TouchableOpacity>
        )}
        
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      
        <Text style={styles.description}>{item.text}</Text>
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
        <View style={styles.buttonContainer}>
          {isLastSlide ? (
            <CustomButton title={'Continue'} onPress={()=>navigation.navigate('Subscription')} />
          ) : (
            <CustomButton title={'Next'} onPress={handleNextSlide} />
          )}
        </View>
      </View>
    );
  };

  if (showRealApp) {
    return <Text>Your App Content Goes Here</Text>;
  } else {
    return (
      <View style={styles.container}>
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
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  Back_Icon:{
     width:30,height:30,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '45%',
    borderRadius: 20,
    marginTop: '20%',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.SF_Medium,
    color: Colors.Black2,
    width: '80%',
    lineHeight: 20,
    marginTop: '2%',
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
  buttonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OnBoarding;
