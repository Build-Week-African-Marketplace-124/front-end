import React, {useState, useEffect} from "react";
import {MdAccountCircle} from "react-icons/md";
//needs actions for getting user
//using reactstrap --
import {Navbar, NavbarBrand} from "reactstrap";
import logo from "../../images/africanlogo.png";
import {Logo} from "./Nav-Styles";

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);
    const toggle = () => setIsActive(!isActive);

    return (
        <div>
        <Navbar fixed="top" >
        <NavbarBrand href="/home">
        <Logo src={logo}></Logo>
        </NavbarBrand>
        </Navbar>
        </div>
    )

}

export default Navigation;