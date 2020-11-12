import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap'

  const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
    <div>
        <Navbar color="dark" dark expand="md" className="fixed-top">
            <Container>
            <NavbarBrand href="/">Deimos</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="/about">Sobre empresa</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href="/contact/">Contato</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default Menu