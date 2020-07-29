import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {observer} from 'mobx-react';
import {searchStoreContext} from '../stores/searchStore';

const SearchFood = observer(() => {
  const numberOfColumns = 2;
  const searchStore = useContext(searchStoreContext);

  return (
    <>
      <FlatList
        numColumns={numberOfColumns}
        data={
          searchStore.searchTaskName.get().length > 0
            ? searchStore.filteredSearch.get()
            : searchStore.imageState.get()
        }
        keyExtractor={(item) => item.foodType}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={item.src} />
            <TouchableOpacity>
              <Image
                style={styles.plus}
                source={require('../assets/plus.png')}
              />
            </TouchableOpacity>
            <Text style={styles.foodType}>{item.foodType} </Text>
            <Text style={styles.foodName}>{item.foodName} </Text>
          </View>
        )}
      />
    </>
  );
});

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 132,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  foodType: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foodName: {
    fontSize: 15,
    textAlign: 'center',
  },
  plus: {
    alignSelf: 'center',
  },
});

export default SearchFood;
