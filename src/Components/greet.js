import React from "react";
//function Greet(){
 //   return <h1>Welcome to REDPHISH Music</h1>
//}
import { Outlet, Link } from "react-router-dom";

const Greet = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/greet">Home</Link>
          </li>
          <li>
            <Link to="/WeeklySale">Hot Deals</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};



//const Greet=()=> <h1>Welcome to REDPHISH Music</h1>
export default Greet