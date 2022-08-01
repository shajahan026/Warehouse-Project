import PurchaseOrderService from '../Services/PurchaseOrderService';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import CreatePurchaseOrder from './CreatePurchaseOrder';

const PurchaseOrderTable = props=>{

    const[PurchaseOrder,setPurchaseOrder]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    PurchaseOrderService.getPurchaseOrder().then(response=>{
      setPurchaseOrder([...response.data]);
        //alert("Purchase orders are fetched successfully!")

    }).catch(error=>{
        // alert("Seems there occurred an error!");
        console.log(error);
   })


})

 //Delete Function
 const handleDelete=Id=>{
    //     const confirmDelete=window.confirm("The item will be deleted permanently,do u want to proceed?")
    //    if(confirmDelete)//confirm user wants to delete..
    //    {
         console.log(Id);
         const confirmDelete=window.confirm("The item will be deleted permanently,do u want to proceed?")
         if(confirmDelete)//confirm user wants to delete..
         {
         PurchaseOrderService.removePurchaseOrder(Id).then(response=>{
            
            console.log(response);
            alert("Order removed Successfully!");
            //setPurchaseOrder([...response.data]);
         }).catch(res => {

            });
        }
}
          
    return <div className="row">
        <div className="col-12">
            
        <h1 className="font-weight-bold font-italics">Purchase Orders</h1>
                  
                <div className="row">
                    <div className="col-2">
                    <Link to='/CreatePurchaseOrder'className="btn btn-warning">Create PurchaseOrder</Link>
                    </div>
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>PO_Id</th>
                                <th>ProductName</th>
                                <th>DOP</th>
                                <th>Qty</th>
                                <th>SupplierName</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {PurchaseOrder.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.productName}</td>
                                    <td>{I.dateOfPurchase}</td>
                                    <td>{I.qty}</td>
                                    <td>{I.name}</td>
                                    <td><Link to={'/PurchaseOrder/'+I.id}>Details</Link></td>
                            
                            <Link to={'/EditPurchaseOrder/'+I.id}>Edit</Link> | 
                            <button className="btn bg-danger" onClick={()=>handleDelete(I.id)}>Delete</button>
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default PurchaseOrderTable;

//     "id": 10,
//     "productName": "Shampoo",
//     "dateOfPurchase": "2022-07-13T18:16:49.98",
//     "qty": 1,
//     "name": "Harshitha"