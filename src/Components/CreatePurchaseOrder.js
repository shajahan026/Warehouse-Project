import PurchaseOrderService from "../Services/PurchaseOrderService";
import { useState } from "react";

const CreatePurchaseOrder=props=>
{
  //diff table values as separate obj
  const[PurchaseOrder, setPurchaseOrder]=useState({
   
    dateOfPurchase: new Date(),
   
    dateOfPurchase:new Date(),
    qty: "",
    p_Id: "",
    productDTO: {
      productName: "",
      productBrand: "",
      price: ""
    },
    s_Id: "",
    supplierDTO: {
      name: "string",
      yearsOfExperience:"",
      isActive: true,
      address: "",
      email: "",
      phoneNumber: ""
     }
    })
    
   const handlePurchaseOrderChange=e=>{
            let{name,value,type}=e.target; //get it from e.target and set in state
            if(type==='checkbox')
             value=e.target.checked;
             
            if(type==='date')
               value=new Date(value);
            if(type==='number')
               value=parseFloat(value);
            setPurchaseOrder({...PurchaseOrder,[name]:value}); //spread operator will unwrap values from a container (ex object)
          }

      
        //On form submission we want to send a alert message , we again use event handler
    //const handleSubmit=e=>{
          //e.preventDefault();
          //alert('Login successfull! Start Managing your Warehouse!')
          //console.log({...PurchaseOrdDTO});
          //PurchaseOrderService.addNewPurchase({...PurchaseOrdDTO}).then(response=>{
            // alert("Order Created!");
             //console.log(response);
            //}).catch(error=>{
           // alert(error.response.statusText);
           //console.log(error);
            //alert("Seems some error occurred!");})
    //}
    const handleSubmit = e => {
        e.preventDefault();
        PurchaseOrderService.addNewPurchase(PurchaseOrder).then(res => {
            alert('OrderAdded');
        }).catch(res => { });
    }

  
    return <form method="post" onSubmit={handleSubmit}>
    <div className="container row">
    {/* ---- ROW 1 */}
        <div className="col-6">
                <h4 class="font-weight-bold font-italics">Create new Purchase</h4>
 
                {/* ---CREATE HORIZONTAL FORM */}
                <div className="form-group row mt-4">
                    <div className="col-6 mt-4">
                
                    <label>Enter DateOfPurchase:</label>
                    </div>
                    <div className="col-6 mt-4">
                    <input type="date" id="DateOfPurchase" name="DateOfPurchase" value={PurchaseOrder.DateOfPurchase} onChange={handlePurchaseOrderChange}/>{/* makes sure to bind with model prop*/}
                    </div>
                </div> 
         </div>

        <div className="col-6">
        <div className="form-group row mt-4">
                <div className="col-6 mt-4">
                
                <label>Enter Quantity:</label>
                </div>
                <div className="col-6 mt-4">
                <input type="number" id="Qty" name="Qty" value={PurchaseOrder.Qty} onChange={handlePurchaseOrderChange}/>{/* makes sure to bind with model prop*/}
                </div>
        </div> 
        </div>
        
    {/* ---ROW 2 */}
        <div class="row">
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            
            <label>Enter ProductID:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="number" id="ProductID" name="ProductID" value={PurchaseOrder.P_ID} onChange={handlePurchaseOrderChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        </div>
        
       

        {/* ---ROW 3 */}
        <div class="row">
    

        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
           
            <label>Enter SupplierId:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="number" id="SupplierId" name="SupplierId" value={PurchaseOrder.S_Id} onChange={handlePurchaseOrderChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        </div>
        <div class="row">
               <div className="col-6">
                <div className="col-6">
                   <div className="col-6 mt-4 ">
                   <button type="submit" className="btn btn-outline-primary">Create</button>
                   </div>
                </div>
            </div>
            
            
            </div>
            </div>
         
         
         
    </form>
       
    
 }

 export default CreatePurchaseOrder;



   
    

        