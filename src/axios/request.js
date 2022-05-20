import axios from "axios";
import router from "../router";

const requestAxios = axios.create({
    baseURL: 'https://vue-online-bank-f7e26-default-rtdb.europe-west1.firebasedatabase.app'
})

requestAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        router.push('auth?message=auth')
    }
})

export default requestAxios