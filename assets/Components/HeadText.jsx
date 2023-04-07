import React from "react";
import { Text } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from "react-native-linear-gradient";
import { LinearGradientText } from 'react-native-linear-gradient-text';
    
const GradientText = (props) => {
  return (
   
    <LinearGradientText
      colors={['#FF3A01',  '#F0E500','#00E815',]}
      text="SMILE JAMAICA GRACE RADIO"
      start={{ x: 0.2, y: 1 }}
      end={{ x: 1, y: 1 }}
      textStyle={{ fontSize: 40, fontWeight: 800, margin: 20,}}
    />

  );
};

export default GradientText;