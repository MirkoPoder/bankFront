async function post(url, data) {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    return await fetch(url, settings);
  }
  
  async function get(url, params = '') {
    return await fetch(`${url}${params}`);
  }
  
  export { post, get };