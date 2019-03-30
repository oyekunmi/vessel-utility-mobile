import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList} from "react-native";
import constants from '../constants';
import ProfileRow from '../components/profile-row';
import auth from './../api/auth';
import StatusCard from '../components/status-card';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { FlatList } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props){
    super(props); 
    this.state = ({
      profileName: ''
    });
  }

  componentDidMount(){
    auth.current().then(x=>{
      this.setState({
        profileName: x.name
      });
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <ProfileRow style={styles.profileRow} profileName={this.state.profileName} />
        <View style={styles.statusRow}>
          <StatusCard label="Expiring" value="0" size={0.47} />
          <StatusCard label="Expired" value="0" size={0.47} />
        </View>
        <View style={styles.addCard}>
          <Text style={styles.addCardTitle} >Create your first vessel to get started</Text>
          <MaterialIcons style={styles.addCardIcon} name="add-circle" onPress={()=>{ alert("A")}} />
        </View>
        <View style={styles.expiring}>
          <Text style={styles.expiringTitle}>EXPIRING CERTIFICATES</Text>
          {/* <FlatList
            data={[
              {key: 'Devin'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'Jackson'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'James'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'Joel'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'John'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'Jillian'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'Jimmy'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
              {key: 'Julie'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},{key: 'Devin'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          /> */}
        </View>
      </View>
    ); 
  }
}

// const 
const styles = StyleSheet.create({
  container: { 
    backgroundColor: constants.APP_BACKGROUND_COLOR ,
    flex: 1,
    paddingHorizontal: 25,
  },
  profileRow: {
    marginVertical: 50,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140
  },

  addCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 140,
    backgroundColor: constants.APP_BACKGROUND_ALTERNATE_COLOR,
    marginVertical: 40,
    borderRadius: constants.APP_BORDER_RADIUS,
    elevation: 1,
    // shadowOpacity: 0.75,
    // shadowRadius: 15,
    // shadowColor: 'red',
    // shadowOffset: { height: 0, width: 0 },
  },
  addCardTitle: {
    color: constants.PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.6,
  },
  addCardIcon: {
    color: constants.PRIMARY_COLOR,
    fontSize: 30,
    flex: 0.2,
  },
  expiring: {
    
  },
  expiringTitle: {
    textTransform: 'uppercase',
    color: "#A39595",
    fontWeight: 'bold'
  }
});
 
export default HomeScreen;