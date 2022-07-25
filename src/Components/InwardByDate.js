import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InwardService from "../Services/InwardService";

const InwardByDate=props=>{

  let {date}=useParams();
  const[Inward,setInward]=useState([]);

  useEffect(()=>{
    InwardService.getInwardOrderByDate(date).then(response=>{
        setInward([...response.data]);
        alert("Inward Orders are fetched successfully!");

    }).catch(error=>{
      alert(error.response.statusText);
      alert("Seems there occurred an error!");
    });

  },[Inward.Length]);



  
  return <div class="row">
          <div class="col-12">
              <h1 class="font-weight-bold font-italics">Inward Orders</h1>
                    <table class="table table-bordered table-hover table-responsive mt-4">
                          <thead>
                              <tr>
                                  <th>P_Id</th>
                                  <th>ProductName</th>
                                  <th>Brand</th>
                                  <th>DOE</th>
                                  <th>Qty</th>
                                  <th>Price</th>
                                  <th>SupplierName</th>
  
                              </tr>
                          </thead>
                          <tbody>
                           {/* //map state infor to table columns. Create an obj for Inward "t" */}
                              {Inward.map(I => <tr key={I.id}><td>{I.id}</td><td>{I.productName}</td><td>{I.productBrand}</td><td>{I.dateOfEntry}</td><td>{I.qty}</td><td>{I.price}</td><td>{I.name}</td>
                             </tr>)}
                                    
                          </tbody>
                      </table>
                      
                
               
          </div>
     
      </div>
}
export default InwardByDate;































// import {useState} from 'react'
// import InwardService from '../Services/InwardService'


// const InwardByDate=props=>{
//    //maintains state in react
//  const[Data,setData]=useState(
//     {
//       date:""
//     });
// //response state info
// const[Inward,setInward]=useState([]);
  
//     //To update the state we need eventhandlers
//     const handleChange=e=>{
//       let{name,value}=e.target; //get it from e.target and set in state
//       setData({...Data,[name]:value}); //spread operator will unwrap values from a container (ex object)
      
    
//     }
  
//     //On form submission we want to send a alert message , we again use event handler
//     const handleSubmit=e=>{
//       e.preventDefault();
//       //alert('Login successfull! Start Managing your Warehouse!')
//       InwardService.getInwardOrderByDate({date}).then(response=>{
//         setInward([...response.data]);
//         alert("Inward Orders are fetched successfully!")
//       }).catch(error=>{
//         alert("Seems there occurred an error!");
//         console.log(error);
//         console.log(Data);

//       })};
   
   
   
//    return <div><form  method="post" onSubmit={handleSubmit} >
//     <div class="row">
//         <div class="form-group row col-6">
//             <div class="col-4">
//                 <label>Enter Date :</label>
//             </div>
//             <div class="col-4">
//                 <input type="text" id="date"name="date"  value={Data.date} onChange={handleChange} />
//                 <button type="submit" class="btn btn-primary mt-4 mb-4">Search</button>
//             </div>
//         </div>
//     </div>
//     </form>


//     <div class="row">
//         <div class="col-12">
//             <h1 class="font-weight-bold font-italics">Inward Orders</h1>
//                   <table class="table table-bordered table-hover table-responsive mt-4">
//                         <thead>
//                             <tr>
//                                 <th>P_Id</th>
//                                 <th>ProductName</th>
//                                 <th>Brand</th>
//                                 <th>DOE</th>
//                                 <th>Qty</th>
//                                 <th>Price</th>
//                                 <th>SupplierName</th>

//                             </tr>
//                         </thead>
//                         <tbody>
//                          {/* //map state infor to table columns. Create an obj for Inward "t" */}
//                             {Inward.map(I => <tr key={I.id}><td>{I.id}</td><td>{I.productName}</td><td>{I.productBrand}</td><td>{I.dateOfEntry}</td><td>{I.qty}</td><td>{I.price}</td><td>{I.name}</td>
//                            </tr>)}
                                  
//                         </tbody>
//                     </table>
                    
              
             
//         </div>
   
//     </div>
//     </div>
    

// }
// export default InwardByDate;