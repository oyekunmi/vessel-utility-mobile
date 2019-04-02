import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList} from "react-native";
import constants from '../constants';
import ProfileRow from '../components/profile-row';
import auth from './../api/auth';
import StatusCard from '../components/status-card';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import vesselAPI from '../api/vessel';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";

class HomeScreen extends Component {
  constructor(props){
    super(props); 
    this.state = ({
      profileName: '',
      addType: 'vessel',
      addPage: 'AddVessel',
      emptyCertificates: true,
      expiringCertificates: [],
    }); 
  } 

  componentDidMount(){
    auth.current().then(x=>{
      this.setState({
        profileName: x.name
      }); 
    });
    vesselAPI.fetch().then(x=>{
      this.setState({
        addType: vesselAPI.empty ? 'vessel': 'certificate',
        addPage: vesselAPI.empty ? 'AddVessel': 'AddCertificate',
        emptyCertificates: !vesselAPI.empty
      });
    });
    certificateAPI.fetch().then(x=>{
      this.setState({
        expiringCertificates: certificateAPI.certificates
      })
    });
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerContent}>
          <ProfileRow style={styles.profileRow} profileName={this.state.profileName} />
          {this.renderStatusRow()}
          {this.renderAddCard()}
          {this.renderExpiringCard()}
        </View>
      </ScrollView>  
    ); 
  }

  renderStatusRow(){
    return(
      <View style={styles.statusRow}>
        <StatusCard label="Expiring" value="0" size={0.47} />
        <StatusCard label="Expired" value="0" size={0.47} />
      </View>
    );
    
  }

  renderAddCard(){
    return (
      <View style={styles.addCard}>
        <Text style={styles.addCardTitle} >Create your first {this.state.addType} to get started</Text>
        <MaterialIcons 
          style={styles.addCardIcon}
          name="add-circle"
          onPress={()=>{ this.props.navigation.navigate(this.state.addPage) }} />
      </View>
    );
  }

  renderExpiringCard(){ 
    return (
      <View style={styles.expiring}>
        <Text style={styles.expiringTitle}>EXPIRING CERTIFICATES</Text>

        {this.state.emptyCertificates && (
          <FlatList
            data={this.state.expiringCertificates}
            renderItem={
              ({item}) => 
                <CertificateTeaserCard certificate={item} />
            }
            // renderItem={({item}) => <Text style={styles.expiringItemRow}>{item.name}</Text>}
          />
        )}
      </View>
    );
  }
}
 
// const 
const styles = StyleSheet.create({
  container:{
    backgroundColor: constants.APP_BACKGROUND_COLOR ,
    flex: 1,
  },
  containerContent: { 
    paddingHorizontal: 25,
    paddingBottom: 20,
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
    flex: 1 
  },
  expiringTitle: {
    textTransform: 'uppercase',
    color: "#A39595",
    fontWeight: 'bold'
  },
  expiringItemRow: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal:5,
    marginVertical: 5,
    borderRadius: constants.APP_BORDER_RADIUS,
  }
});
 
export default HomeScreen;