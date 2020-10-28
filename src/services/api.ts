import axios from 'axios';

const api = axios.create({
   baseURL: 'https://apidosetoreletrico.com.br',    
});

export default api;