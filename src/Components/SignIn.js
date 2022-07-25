import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login=props=>{
 //Login is a component defined as function written in JSX and calls a method called react.CreateElement(h1,prop,"text")

 //maintains state in react
 const[credentials,setCredentials]=useState(
  {
    UserName:'', /*initially kept */
    Password:''
  })
  

  //To update the state we need eventhandlers
  const handleChange=e=>{
    let{name,value}=e.target; //get it from e.target and set in state
    setCredentials({...credentials,[name]:value}); //spread operator will unwrap values from a container (ex object)
  }

  //On form submission we want to send a alert message , we again use event handler
  
  const handleSubmit=e=>{
    e.preventDefault();
    //alert('Login successfull! Start Managing your Warehouse!')
    props.handleLogin({...credentials});



  } 
 
  return <form method="post" onSubmit={handleSubmit}>

    <div className="container row ">
      <div className="col-8">
        
{/* Create Vertical form */}
        <div class="form-group row">
         
          <div className="col-6 mt-4">
            <h4>Login</h4>
            <label>Enter Username/Email:</label>
          </div>
          <div className="col-6 form-control">
             <input type="text" id="UserName" name="UserName" value={credentials.UserName} onChange={handleChange}/>{/* makes sure to bind with model prop*/}
          </div>
        </div>
{/* Create Vertical form */}
          <div className="form-group row">
            <div className="col-6">
              <label>Enter Password:</label>
            </div>
            <div className="col-6 form-control">
              <input type="password" id="Password" name="Password" value={credentials.Password} onChange={handleChange} />
            </div>
            </div>
            

{/*create submit button*/}
    <div className="form-group">
    <button type="submit" className="btn btn-outline-primary">Login</button>
    </div>
     
            
        </div>
        
        </div>
     
   
    
    
  </form>



}
export default Login;