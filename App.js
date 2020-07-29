import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import FoodList from './Components/FoodList';
import SearchFood from './Components/SearchFood';
import SearchList from './Components/SearchList';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <FoodList />
        <SearchList />
        <SearchFood />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
