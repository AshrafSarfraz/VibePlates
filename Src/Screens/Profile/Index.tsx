import { View, Text, FlatList, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Reuse_Header from '../../Components/Reuse_Header/Index'
import Reuse_Button from '../../Components/Reuse_Button/Index'
import { Colors } from '../../Themes/Colors'
import DocumentPicker from 'react-native-document-picker';







type DocumentPickerResponse = {
  uri: string;
  type: string;
  name: string;
  size: number;

  // Add any other properties you need
};


const Profile = () => {
  const [singleFile, setSingleFile] = useState<string | undefined>('');
  const [notificationSwitchValue, setNotificationSwitchValue] = useState(false);








  // const selectOneFile = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     }) as DocumentPickerResponse[];

  //     if (res.length > 0) {
  //       console.log('res : ' + JSON.stringify(res));
  //       console.log('URI : ' + res[0].uri);
  //       setSingleFile(res[0].uri);
  //       console.log('Type : ' + res[0].type);
  //       console.log('File Name : ' + res[0].name);
  //       console.log('File Size : ' + res[0].size);
  //     }
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       Alert.alert('Canceled', 'File selection was canceled.');
  //     } else {
  //       Alert.alert('Error', 'An unknown error occurred: ' + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // };










  const Array = [
    {
      id: '1', image: require('../../Assets/Images/mygift.png'), Name: "My Gifts ", Lessimage: require('../../Assets/Images/ArrowRight.png')
    },
    {
      id: '2', image: require('../../Assets/Images/Edit_prfile.png'), Name: "Edit profile", Lessimage: require('../../Assets/Images/ArrowRight.png')
    },
    {
      id: '3', image: require('../../Assets/Images/Notification.png'), Name: "Notifications", Lessimage: require('../../Assets/Images/ArrowRight.png')
    },
    {
      id: '4', image: require('../../Assets/Images/privicey.png'), Name: "Privacy Policies", Lessimage: require('../../Assets/Images/ArrowRight.png')
    },

  ]


  const handleNotificationSwitch = () => {
    setNotificationSwitchValue((prevValue) => !prevValue);
    // You can add logic here to update the notification status in your app's state or API
  };




  return (
    <View style={styles.container}>
      <Reuse_Header
        headerText='Profile'
        backimage={require('../../Assets/Images/logoimage.png')} ImagesView={styles.Image_View}
        dotsimage={require('../../Assets/Images/TextsImage.png')} DotimageSTyle={styles.TextsImage_Style}
      />


      <View style={styles.Profile_View}>
        <TouchableOpacity style={styles.Circular_View} activeOpacity={0.5}
          // onPress={selectOneFile}
          >
          <Image source={require('../../Assets/Images/solaruser.png')} style={styles.User_Image} />




          {/* <Image
            source={{
              uri: singleFile,
            }}
            style={styles.ImageStyling}
          /> */}


        </TouchableOpacity>
        <View style={styles.Luke_View}>
          <Text style={styles.Luke_Text}>
            Luke Skywalker
          </Text>
          <Text style={styles.Number_Style}>
            +1 111 467 378 399
          </Text>
          <Text style={styles.Number_Style}>
            Vibes Remaining: 5
          </Text>
        </View>
      </View>

      <View style={styles.Flat_View}>
        <FlatList
          data={Array}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Card_View}>
              <Image source={item.image} style={styles.Image_Style} />
              <View style={styles.Texts_View}>
                <Text style={styles.Name_Text}>
                  {item.Name}

                </Text>

              </View>

              {item.Name === 'Notifications' ? (
                <Switch

                  value={notificationSwitchValue}
                  onValueChange={handleNotificationSwitch}
                  thumbColor={Colors.White}
                  trackColor={{
                    true: Colors.DarkPurple,
                    false: Colors.Grey4,
                  }}
                />
              ) : (
                <TouchableOpacity style={styles.Button_View}>
                  <Image source={item.Lessimage} style={styles.Arrow_Image} />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}

        />
      </View>


      <View style={{ height: 60 }} />

      <Reuse_Button title='Log out' Button_View={styles.Button_backView} ButtonText_Style={styles.Button_Text} />



    </View>
  )
}

export default Profile