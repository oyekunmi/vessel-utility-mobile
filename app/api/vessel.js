let vesselAPI = {
  empty: true,
  vessels: [],
  async fetch(state){
    const response = await fetch(`http://captain.moovelogic.com/api/vessels`,{
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

export default vesselAPI;