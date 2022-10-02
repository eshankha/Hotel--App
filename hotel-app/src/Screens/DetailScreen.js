import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import colors from '../../assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../../assets/places/places';

const DetailScreen = ({ navigation, route }) => {
  const places = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent />

      <ImageBackground style={{ flex: 0.7 }} source={places.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back"
            size={20}
            colors={colors.white}
            onPress={navigation.navigate('HomeScreen')}
          />

          <Icon name="more-vert" size={20} colors={colors.white} />
        </View>

        <View style={style.imagedetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: colors.white,
              marginBottom: 20,
            }}>
            {places.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={30} color={colors.orange} />
            <Text
              style={{ color: colors.white, fontWeight: 'bold', fontSize: 30 }}>
              hl di gh
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={style.detailcontainer}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Icon name="place" size={28} color={colors.white} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            {places.location}
          </Text>
        </View>

        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
          About the Trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>{places.details}</Text>
      </View>

      <View style={style.footer}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', color: colors.white }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: colors.grey,
              marginLeft: 5,
            }}>
            Per Day
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imagedetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  detailcontainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    top: -30,
    backgroundColor: colors.white,
    flex: 0.3,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: '10%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default DetailScreen;
