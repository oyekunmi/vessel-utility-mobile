import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

class GeneralInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }
  
  handleTextChanged = (text) => {
    this.setState({ text });
    this.props.onTextChanged(text);
  }

  handleSubmit = () => {
    const { text } = this.state;
    this.props.onSubmitEditing(text);
  }

  render(){

    const styles = StyleSheet.create({
      input: {
       width: '100%',
       color: '#FFFFFF',
       borderColor: '#DEDBDB',
       borderBottomWidth: 1,
       marginBottom: 15,
       textAlign: this.props.textAlign ,
       fontSize: 18,
       paddingTop: 15,
       paddingBottom: 15,
      }
    });

    return(
      <TextInput
          style={[styles.input, this.props.style]}
          onChangeText={this.handleTextChanged}
          clearButtonMode="always"
          placeholder={this.props.placeholder}
          placeholderTextColor={'#DEDBDB'}
          underlineColorAndroid="transparent"
          onSubmitEditing={this.handleSubmit}
      />
    );
  }


}



export default GeneralInput;