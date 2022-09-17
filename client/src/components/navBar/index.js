import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/articles" activeStyle>
            Articles
          </NavLink>
          <NavLink to="/posts" activeStyle>
            Posts
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;