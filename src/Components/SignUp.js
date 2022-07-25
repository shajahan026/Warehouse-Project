
    import {useState} from 'react';
  

    const SignUp=props=>{
     //SignUp is a component defined as function written in JSX and calls a method called react.CreateElement(h1,prop,"text")
    
     //maintains state in react
     const[credentials,setCredentials]=useState(
      { FirstName:'',
        LastName :'',
        UserName:'', /*initially kept */
        DOB:'',
        Gender:'',
        Address:'',
        Password:'',
        ConfirmPassword:''
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
        props.handleRegister({...credentials});
    
    
      } 
           return <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter your FirstName</label>
                            </div>

                            <div className="col-6">
                            <input type="text"id="FirstName" name="FirstName" value={credentials.FirstName} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter your LastName</label>
                            </div>

                            <div className="col-6">
                            <input type="text" id="LastName" name="LastName" value={credentials.LastName} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter UserName</label>
                            </div>

                            <div className="col-6">
                            <input type="text" id="UserName" name="UserName" value={credentials.UserName} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter DateOfBirth</label>
                            </div>

                            <div className="col-6">
                            <input type="date" id="DOB" name="DOB" value={credentials.DOB} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter Gender</label>
                            </div>

                            <div className="col-6">
                            <select name="Gender" value={credentials.Gender} onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="TransGender">TransGender</option>

                            </select>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter Address</label>
                            </div>

                            <div className="col-6">
                            <textarea id="Address" name="Address" value={credentials.Address} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter Email</label>
                            </div>

                            <div className="col-6">
                            <input type="Email" id="Email" name="Email" value={credentials.Email} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Enter Password</label>
                            </div>

                            <div className="col-6">
                            <input type="password" id="Password" name="Password" value={credentials.Password} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-6">
                            <label>Confirm Password</label>
                            </div>

                            <div className="col-6">
                            <input type="password" id="ConfirmPassword" name="ConfirmPassword" value={credentials.ConfirmPassword} onChange={handleChange}/>
                            <button type="submit"  class="btn-outline-primary mt-4">Register</button>
                            </div>
                        </div>

                        

            </div>
                       
        </div>
        </div>
        </div>
        
    </form>
    
  

    }
export default SignUp;
    