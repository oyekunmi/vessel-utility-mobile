import { AsyncStorage } from "react-native";

const localstore = {
  save(key, value){
    console.log("saving " + value);
    return AsyncStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return AsyncStorage.getItem(key);
  },
  remove(key){
    return AsyncStorage.removeItem(key);
  },

};

export default localstore;