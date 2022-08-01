import axios from 'axios'
//create and store axios object in http
const http=axios.create({    
   headers:{'content-type':'application/json'},
    baseURL:'https://localhost:44344/'
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
const getOUtwardOrder=()=>{
    return http.get('api/OutwardOrd'); //pass url of api controller endpoint
}



const addNewOutward=Outwardobj=>{
    return http.post('AddOutward',Outwardobj);
}

// //Delete Orders By Id
// const removeInward=id=>{
//     return http.delete('api/InwardOrder/DeleteInward/'+id);
// }
const getOutwardById= Id=>{
    return http.get('/api/OutwardOrd/'+Id); //pass url of api controller endpoint
}
const editOutward=(id,obj)=>{
    return http.put(`/api/OutwardOrd/${id}/updateQty`,obj);
}
const removeOutward=id=>{
    return http.delete(`/api/OutwardOrd/DeleteOutward/${id}`);
}

//let InwardService = {getInwardOrderByDate};
let outwardService = {addNewOutward,getOUtwardOrder,getOutwardById,editOutward,removeOutward};//pass a obj that has a method invoke it from somewhere
export default outwardService ;