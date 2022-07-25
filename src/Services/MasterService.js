import axios from 'axios'
//create and store axios object in http
const http=axios.create({    
   headers:{'contenttype':'application/json'},
    baseURL:'https://localhost:5149/'
});

//http interceptors are fired automatically when request is called from http obj need not write again and again for each request

// http.interceptors.request.use( //does 2 things => one before request is sent and one if error occurred
//     config=>{
//         //before request is sent append token to header
//         //first get token from local storage
//         let token=window.localStorage.getItem('api-token');
//         //now append
//         config.headers['Authorization']='Bearer '+token;
//         return config; //returns to http object
//     },
//     error=>{
//         Promise.reject(error);
//     }
// )
//Get all Orders
const getCustomers=()=>{
    return http.get('api/Customers'); //pass url of api controller endpoint
}

const getOrders=()=>{
    return http.get('api/Orders'); //pass url of api controller endpoint
}
const getProducts=()=>{
    return http.get('api/Products'); //pass url of api controller endpoint
}

const getSuppliers=()=>{
    return http.get('api/Suppliers'); //pass url of api controller endpoint
}








let masterService = {getCustomers,getOrders,getProducts,getSuppliers};//pass a obj that has a method invoke it from somewhere
export default masterService ;