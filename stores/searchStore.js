import {observable} from 'mobx';
import {createContext} from 'react';

class searchStore {
  imageState = observable.box([
    {
      src: require('../assets/image1.png'),
      foodType: 'جمبري كنافة',
      foodName: 'المأكولات البحرية',
      // foodName: 'a',
    },
    {
      src: require('../assets/image2.png'),
      foodType: 'جمبري جامبو مشوي',
      foodName: 'المأكولات البحرية',
      // foodName: 'b',
    },
    {
      src: require('../assets/image3.png'),
      foodType: 'جمبري بروفينسال',
      foodName: 'المأكولات البحرية',
      // foodName: 'c',
    },
    {
      src: require('../assets/image4.png'),
      foodType: 'جمبري جامبو تمبورا',
      foodName: 'المأكولات البحرية',
      // foodName: 'd',
    },
    {
      src: require('../assets/image1.png'),
      foodType: 'جمبري جامبو تمبورا',
      foodName: 'المأكولات البحرية',
      // foodName: 'e',
    },
    {
      src: require('../assets/image2.png'),
      foodType: 'جمبري جامبو تمبورا',
      foodName: 'المأكولات البحرية',
      // foodName: 'f',
    },
  ]);

  filteredSearch = observable.box([]);
  searchTaskName = observable.box('');
  data = observable.box([]);
}

export const SearchStore = new searchStore();
export const searchStoreContext = createContext(new searchStore());
