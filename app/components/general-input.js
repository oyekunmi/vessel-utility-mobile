import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const GeneralInput = (props) => {
  const styles = StyleSheet.create({
    input: {
     width: '100%',
    //  height: 60,
     color: '#FFFFFF',
     borderColor: '#DEDBDB',
     borderBottomWidth: 1,
     marginBottom: 15,
     textAlign: props.textAlign,
     fontSize: 18,
     paddingTop: 15,
     paddingBottom: 15,
    }
  });

  return(
    <TextInput
        style={styles.input}
        onChangeText={(text) => {}}
        clearButtonMode="always"
        placeholder={props.placeholder}
        placeholderTextColor={'#DEDBDB'}
        
    />
  );
};
export default GeneralInput;