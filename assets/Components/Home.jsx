import React from 'react';
import {View, Text, Image, StyleSheet, useState, useEffect, scrollView, Linking,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import HeadText from './HeadText';

const ViewBoxesWithColorAndText = () => {

  return (
   
    <View style={style.graceApp}>
        
         <View style={style.navBar}>
         <LinearGradient
          colors={['#FF3A01', '#000', ]}
          style={style.linearGradient}
        >
            <Text style={{fontSize: 30, color: '#F0E500'}}>Grace Radio Jamaica</Text>
        </LinearGradient>
            </View>  
   <Image source={require('../Image/logo.png')} style={{width: 200, height: 200, justifyContent: 'center', margin: 20, borderRadius: 100,}} />
    <Text style={{color: '#F0E500', fontSize: 25, marginTop: 20,}}>Welcome To</Text>
  <HeadText />
    <Text style={{color: '#F0E500', fontSize: 25, width: 300, margin: 'auto',}}>One stop love boat playing jamaica Reggae and none stop musical all day</Text>
<View >


<LinearGradient
          colors={['#000000', '#F0E500', ]}
          style={style.about}
        >
         
            <Text style={{fontSize: 30, color: '#F0E500', textAlign: 'center', marginTop: 30,}}>About</Text>
        <Text style={{fontSize:20, marginTop: 20, color:'#fff', padding: 10,}}>Grace Radio is a charity bade online music and talk station that plays a mixture of music worldwide 24/7. Grace Radio was founded in 2020 by the Out of Many Smile Jamaica Charity in St. Ann Jamaica.</Text>
        
        <Text style={{fontSize: 30, width: 'auto', textAlign: 'center', margin: 'auto', color: '#000', marginTop: 20,}}>Help us support our disc jocks Today</Text>
       
       
<View style={{alignItems: 'center', justifyContent: 'center'}}>
<Text style={style.donate} onPress={() => Linking.openURL('https://www.paypal.com/donate/?hosted_button_id=XH98NEJUMC86U')} >
       Donate
    </Text>
    <Text style={{color: '#000000', fontSize: 18,}}>To learn more about us visit our website</Text>
    <Text style={{color: '#0091ff', textDecorationLine: 'underline', fontSize: 18, }} onPress={()=> Linking.openURL('https://graceradioja.com/')}>
    www.graceradioja.com
    </Text>
</View>

        </LinearGradient>

</View>
    <View style={{width:400, alignItems: 'center', justifyContent:'center', textAlign: 'center'}}>
    <LinearGradient
          colors={[ '#F0E500', '#FF3A01', ]}
          style={style.foot}
        >
            <Text style={{fontSize: 30, color: '#000000', marginTop: 20,}}>Fellow us Social Media</Text>
           
            <View>
          
      </View>

        <Text style={{color: '#000'}}>Copyright ® Grace Radio</Text>
        </LinearGradient>
    </View>

    </View>
   
  );
};

  const style = StyleSheet.create({
    linearGradient: {
        width: 600,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    graceApp: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    
    },
    about:{
width: 'auto',
height: 'auto',
padding: 10,
    },
    donate:{
      width: 150,
      height: 42,
      backgroundColor: '#FF3A01',
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 28,
      justifyContent: 'center',
      color: '#fff',
      margin: 20, 
    },
foot:{
  width: '100%',
  height: 200,
  alignItems: 'center',
 
  
}
    
  });

export default ViewBoxesWithColorAndText;