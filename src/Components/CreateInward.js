import InwardService from "../Services/InwardService";
import { useState } from "react";

const CreateInward=props=>{
  //diff table values as separate obj
  const[InwardDTO,setInwardDTO]=useState({
    DateOfEntry: new Date(),
    Qty:'',
    ProductName:'',
    ProductBrand:'',
    Price:'',
    Name:'',
    YearsOfExperience:'',
    IsActive:false,
    Address:'',
    Email:'',
    PhoneNumber:''


})

    
//To update the state we need eventhandlers
    
   const handleInwardChange=e=>{
            let{name,value,type}=e.target; //get it from e.target and set in state
            if(type==='checkbox')
             value=e.target.checked;
             
            if(type==='date')
               value=new Date(value);
            if(type==='number')
               value=parseFloat(value);
            setInwardDTO({...InwardDTO,[name]:value}); //spread operator will unwrap values from a container (ex object)
          }

      
        //On form submission we want to send a alert message , we again use event handler
    const handleSubmit=e=>{
          e.preventDefault();
          //alert('Login successfull! Start Managing your Warehouse!')
          console.log({...InwardDTO});
          InwardService.addNewInward({...InwardDTO}).then(response=>{
             alert("New Order has arrived!");
             console.log(response);
            }).catch(error=>{
           // alert(error.response.statusText);
           console.log(error);
            alert("Seems some error occurred!");})
    }
  
    return <form method="post" onSubmit={handleSubmit}>
    <div className="container row">
    {/* ---- ROW 1 */}
        <div className="col-6">
                <h4 class="font-weight-bold font-italics">Create new Inward</h4>
 
                {/* ---CREATE HORIZONTAL FORM */}
                <div className="form-group row mt-4">
                    <div className="col-6 mt-4">
                
                    <label>Enter DateOfEntry:</label>
                    </div>
                    <div className="col-6 mt-4">
                    <input type="date" id="DateOfEntry" name="DateOfEntry" value={InwardDTO.DateOfEntry} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
                    </div>
                </div> 
         </div>

        <div className="col-6">
        <div className="form-group row mt-4">
                <div className="col-6 mt-4">
                
                <label>Enter Quantity:</label>
                </div>
                <div className="col-6 mt-4">
                <input type="number" id="Qty" name="Qty" value={InwardDTO.Qty} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
                </div>
        </div> 
        </div>
        
    {/* ---ROW 2 */}
        <div class="row">
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            
            <label>Enter ProductName:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="text" id="ProductName" name="ProductName" value={InwardDTO.ProductName} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            
            <label>Enter ProductBrand:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="text" id="ProductBrand" name="ProductBrand" value={InwardDTO.ProductBrand} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        </div>

        {/* ---ROW 3 */}
        <div class="row">
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            
            <label>Enter Price:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="number" id="Price" name="Price" value={InwardDTO.Price} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        

        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
           
            <label>Enter SupplierName:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="text" id="Name" name="Name" value={InwardDTO.Name} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>
        </div>

        {/* ROW 4 */}
        <div class="row">
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
           
            <label>Enter YearsOfExperience:</label>
            </div>
            <div className="col-6 mt-4">
             <input type="number" id="YearsOfExperience" name="YearsOfExperience" value={InwardDTO.YearsOfExperience} onChange={handleInwardChange}/>{/* makes sure to bind with model prop*/}
            </div>
        </div> 
        </div>

        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
      
            <label>Enter IsActive:</label>
            </div>
            <div className="col-6 mt-4">
 
            <div className="form-check">
                    <input class="form-check-input" type="checkbox" name="IsActive" 
                    id="IsActive" checked={InwardDTO.IsActive} onChange={handleInwardChange}/>
                    <label class="form-check-label" htmlfor="IsActive">
                        True
                    </label>
            </div>
            {/* <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="IsActive2" checked value={order.IsActive} onChange={handleChange}/>
                    <label class="form-check-label" for="IsActive2">
                        False
                    </label>
             </div> */}



            </div>
        </div> 
        </div>
        </div>

        {/* ROW 5 */}
        <div class="row">
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            <label>Enter Address</label>
            </div>

            <div className="col-6 mt-4">
            <textarea id="Address" name="Address" value={InwardDTO.Address} onChange={handleInwardChange}></textarea>
            </div>
        </div>
        </div>
        <div className="col-6">
        <div className="form-group row mt-4">
            <div className="col-6 mt-4">
            <label>Enter Email</label>
            </div>

            <div className="col-6 mt-4">
            <input type="Email" id="Email" name="Email" value={InwardDTO.Email} onChange={handleInwardChange}/>
            </div>
        </div>
        </div>
        </div>

        {/* ROW 6 */}
        
        <div class="row">
            <div className="col-6">
                    <div className="form-group row mt-4">
                        <div className="col-6 mt-4 mb-4">
                        <label>Enter PhoneNumber</label>
                    </div>

                    <div className="col-6 mt-4">
                        <input type="text" id="PhoneNumber" name="PhoneNumber" value={InwardDTO.PhoneNumber} onChange={handleInwardChange}/>
                    </div>
                    </div>
                </div>

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
    export default CreateInward;



   
    

        