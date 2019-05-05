import certificateAPI from "../api/certificate";

const CertificatesService = {
  getExpiringCertificates() {
     return certificateAPI.fetch('expiring').then(processData); 
  },
  getExpiredCertificates(){
    return certificateAPI.fetch('expired').then(processData); 
  },
  getHealthyCertificates(){
    return certificateAPI.fetch('healthy').then(processData); 
  } 
};

function processData(data){
  return data.map(x=>{
      x.key = x.id.toString();
      return x;
    });
}
export default CertificatesService;