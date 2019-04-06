import certificateAPI from "../api/certificate";
import moment from 'moment';

const CertificatesService = {
  getExpiringCertificates() {
    return certificateAPI.certificates.filter(c=>{
      const diffMonth =  moment(c.dateOfExpiry).diff(moment(), 'months');
      const diffDay =  moment(c.dateOfExpiry).diff(moment(), 'days');
      return (diffMonth >= 0 && diffMonth <= 3) && (diffDay > 0); 
    });
  },
  getExpiredCertificates(){
    return certificateAPI.certificates.filter(c=>{
      return moment(c.dateOfExpiry).isBefore(moment().subtract(1,'days'));
    });
  },
  getHealthyCertificates(){
    return certificateAPI.certificates.filter(c=>{
      const three_months_time = moment().add(3, 'month')
      return moment(c.dateOfExpiry).isAfter(three_months_time);
    });
  }
};

export default CertificatesService;