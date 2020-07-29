import React, {useState, useContext} from 'react';
import {StyleSheet, TextInput, Image} from 'react-native';

import {observer} from 'mobx-react';
import {searchStoreContext} from '../stores/searchStore';
import {toJS} from 'mobx';

import matchSorter from 'match-sorter';

const SearchList = observer(() => {
  const searchStore = useContext(searchStoreContext);
  const [value, setValue] = useState('');
  let myStruct = toJS(searchStore.imageState.get());

  return (
    <>
      <TextInput
        value={searchStore.searchTaskName.get()}
        onChangeText={(data) => {
          searchStore.searchTaskName.set(data);
          const result = matchSorter(myStruct, data, {
            keys: ['foodName'],
          });
          searchStore.filteredSearch.set(result);
        }}
        placeholder="ابحث..."
        style={styles.inputStyle}
      />
      <Image style={styles.image} source={require('../assets/search.png')} />
    </>
  );
});

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderRadius: 25,
    width: '95%',
    margin: 8,
    paddingRight: 60,
  },
  image: {
    position: 'absolute',
    width: 30,
    height: 30,
    marginTop: 167,
    marginLeft: 355,
  },
});

export default SearchList;
