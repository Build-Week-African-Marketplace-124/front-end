import React, {useState} from "react";
import {MdAccountCircle} from "react-icons/md";
//needs actions for getting user
//using reactstrap --
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import logo from "../../images/africanlogo.png";
import {Logo, LinksWrapper, MenuLink, UserMenu, Logout} from "./Nav-Styles";

const Navigation = (props) => {

    return (
        <div>
        <Navbar>
          <NavbarBrand href="/">
           <Logo src={logo}></Logo>
           </NavbarBrand>
            <Nav className="nav" navbar>
            <LinksWrapper>
            {props.home ? (
                <MenuLink href="/" active>
                  HOME
                </MenuLink>
              ) : (
                <MenuLink href="/">GO HOME</MenuLink>
              )}
            </LinksWrapper>
            </Nav>
            
            <Nav>
            <UserMenu nav inNavbar>
                <MdAccountCircle />
              <LinksWrapper>
              {props.postItems ? (
                <MenuLink href="/item-form" active>
                  ITEM FORM
                </MenuLink>
              ) : (
                <MenuLink href="/item-form">POST NEW ITEMS</MenuLink>
              )}
            </LinksWrapper>
            <LinksWrapper>
              {props.market ? (
                <MenuLink href="/market" active>
                  MARKETPLACE
                </MenuLink>
              ) : (
                <MenuLink href="/market">CHECK OUT THE MARKET</MenuLink>
              )}
            </LinksWrapper>
                <DropdownItem divider />
                <Logout
                  onClick={() => window.localStorage.clear("token")}
                  href="/"
                >Log Out</Logout>
            </UserMenu>
          </Nav>
        </Navbar>
        </div>
    )

}

// fetch current user, display it underneath nav

export default Navigation;