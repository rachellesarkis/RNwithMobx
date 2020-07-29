import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const SearchList = () => {
  const imagesState = [
    {
      src: require('../assets/foodlist1.png'),
      foodType: 'البحرية',
    },
    {
      src: require('../assets/foodlist2.png'),
      foodType: 'العربية',
    },
    {
      src: require('../assets/foodlist1.png'),
      foodType: 'العالمية',
    },
    {
      src: require('../assets/foodlist2.png'),
      foodType: 'المقبلات',
    },
    {
      src: require('../assets/foodlist1.png'),
      foodType: 'الحلويات',
    },
  ];
  return (
    <>
      <Text style={styles.title}> المأكولات </Text>
      <ScrollView horizontal={true}>
        <FlatList
          numColumns={5}
          data={imagesState}
          keyExtractor={(item) => item.foodType}
          renderItem={({item}) => (
            <View style={styles.container}>
              <TouchableOpacity>
                <Image style={styles.image} source={item.src} />
                <Text style={styles.text}>{item.foodType} </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    margin: 12,
    width: 70,
    height: 60,
    flexDirection: 'row-reverse',
  },
  image: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SearchList;
