import './App.css';
import {useNavigate,Routes,Route} from 'react-router-dom'; //defines routing component BrowserRouter from react-route-dom file

//import other .js components
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';
import Inward from './Components/Inward';
import { useState } from 'react';
import LoginService from './Services/LoginService';
import RegisterService from './Services/RegisterService';
import InwardByDate from './Components/InwardByDate';
import CreateInward from './Components/CreateInward';
import Dashboard from './Components/Dashboard';
import PurchaseOrderTable from './Components/PurchaseOrder';
import CreatePurchaseOrder from './Components/CreatePurchaseOrder';
import Outward from './Components/Outward';
import Customers from './Components/Customer';
import Orders from './Components/Orders';
import Products from './Components/Products';
import Suppliers from './Components/Supplier';
import StockBalance from './Components/StockBalance';
import CreateOutward from './Components/CreateOutward';
import { EditOutward } from './Components/EditOutward';



function App() {

  // Store State information in userDetails
  const[userDetails,setUserDetails]=useState({userName:"",role:"",isLoggedIn:false}) //login response
  
  //Display Welcome Message
  const getUserName=()=>{
    if(userDetails.userName.length==0){
      return 'Guest';}
  
    else
    return `${userDetails.userName}`;
  }
  
  
  //Make api call to login using loginservice.js 
   //const navigate=useNavigate();
   const navigate=useNavigate();
   const handleLogin=credentials=>{
   // console.log(credentials);
    LoginService.doLogin(credentials).then(obj=>{ //if apicall is successfu
      alert('Login successful! Start Managing your Warehouse!')
      setUserDetails({...obj.data,isLoggedIn:true});
      console.log(obj.data);
      window.localStorage.setItem('api-token',obj.data.token);
      navigate('/Dashboard');
      
      
        
   }).catch(obj=>{ //if apicall fails
      alert(obj.response.statusText);
    }

    )}
 //Make api call to register using  Registerservice.js 
    const handleRegister=credentials=>{
      console.log(credentials);
      RegisterService.handleRegister({...credentials}).then(response=>{
        alert("Register was successful! Start Managing your Warehouse!")}).catch(error=>{
          alert("Register was not successful");
        console.log(error);})
    }
//Make api call to logout using  Registerservice.js 
   //const navigate=useNavigate();
    const handleLogout=()=>{
      const obj ={userName:"",role:"",isLoggedIn:false};
      setUserDetails(obj);
      window.localStorage.removeItem('api-token');
      navigate('/');
    }
 

  return (<>

  <Navbar role={userDetails.role} isLoggedIn={userDetails.isLoggedIn} handleLogout={handleLogout}/>
   <div className="container">
   <div className="row">
     <div className="col-12">
      <h1 class="text-primary">Hi {getUserName()}!</h1>
       
       
       
       <Routes>

       <Route path='/' element={<Home/>}/>
         <Route path='/SignIn' element={<SignIn handleLogin={handleLogin} /> }/>
         <Route path='/SignUp' element={<SignUp handleRegister={handleRegister}/> }/>
         <Route path='/Inward' element={<Inward isLoggedIn={userDetails.isLoggedIn}/> }/>
         <Route path='/Inward/:date' element={<InwardByDate/>}/>
         <Route path='/PurchaseOrder' element={<PurchaseOrderTable isLoggedIn={userDetails.isLoggedIn}/>}/>
         <Route path='/CreateInward' element={<CreateInward/>}/>
         <Route path='/CreatePurchaseOrder' element={<CreatePurchaseOrder  isLoggedIn={userDetails.isLoggedIn}/>}/>
         <Route path='/Logout' element={<Logout/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/Outward' element={<Outward/>}/>
         <Route path='/Customers' element={<Customers/>}/>
         <Route path='/Orders' element={<Orders/>}/>
         <Route path='/Products' element={<Products/>}/>
         <Route path='/Suppliers' element={<Suppliers/>}/>
         <Route path='/StockBalance' element={<StockBalance/>}/>
         <Route path='/CreateOutward' element={<CreateOutward/>}/>
         <Route path='/EditOutward/:id' element={<EditOutward/>}/>
         

       </Routes>
     </div>
   </div>
   </div>
    
    
  </>);
}

export default App;
