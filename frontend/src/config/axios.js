import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:8001/api'
});

    instance.defaults.headers.common['Content-Type']='application/json';

export default instance;