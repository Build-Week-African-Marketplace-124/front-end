import styled from "styled-components";
import {NavItem, NavLink, Nav, UncontrolledDropdown, DropdownItem} from "reactstrap";

export const Logo = styled.img`
  width: 130px;
`;

export const Navigation = styled(Nav)`
  padding: 1% 0%;
  display: flex;
  justify-content: center;
`

export const LinksWrapper = styled(NavItem)`
display: flex;
justify-content: center;
align-items: center;
color: ;
`;

export const MenuLink = styled(NavLink)`
color: #801518 !important;
  border-bottom: 2px solid #f8f9fa;
  font-weight: 500;
  margin: 0 5px;
  &:hover {
    color: #dc3545 !important;
    cursor: pointer !important;
    border-bottom: 1px solid #dc3545;
  }
  &.nav-link.active {
    color: #dc3545 !important;
    cursor: pointer !important;
    border-bottom: 1px solid #dc3545 !important;
  }
`;

export const UserMenu = styled(UncontrolledDropdown)`
a {
  color: #dc3545;
  list-style-type: none;
}
`

export const Logout = styled(DropdownItem)`
  :hover {
    font-weight: 500;
    color: #801518;
  }
`;
