class EasyHTTP {
  //Make HTTP Get Request
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });    
  }

  //Make HTTP Post Request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });    
  }

//Make HTTP Put Request
put(url, data){
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });    
}

//Make HTTP Delete Request
delete(url){
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(() => resolve('Resource deleted'))
    .catch(err => reject(err));
  });    
}
}
