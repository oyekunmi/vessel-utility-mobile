import React from 'react';
import {View, Text} from 'react-native';
import constants from '../constants';
  
const CertificateTeaserCard = (props) => {
  const {name,dateOfIssue,dateOfExpiry, } = props.certificate;
  const{status} = props;
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.nameRow}>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.status, {backgroundColor: status}]}></View>
      </View>
      <View style={styles.teaserRow}> 
        <View style={styles.teaserItem}> 
          <Text>{dateOfExpiry}</Text>
          <Text style={styles.teaserItemLabel}>Date of Expiry</Text>
        </View>
        <View style={[styles.teaserItem, styles.teaserItemMiddle]}>
          <Text>{dateOfExpiry}</Text>
          <Text style={styles.teaserItemLabel}>Next Annual</Text>
        </View>
        <View style={[styles.teaserItem, styles.teaserItemLast]}>
          <Text>{5} Years</Text>
          <Text style={styles.teaserItemLabel}>Duration</Text>
        </View> 
      </View>
    </View>
  );
};

// CertificateTeaserCard.propTypes = ({
//   certificate: PropTypes.object.isRequired
// });


const styles = ({
  container:{
    flex: 1,
    backgroundColor: constants.APP_BACKGROUND_ALTERNATE_COLOR,
    // backgroundColor: 'red',
    borderRadius: constants.APP_BORDER_RADIUS,
    marginTop: 10,
    elevation: 1,
    borderColor: constants.APP_BACKGROUND_ALTERNATE_COLOR,
  },
  nameRow:{
    flex:1,
    borderColor: constants.APP_BACKGROUND_COLOR,
    borderBottomWidth: 1,
    padding: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name:{
    color: '#909090',
    fontSize: 14,
    // flex:1,
  },
  status: {
    // flex: 1,
    width: 10,
    height: 10,
    borderRadius:5,
  },
  teaserRow:{
    padding: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  teaserItem: {
    alignItems: 'center', //center items horizontally in their container, i.e secondary axis since flexDirection is column
    // backgroundColor: 'red',
    margin:1,
  },
  teaserItemMiddle:{
    flex: 1,
  },
  teaserItemLabel: {
    color: '#909090',
  },

});

export default CertificateTeaserCard;