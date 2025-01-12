

import React from 'react';
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../../Screens/Home/Index';
import Chats from '../../Screens/Chats/Index';
import Eat_Vegitable from '../../Screens/Eat_Vegitable/Index';
import Gifts from '../../Screens/Gifts/Index';
import Profile from '../../Screens/Profile/Index';

type TabParamList = {
  Home: undefined;
  Chat: undefined;
  'E&V': undefined;
  Gifts: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const Bottom_Tab: React.FC = () => {
  const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  };

  return (
   
      <Tab.Navigator  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        

            if (route.name === 'Home') {
              iconName = focused 
              ? require('../../Assets/Images/Home.png')
              : require('../../Assets/Images/Home.png');
            } else if (route.name === 'Chat') {
              iconName = focused ? 'comment-dots' : 'comment-dots';
            } else if (route.name === 'E&V') {
              iconName = focused 
              ? require('../../Assets/Images/Eaticon.png')
              : require('../../Assets/Images/Eaticon.png');
            } else if (route.name === 'Gifts') {
              iconName = focused 
              ? require('../../Assets/Images/gift.png')
              : require('../../Assets/Images/gift.png');
            } else if (route.name === 'Profile') {
              iconName = focused
              ? require('../../Assets/Images/Profile.png')
              : require('../../Assets/Images/Profile.png');
            }
          
            if (route.name === 'Chat') {
                return <Icon name={iconName} size={size} color={color} />;
              
              } else {
               
                return <Image source={iconName} style={{ width: 20, height: 20, tintColor: color,resizeMode:'contain' }} />;
              }
            },
          })}
        tabBarOptions={tabBarOptions} 
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'Home',headerShown:false }}
        />
       <Tab.Screen
          name="Chat"  
          component={Chats}
          options={{ tabBarLabel: 'Chat',headerShown:false }}
        />

<Tab.Screen
          name="E&V"  
          component={Eat_Vegitable}
           options={{ tabBarLabel: 'E&V',headerShown:false }}
    
        />


<Tab.Screen
          name="Gifts"  
          component={Gifts}
           options={{ tabBarLabel: 'Gifts',headerShown:false }}
    
        />

<Tab.Screen
          name="Profile"  
          component={Profile}
           options={{ tabBarLabel: 'Profile',headerShown:false }}
    
        />


      </Tab.Navigator>
  
  );
};

export default Bottom_Tab;

