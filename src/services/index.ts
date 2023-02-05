import axios from 'axios';

const api = axios.create({
    baseURL: 'https://familytec-backend-prod.up.railway.app/'
});

export default api;