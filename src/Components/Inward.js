import InwardService from "../Services/InwardService";
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';



const InwardTable=props=>{
//create and store state information
    const[Inward,setInward]=useState([]);
    useState({Login:props.isLoggedIn});


//when u want to trigger a http api call as soon as a component is rendered use useEffect()
 //It calls and renders again . [] means only once orelse it calls after a render is complete over and over again 

 useEffect(()=>{

    InwardService.getInwardOrder().then(response=>{
      //if get operation is successful then set the state info
        setInward([...response.data]);
        alert("Inward Orders are fetched successfully!")

    }).catch(error=>{
        alert("Seems there occurred an error!");
        console.log(error);
   })


 },[Inward.length])

//Delete Function
const handleDelete=([Inward])=>{
    const confirmDelete=window.confirm("The item will be deleted permanently,do u want to proceed?")
   if(confirmDelete)//confirm user wants to delete..
   {
    // to delete or remove an item in an array using javascript we can use splice() but it needs idex we have only id 
   const item = Inward.filter(option=>option.id==Inward.Id) ;
   setInward({...Inward,[item]:""});

   }}
  
  


    return <div className="row">
        <div className="col-12">
            
        <h1 className="font-weight-bold font-italics">Inward Orders</h1>
                  
                <div className="row">
                    <div className="col-2">
                    <Link to='/CreateInward'className="btn btn-warning">Create Inward</Link>
                    </div>
                    {/* <div className="col-2">
                    <a href='/Inward/:date' className="btn btn-warning">Search By Date</a>
                    </div> */}
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>P_Id</th>
                                <th>ProductName</th>
                                <th>Brand</th>
                                <th>DOE</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>SupplierName</th>
                                <th>Otherlogs</th>

                            </tr>
                        </thead>
                        <tbody>
                         {/* //map state infor to table columns. Create an obj for Inward "t" */}
                            {Inward.map( I => <tr key={I.id}><td>{I.id}</td><td>{I.productName}</td><td>{I.productBrand}</td><td>{I.dateOfEntry}</td><td>{I.qty}</td><td>{I.price}</td><td>{I.name}</td><td><Link to={'/Inward/'+I.dateOfEntry}>Details</Link></td>
                            
                            
                            <a href="#" className="btn bg-primary">Edit</a>
                            <a href="#" className="btn bg-danger" onClick={handleDelete}>Delete</a>
                            </tr>)}
                                  
                                  
                                  
                                  
                                  





                                
                            



                        </tbody>

                    


                    </table>
                    
              
             
                    
    </div>

    
    
}

export default InwardTable;

// InwardService.removeInward(Inward.id).then(response=>{
//     alert("Inward deleted successfully!");
//   }).catch(error=>{
//       alert(error.response.statusText);
//   })}}