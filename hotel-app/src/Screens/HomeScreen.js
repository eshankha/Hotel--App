import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../../assets/places/places';
const { width } = Dimensions.get('screen');
import colors from '../../assets/colors/colors';

const HomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon name="flight" size={25} color="#04555c" />,
    <Icon name="beach-access" size={25} color="#04555c" />,
    <Icon name="near-me" size={25} color="#04555c" />,
    <Icon name="place" size={25} color="#04555c" />,
  ];
  const ListCategories = () => {
    return (
      <View style={styles.categorycontainer}>
        {categoryIcons.map((icons, index) => (
          <View key={index} style={styles.iconContainer}>
            {icons}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ places }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailScreen', places)}>
        <ImageBackground style={styles.cardimage} source={places.image}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {' '}
            {places.name}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="place" size={20} color={colors.white} />
              <Text style={{ marginLeft: 5, color: colors.white }}>
                {places.location}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={20} color={colors.white} />
              <Text style={{ marginLeft: 5, color: colors.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ places }) => {
    return (
      <ImageBackground style={styles.rmcard} source={places.image}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: colors.white,
            marginTop: 10,
          }}>
          {places.name}
        </Text>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 15,
            color: colors.white,
            marginTop: 25,
            marginLeft: 10,
          }}>
          {places.details}
        </Text>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent={false} backgroundColor="#04555c" />

      <ScrollView
      showsVerticalScrollIndicator = {false}
      >
        <View style={styles.header}>
          <Icon name="sort" size={25} color="white" />

          <Icon name="notifications-none" size={25} color="white" />
        </View>

        <View
          style={{
            height: '20%',
            backgroundColor: '#04555c',
            paddingHorizontal: 20,
          }}>
          <Text style={styles.headertitle}> Explore the </Text>
          <Text style={styles.headertitle}> beautiful places </Text>

          <View style={styles.inputcontainer}>
            <Icon name="search" size={28} />

            <TextInput placeholder="Search Place" />
          </View>
        </View>

        <View></View>

        <ListCategories />

        <Text
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            fontSize: 20,
            fontWeight: '800',
          }}>
          Places
        </Text>

        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 10, borderRadius: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card places={item} />}
          />

          <Text
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              fontSize: 20,
              fontWeight: '800',
            }}>
            {' '}
            Recommended{' '}
          </Text>

          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 10, borderRadius: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <RecommendedCard places={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#04555c',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headertitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputcontainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categorycontainer: {
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#e1e8e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardimage: {
    height: 220,
    width: width / 2,
    marginRight: 10,
    padding: 20,
    overflow: 'hodden',
    borderRadius: 10,
    marginTop: 10,
  },
  rmcard: {
    width: width - 20,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
