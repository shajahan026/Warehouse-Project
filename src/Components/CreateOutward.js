
import { useEffect, useState } from "react";

import outwardService from "../Services/OutwardService";


const CreateOutward = props => {
  //diff table values as separate obj
  const [OutwardOrdDTO, setOutwardOrdDTO] = useState({

    
    dateOfEntry: new Date(),
    qty: 0,
    p_Id: 0,
    product: {
      productName: "string",
      productBrand: "string",
      price: 0
    },
    c_Id: 0,
    customer: {
      fullname: "string",
      address: "string",
      phoneNumber: "string",
      email: "string"
    }
  }
  )
  // const [Order,setOrder]=useState({})
  // useEffect(() => {
  //   PurchaseOrderService.getAllProducts().then(response=>{
  //       setOrder(...response.data);
  //       //alert(PurchaseOrder.id);
  //       //alert("Purchase Order fetched successfully!");

  //   }).catch(error=>{
  //     alert(error.response.statusText);
  //     alert("Seems there occurred an error!");
  //   });
  // })




  const handleOutwardChange = e => {
    let { name, value, type } = e.target; //get it from e.target and set in state
    if (type === 'checkbox')
      value = e.target.checked;

    if (type === 'date')
      value = new Date(value);
    if (type === 'number')
      value = parseFloat(value);
      setOutwardOrdDTO({ ...OutwardOrdDTO, [name]: value }); //spread operator will unwrap values from a container (ex object)
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
    //alert('Login successfull! Start Managing your Warehouse!')
    console.log({ ...OutwardOrdDTO });
    outwardService.addNewOutward({ ...OutwardOrdDTO }).then(response => {
      alert("New Order!");
      console.log(response);
    }).catch(error => {
      alert(error);
      console.log(error);
      alert("Seems some error occurred!");
    })
  }



  return <form method="post" onSubmit={handleSubmit}>
    <div className="container row">
      {/* ---- ROW 1 */}
      <div className="col-6">
        <h4 class="font-weight-bold font-italics">Create new Outward</h4>

        {/* ---CREATE HORIZONTAL FORM */}
        <div className="form-group row mt-4">
          <div className="col-6 mt-4">

            {/* <label>Enter Date Of Entry:</label> */}
          </div>
          {/* <div className="col-6 mt-4">
            <input type="date" id="DateOfEntry" name="DateOfEntry" value={OutwardOrdDTO.dateOfEntry} onChange={handleOutwardChange} />
          </div> */}
        </div>
      </div>


      <div className="col-6">
        <div className="form-group row mt-4">
          <div className="col-6 mt-4">

            <label>Enter Quantity:</label>
          </div>
          <div className="col-6 mt-4">
            <input type="number" id="qty" name="qty" value={OutwardOrdDTO.qty} onChange={handleOutwardChange} />{/* makes sure to bind with model prop*/}
          </div>
        </div>
      </div>

      {/* ---ROW 2 */}
      <div class="row">
        <div className="form-group row mt-4">
          <div className="form-group row mt-4">

            <label>Enter Product Name 
            <div className="col-6 mt-4">
              <select className="form-control"
                id="productName"
                name="productName"
                value={OutwardOrdDTO.productName}
                onChange={handleOutwardChange}>
                <option value="hoodie">hoodie</option>
                <option value="dress">dress</option>
                
              </select>
             
            </div>
           </label></div>
        </div>
      </div>


      <div class="row">
        <div className="col-6">
          <div className="form-group row mt-4">
            <div className="col-6 mt-4">

              <label>Enter ProductID:</label>
            </div>
            <div className="col-6 mt-4">
              <input type="number" id="p_Id" name="p_Id" value={OutwardOrdDTO.p_Id} onChange={handleOutwardChange} />{/* makes sure to bind with model prop*/}
            </div>
          </div>
        </div>
      </div>





      {/* ---ROW 3 */}

      <div class="row">
        <div className="col-4">
          <div className="form-group row mt-4">
            <label>Enter Customer Name </label>
            <select className="form-control"
              id="cName"
              name="cName"
              value={OutwardOrdDTO.fullname}
              onChange={handleOutwardChange}>

              <option value="char">char</option>
              <option value="sha">sha</option>
              
            </select>

          </div>
        </div>
      </div>


      <div className="col-6">
        <div className="form-group row mt-4">
          <div className="col-6 mt-4">

            <label>Enter Customer ID:</label>
          </div>
          <div className="col-6 mt-4">
            <input type="number" id="c_Id" name="c_Id" value={OutwardOrdDTO.c_Id} onChange={handleOutwardChange} />{/* makes sure to bind with model prop*/}
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
  


  </form >


}

export default CreateOutward;






