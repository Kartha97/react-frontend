import axios from 'axios'

const USER_REGISTARTION_REST_API_URL = 'http://localhost:8080/user/registarion'
class UserLoginServices{

    getUsers(){
        return axios.post(USER_REGISTARTION_REST_API_URL);
    }
}
export default new UserLoginServices();