import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const GeneralInput = (props) => {
  const styles = StyleSheet.create({
    input: {
     width: '100%',
    //  height: 60,
     color: '#FFFFFF',
     borderColor: '#ECECEC',
    //  borderWidth: 1,
     borderBottomWidth: 1,
     marginBottom: 15,
     textAlign: props.textAlign,
     fontSize: 18,
    //  borderOpacity: .5

    }
  });

  return(
    <TextInput
        style={styles.input}
        onChangeText={(text) => {}}
        // value={}
        placeholder={props.placeholder}
        
    />
  );
};

export default GeneralInput;