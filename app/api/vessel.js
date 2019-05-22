let vesselAPI = {
  empty: true,
  vessels: [],
  async fetch(state){
    const response = await fetch(`https://captain.moovelogic.com/api/vessels`,{
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
    resp = await response.json();
    console.log(resp);
    return resp;
  }
};

export default vesselAPI;