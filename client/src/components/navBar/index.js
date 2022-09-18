import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

import './Navbar.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Articles
          </NavLink>
          {/* <NavLink to="/view" activeStyle>
            View // DON'T SHOW -- ONLY WAY TO GET HERE IS THROUGH AN ARTICLE
          </NavLink> */} 
          <NavLink to="/posts" activeStyle>
            Posts
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;