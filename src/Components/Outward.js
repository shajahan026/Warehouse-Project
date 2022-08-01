
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import outwardService from '../Services/OutwardService';


const Outward = props=>{

    const[Outward,setOutward]=useState([]);
    useState({Login:props.isLoggedIn});
 useEffect(()=>{

    outwardService.getOUtwardOrder().then(response=>{
        setOutward([...response.data]);
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
         outwardService.removeOutward(Id).then(response=>{
            
            console.log(response);
            alert("Order removed Successfully!");
            
         }).catch(res => {

            });
        }
}
          
    return <div className="row">
        <div className="col-12">
            
        <h1 className="font-weight-bold font-italics">Outwards</h1>
                  
                <div className="row">
                    <div className="col-2">
                    <Link to='/CreateOutward'className="btn btn-warning">Create Outward</Link>
                    </div>
                   
                </div>
                    </div>
                    <table className="table table-bordered table-hover table-responsive mt-4">
                        <thead>
                            <tr>
                                <th>Outward ID</th>
                                <th>Customer ID</th>
                                <th>Date Of Entry</th>
                                <th>Quantity</th>
                                <th>Product Name</th>
                                
                                

                            </tr>
                        </thead>
                        <tbody>
                         
                            {Outward.map( I =>
                                 <tr key={I.id}>
                                    <td>{I.id}</td>
                                    <td>{I.c_Id}</td>
                                    <td>{I.dateOfEntry.slice(0,10)}</td>
                                    <td>{I.qty}</td>
                                    <td>{I.productName}</td>
                                    
                                    
                            
                            
                            <Link to={'/EditOutward/'+I.id}>Edit</Link>
                            <button className="btn bg-danger" onClick={()=>handleDelete(I.id)}>Delete</button>
                            </tr>)}
                        </tbody>
                 </table>          
    </div>
}

export default Outward;

