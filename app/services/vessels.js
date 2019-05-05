import vesselAPI from "../api/vessel";

const VesselService = {
  all() {
     return vesselAPI.fetch().then(processData); 
  }
};

function processData(data){
  console.log(data);
  return data.map(x=>{
      x.key = x.id.toString();
      return x;
    });
}
export default VesselService;