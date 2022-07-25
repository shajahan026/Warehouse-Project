
import {useEffect,useState} from 'react';
import masterService from '../Services/MasterService';


const Products = props=>{

    const[Products,setProducts]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    masterService.getProducts().then(response=>{
        setProducts([...response.data]);
        //alert("Purchase orders are fetched successfully!")

    }).catch(error=>{
        // alert("Seems there occurred an error!");
        console.log(error);
   })


})

 //Delete Function
//  const handleDelete=Id=>{
//     //     const confirmDelete=window.confirm("The item will be deleted permanently,do u want to proceed?")
//     //    if(confirmDelete)//confirm user wants to delete..
//     //    {
//          console.log(Id);
//          const confirmDelete=window.confirm("The item will be deleted permanently,do u want to proceed?")
//          if(confirmDelete)//confirm user wants to delete..
//          {
//          PurchaseOrderService.removePurchaseOrder(Id).then(response=>{
            
//             console.log(response);
//             alert("Order removed Successfully!");
//             //setPurchaseOrder([...response.data]);
//          }).catch(res => {

//             });
//         }
// }
          
    return <div className="row">
        <div className="col-12">
            
        <h1 className="font-weight-bold font-italics">Products</h1>
                  
                <div className="row">
                    
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {Products.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.productName}</td>
                                    <td>{I.price}</td>
                                    <td>{I.rating}</td>
                                    
                                    
                            
                            
                           
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default Products;

