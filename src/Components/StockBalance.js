
import {useEffect,useState} from 'react';
import stockService from '../Services/StockService';


const StockBalance = props=>{

    const[StockBalance,setStockBalance]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    stockService.getStockBalance().then(response=>{
        setStockBalance([...response.data]);
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
            
        <h1 className="font-weight-bold font-italics">Orders</h1>
                  
                <div className="row">
                    
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer ID</th>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {StockBalance.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.customerId}</td>
                                    <td>{I.productId}</td>
                                    <td>{I.qty}</td>
                                    
                                    
                            
                            
                           
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default StockBalance;

