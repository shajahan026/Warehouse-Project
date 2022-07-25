
import {useEffect,useState} from 'react';
import masterService from '../Services/MasterService';


const Suppliers = props=>{

    const[Suppliers,setSuppliers]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    masterService.getSuppliers().then(response=>{
        setSuppliers([...response.data]);
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
            
        <h1 className="font-weight-bold font-italics">Suppliers</h1>
                  
                <div className="row">
                    
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>Supplier ID</th>
                                <th>Supplier Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Zip Code</th>
                                
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {Suppliers.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.supplierName}</td>
                                    <td>{I.address}</td>
                                    <td>{I.phoneNo}</td>
                                    <td>{I.emailId}</td>
                                    <td>{I.zipCode}</td>
                                    
                                    
                            
                            
                           
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default Suppliers;

