import axios from 'axios'

const USER_LOGIN_REST_API_URL = 'http://localhost:8080/user/login/101'
class UserLoginServices{

    getUsers(){
        return axios.get(USER_LOGIN_REST_API_URL);
    }
}
export default new UserLoginServices();