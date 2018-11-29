import axios from 'axios';

const api = axios.create({baseURL: 'https://hidden-reaches-92736.herokuapp.com'});

export default api;