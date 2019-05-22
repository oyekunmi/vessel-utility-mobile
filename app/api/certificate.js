let certificateAPI = {
  empty: true,
  certificates: [],
  async fetch(state){
    const response = await fetch(`https://captain.moovelogic.com/api/certificates/${state}/state`,{
      headers: new Headers({
        'Authorization': "Bearer modey",
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