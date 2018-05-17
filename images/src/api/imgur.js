import qs from 'qs';

const CLIENT_ID = '79b5fad7e0f0dca';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
}
