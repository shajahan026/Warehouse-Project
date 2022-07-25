import axios from 'axios'
//create axios obj and store in http
const http=axios.create({
    headers:{'contenttype':'application.json'},
    baseURL:'https://localhost:44374'
});

const doLogin=LoginCredentials=>{    //method definition
    return http.post('/api/User/SignIn',LoginCredentials);
}

let LoginService={doLogin}; //method call
export default LoginService;
