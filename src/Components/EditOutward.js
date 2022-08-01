import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import outwardService from '../Services/OutwardService';

export function EditOutward() {
    let {id} = useParams();
    console.log("id",id)
    const [Outward, setOutward] = useState({id:0,qty:0});
    
 

    // const getPurchaseOrderById = id => {
    //     axios.get('https://localhost:44304/api/PurchaseOrd/'+id).then(r => {
    //         setPurchaseOrder({ ...r.data });
    //     }).catch(r => {
    //         console.log(r.response.status);
    //     });
    // }
    useEffect(() => {
        outwardService.getOutwardById(id).then(response=>{
            setOutward(...response.data);
            //alert(PurchaseOrder.id);
            //alert("Purchase Order fetched successfully!");
    
        }).catch(error=>{
          alert(error.response.statusText);
          alert("Seems there occurred an error!");
        });
    
      },[Outward.Length]);

     const handleChange = (ev) => {
         let { name, value, type } = ev.target;
         if (type === 'number')
             value = parseInt(value);
         setOutward({ ...Outward, [name]: value });
     }
     const handleSubmit = ev => {
        ev.preventDefault();
        outwardService.editOutward(id,JSON.stringify(Outward.qty)).then(res => {
            alert('Order updated');
        }).catch(res => { 
            console.log(res);
        });
    }
     return <div className="row">
     <div className="col-md-6">
         <h1>Edit product details</h1>
         <form method="post" onSubmit={handleSubmit}>
             <div className='form-group'>
                 <label htmlFor='id'>Id</label>
                 <input type="number"
                     id="id"
                     name="id"
                     className='form-control'
                     value={Outward.id}
                     readOnly />
             </div>
             <div className='form-group'>
                 <label htmlFor='name'>Product Name</label>
                 <input type="text"
                     id="productName"
                     name="productName"
                     className='form-control'
                     value={Outward.productName}
                    readOnly />
             </div>
            
             <div className='form-group'>
                 <label htmlFor='name'>Customer ID</label>
                 <input type="text"
                     id="name"
                     name="name"
                     className='form-control'
                     value={Outward.fullname}
                     readOnly />
             </div>
             <div className='form-group'>
                 <label htmlFor='qty'>Quantity</label>
                 <input type="number"
                     id="qty"
                     name="qty"
                     className='form-control'
                    value={Outward.qty}
                     onChange={handleChange}
                     required/>
             </div>
             <div className='form-group mt-2'>
                 <button type="submit"
                     className='btn btn-primary'>
                     Update Product
                 </button>
             </div>
         </form>
     </div>
 </div>

}