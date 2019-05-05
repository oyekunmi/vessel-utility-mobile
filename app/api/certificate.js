let certificateAPI = {
  empty: true,
  certificates: [],
  async fetch(state){
    const response = await fetch(`http://captain.moovelogic.com/public/api/certificates/${state}/state`,{
      headers: new Headers({
        'Authorization': "Bearer SHmkX",
      })
    })
    .then( (response)=>{
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response;
    })
    return await response.json();
  }
};

export default certificateAPI;