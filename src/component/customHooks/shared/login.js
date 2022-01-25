function login(setApiToken, apiToken, setCandidatos, getCandidatos) {
    return () => {
  
      const storageApiToken = localStorage.getItem('apiToken');
      if (storageApiToken === null) {
        let requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        fetch("https://api-fc.herokuapp.com/authAPI/login?email=virginia.morilla@gmail.com&password=123456", requestOptions)
          .then(response => response.json().then(data => {
            localStorage.setItem("apiToken", data.token.token);
            setApiToken(data.token.token);
  
          }))
          .catch(error => console.log('error', error));
      } else {
        setApiToken(storageApiToken);
      }
  
      if (apiToken !== undefined) {
          console.log(getCandidatos)
          getCandidatos(apiToken, setCandidatos);
      }
  
    };
  }

  export default login;