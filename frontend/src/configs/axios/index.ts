import axios from 'axios';
const axiosIntance = axios.create({
  baseURL: 'http://localhost:230',
});

export default axiosIntance;
