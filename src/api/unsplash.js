import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 9b1750f207eee97d65621d93988bca4babc6e76773b5b037aff99dc7ad5b8028'
  }
});
