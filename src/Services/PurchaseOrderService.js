import axios from 'axios'
//create and store axios object in http
const http=axios.create({    
   headers:{'content-type':'application/json'},
    baseURL:'https://localhost:44304'
});



http.interceptors.request.use(
    config=>{
        let token=window.localStorage.getItem('api-token');
        config.headers['Authorization']='Bearer '+token;
        return config;
    },
    error=>{
        Promise.reject(error);
    }
)

//Get all Orders
const getPurchaseOrder=()=>{
    return http.get('/api/PurchaseOrd'); //pass url of api controller endpoint
}
const getPurchaseOrderById= Id=>{
    return http.get('/api/PurchaseOrd/'+Id); //pass url of api controller endpoint
}

//Create Purchase Order

const addNewPurchase=PurchaseOrderobj=>{
    return http.post('/AddPurchaseOrder',PurchaseOrderobj);
}

//Delete Orders By Id
const removePurchaseOrder=id=>{
    return http.delete(`/api/PurchaseOrd/DeletePurchaseOrder/${id}`);
}
const editPurchaseOrder=(id,obj)=>{
    return http.put(`/api/PurchaseOrd/${id}/updateQty`,obj);
}

// const getAllProducts=()=>{
//     return http.get('/api/Product/GetAllProducts'); //pass url of api controller endpoint
// }

let PurchaseOrderService = {getPurchaseOrder,getPurchaseOrderById,removePurchaseOrder,addNewPurchase,editPurchaseOrder};//pass a obj that has a method invoke it from somewhere
export default PurchaseOrderService ;