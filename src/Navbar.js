// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Crud from './Crud';
// function Navbar() {
//   return (
 

//     <>
//           <Nav variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//     </>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () =>{
  const selector = useSelector((elem)=>elem.data)
  return (
   <>
     <div className="navbar-bg">
  <div className="">
    
    <div className="hidden md:block" style={{display:'flex',justifyContent:'space-between'}}>
      <div className="ml-10 flex items-baseline space-x-4">
        <Link to="/" className="text-black-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        {/* <Link to="/about" className="text-black-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
        <Link to="#" className="text-black-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link> */}
        <Link to="/dashboard" className="text-black-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
        <Link to="/cart" className="text-black-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
        
      </div>
      <Link to="/cart">
      <div className="cart-icon" >
            <img src={require("./image/cart.png")} style={{width:"30px",height:"30px"}} className="arrow-icon" />
            <p>{selector.length}</p>
      </div>
      </Link>
      
    </div>
    
  </div>
</div>

   </>
  );
};

export default Navbar;
