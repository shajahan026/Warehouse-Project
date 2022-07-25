import {Link} from 'react-router-dom';

const Navbar=props=>{
     //Login is a component defined as function written in JSX and calls a method called react.CreateElement(h1,prop,"text")
     //Logout
     const onLogout=()=>{
      props.handleLogout();
     }
           return <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
           <div className="container-fluid">

             <a className="navbar-brand" href="/">WAREHOUSE HOME</a> 

             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>

            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
             
              {props.isLoggedIn===true&&
              <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        MasterDetails
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                        <li><Link to='/Orders' className="dropdown-item">Orders</Link></li>
                        <li><Link to='/Customers' className="dropdown-item">Products</Link></li>
                        <li><Link to='/Customers' className="dropdown-item">Customers</Link></li>
                        <li><Link to='/Suppliers' className="dropdown-item">Suppliers</Link></li>
                      </ul>
                </li>}
                {props.isLoggedIn===true&&
               <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Transaction
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                        <li><Link to='/Inward' className="dropdown-item">Inward</Link></li>
                        
                        {/* <li><a class="dropdown-item" href="/Inward">Inward</a></li> */}
                        <li><Link to='/Outward' className="dropdown-item">Outward</Link></li>
                        <li><Link to='/PurchaseOrder' className="dropdown-item">Purchase Order</Link></li>
                      </ul>
                </li>}
                {props.isLoggedIn===true&&
                <li className="nav-item">
                 <Link to='/StockBalance' className="nav-link">StockBalance</Link>
               </li>}

               {props.isLoggedIn===true&&
               <li className="nav-item" onClick={onLogout}>
                 <Link to='#'className="nav-link">Logout</Link>
               </li>}

               
           
           
            </ul>
          </div>
        </div>

        </nav>
         

    };
export default Navbar;

// {/* <a class="dropdown-item" href="/Inward">Inward</a> */}
// {/* <Link to='/Inward' className="nav-link">Inward</Link> */}