import axios from 'axios'

  axios.interceptors.response.use(
    function (response) {
      if (response.data) {
        // return success
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        // reject errors & warnings
        return Promise.reject(response);
      }

      // default fallback
      return Promise.reject(response);
    },
    function (error) {
      // if the server throws an error (404, 500 etc.)
      return Promise.reject(error);
    }
  );

//create axios obj and store in http
const http=axios.create({
    headers:{'contenttype':'application.json'},
    baseURL:'https://localhost:44374/'
});

const handleRegister=credentials=>{    //method definition
    return http.post('/api/User/SignUp',credentials);
}

let RegisterService={handleRegister}; //method call
export default RegisterService;
