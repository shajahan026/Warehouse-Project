
import {useEffect,useState} from 'react';
import masterService from '../Services/MasterService';


const Customers = props=>{

    const[Customers,setCustomers]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    masterService.getCustomers().then(response=>{
        setCustomers([...response.data]);
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
            
        <h1 className="font-weight-bold font-italics">Customers</h1>
                  
                <div className="row">
                    
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Zip Code</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {Customers.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.firstName}</td>
                                    <td>{I.lastName}</td>
                                    <td>{I.address}</td>
                                    <td>{I.zipCode}</td>
                                    <td>{I.phoneNo}</td>
                                    <td>{I.emailID}</td>
                                    
                            
                            
                           
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default Customers;

