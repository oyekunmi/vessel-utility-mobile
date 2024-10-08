import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList} from "react-native";
import constants from '../constants';
import ProfileRow from '../components/profile-row';
import auth from './../api/auth';
import StatusCard from '../components/status-card';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import vesselAPI from '../api/vessel';
import { ScrollView } from 'react-native-gesture-handler';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import CertificatesService from '../services/certificates';
import VesselService from '../services/vessels';

class HomeScreen extends Component {

  constructor(props){
    super(props); 
    this.state = ({
      profileName: '',
      addType: vesselAPI.empty ? 'vessel': 'certificate',
      addPage: vesselAPI.empty ? 'AddVessel': 'AddCertificate',
      emptyCertificates: !vesselAPI.empty,
      emptyVessel: true,
      vessels: [],
      previewCertificates: [],
    }); 
  }

  async componentDidMount(){
    auth.current().then(x=>{
      this.setState({
        profileName: x.name
      }); 
    });
    
    const vessels = await VesselService.all();
    const emptyVessels = vessels.length === 0;
    const expiringCerts = await CertificatesService.getExpiringCertificates();
    const expiredCerts = await CertificatesService.getExpiredCertificates();
    const combined = expiredCerts.concat(expiringCerts);
    this.setState({
      vessels: vessels,
      emptyVessel: emptyVessels,
      addType: emptyVessels ? 'vessel': 'certificate',
      addPage: emptyVessels ? 'AddVessel': 'AddCertificate',
      expiringCertificates: expiringCerts,
      expiredCertificates: expiredCerts,
      previewCertificates: combined
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
    const expiringLength = this.state.expiringCertificates ? this.state.expiringCertificates.length:0;
    const expiredLength = this.state.expiredCertificates ? this.state.expiredCertificates.length:0;
    const nav = this.props.navigation;
    return(
      <View style={styles.statusRow}>
        <StatusCard onPress={() => nav.navigate('ExpiringCertificates')} label="Expiring" value={expiringLength} size={0.47} />
        <StatusCard onPress={() => nav.navigate('ExpiredCertificates')} label="Expired" value={expiredLength} size={0.47} />
      </View>
    );
  }

  renderAddCard(){
    return (
      <View style={styles.addCard}>
        {
          !this.state.emptyVessel &&  
          (
          <Text style={styles.addCardTitle} >
            Add more {this.state.addType} to see more functions
          </Text>
          )
        }
       
        { 
          this.state.emptyVessel && 
          (
          <Text style={styles.addCardTitle} >
            Create your first {this.state.addType} to get started
          </Text>
          )
        }

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
        <Text style={styles.expiringTitle}>PREVIEW CERTIFICATES</Text>

        {!this.state.emptyVessel && (
          <FlatList
            data={this.state.previewCertificates}
            renderItem={
              (item) => 
                <CertificateTeaserCard certificate={item} />
            }
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