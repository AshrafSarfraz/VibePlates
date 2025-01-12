// CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { Colors } from '../../Themes/Colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.DarkPurple, // Example color
    width:'90%',
    alignSelf:"center",
    padding:'3%',
    borderRadius: 5,
    marginHorizontal:'5%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
