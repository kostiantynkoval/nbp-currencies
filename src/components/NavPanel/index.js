import React, {useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Badge,
  Collapse,
  NavbarToggler,
} from 'reactstrap';

const NavPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="Navbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tabIndex="0" className="navbar navbar-dark" >Currency List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="link">All Currencies</Button>
            </NavItem>
            <NavItem>
              <Button color="link">Favorites <Badge color="secondary">0</Badge></Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavPanel;