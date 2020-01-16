import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://10.0.2.2:3333',
});

export default api;
