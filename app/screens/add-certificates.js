import React from 'react';
import { View, Text, StyleSheet, Picker, ScrollView } from 'react-native';
import constants from '../constants';
import GeneralInput from '../components/general-input';

class AddCertificateScreen extends React.Component {

  state = {
    vessel: ''
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.fieldContainer}>
          <Text>Vessel</Text>
          <Picker
            selectedValue={this.state.vessel}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <View>
          <Text>Certificate Group</Text>
          <Picker
            selectedValue={this.state.vessel}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <View>
          <Text>Name</Text>
          <GeneralInput />
        </View>
      
      </ScrollView>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9FC0FF',
    color: '#FFFFFF',
    flex: 1
  },
  header: {
    flex: 0.2
  },
  fieldContainer: {
    flex: 0.8,
    backgroundColor: 'red',
  },
  picker: {
    width: 100
  }
});
export default AddCertificateScreen;