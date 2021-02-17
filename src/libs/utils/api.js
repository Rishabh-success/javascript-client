import axios from 'axios';

export default async function callApi(route, method, body) {
    console.log('method', method)
    console.log('url is', route)
    console.log('data is', body)
  const mainUrl = 'http://localhost:9000/api' + route;
  const headers= {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token')
  }
  console.log('main url is', mainUrl);
    const resp = await axios({
      method,
      url: mainUrl,
      data: body,
      headers,
    });
    return resp;
  }