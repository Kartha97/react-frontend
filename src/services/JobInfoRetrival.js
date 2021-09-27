import axios from 'axios'

const JOB_INFO_RETRIVAL_REST_API_URL = 'http://localhost:8080/user/jobInfoRetrival'
class UserLoginServices{

    getUsers(){
        return axios.post(JOB_INFO_RETRIVAL_REST_API_URL);
    }
}
export default new UserLoginServices();