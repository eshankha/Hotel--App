import React from 'react'

import {View,Text,StyleSheet,ImageBackground,StatusBar,TouchableOpacity} from 'react-native'

import colors from '../../assets/colors/colors'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const OnBoardScreen = ({navigation}) =>{   //for navigation of screens
  return(
    <View style = {{flex: 1}}>

  <StatusBar translucent backgroundColor = 'rgba(0,0,0,0)'/>


  <ImageBackground

  style = {{flex: 1 , position: 'absolute',height: '100%',width: '100%'}}
  source = {require('../../assets/Images/onboard.jpg')}

  
  />

  <View style = {styles.details}>

  <Text style = {{color: colors.white,fontSize: 35,fontWeight: 'bold'}} >Discover </Text>
  <Text style = {{color: colors.white,fontSize: 35,fontWeight: 'bold'}} >world with us </Text>
  <Text style = {{color: colors.white,marginTop: 10}} >Lorem dolor sit amet,consectuator elit. Proin ut sem non erat vehicula dignissim. Morbi eget congue ante , feugiat </Text>



  <TouchableOpacity
  activeOpacity = {0.8}
   onPress = {() => navigation.navigate('HomeScreen')}>
    <View  style = {styles.btn}>
      <Text style = {{fontWeight: '700'}}> Get Started </Text>
  </View>
</TouchableOpacity>



  </View>

    
    
  </View>
  )
}

const styles = StyleSheet.create({
  details: {
    height: '50%',
    bottom : 0,
    position : 'absolute',
    //backgroundColor: colors.red,
    paddingHorizontal: 40,
  
 
  },
  btn : {
   marginTop: 30,
   backgroundColor: colors.white,
   width: '40%',
   height: '30%',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 7,



  },
})

export default OnBoardScreen;