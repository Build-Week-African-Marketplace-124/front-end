import React from "react";
import {MdAccountCircle} from "react-icons/md";
import { Link } from "react-router-dom";
//needs actions for getting user
//using reactstrap --
import {
    Navbar,
    NavbarBrand,
    Nav,
    DropdownItem
} from "reactstrap";
import logo from "../../images/africanlogo.png";
import getUserID from "../../utils/getUserID";
import {Logo, LinksWrapper, MenuLink, UserMenu, Logout, DynamicLink} from "./Nav-Styles";

const Navigation = (props) => {
  const id = getUserID(localStorage.getItem('token'));

  if(localStorage.getItem('token')) {
    return (
      <div>
      <Navbar>
        <NavbarBrand href="/">
         <Logo src={logo}></Logo>
         </NavbarBrand>
          <Nav>
          <UserMenu nav inNavbar>
              <MdAccountCircle />
            <LinksWrapper>
            {props.home ? (
                <MenuLink href="/" active>
                  HOME
                </MenuLink>
              ) : (
                <MenuLink href="/">GO HOME</MenuLink>
              )}
            </LinksWrapper>
            <LinksWrapper>
            {props.profile ? (
              <DynamicLink to={`/profile/${id}`}>PROFILE</DynamicLink>
            ) : (
              <DynamicLink to={`/profile/${id}`}>PROFILE</DynamicLink>
            )}
          </LinksWrapper>
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
  } else {
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
            {/* </LinksWrapper>
            <LinksWrapper> */}
            {props.login ? (
                <MenuLink href="/login" active>
                  LOGIN
                </MenuLink>
              ) : (
                <MenuLink href="/login">LOGIN</MenuLink>
              )}
            {/* </LinksWrapper>
            <LinksWrapper> */}
            {props.register ? (
                <MenuLink href="/register" active>
                  REGISTER
                </MenuLink>
              ) : (
                <MenuLink href="/register">REGISTER</MenuLink>
              )}
            </LinksWrapper>
            </Nav>
        </Navbar>
        </div>
      )
    }
}

// fetch current user, display it underneath nav

export default Navigation;