import React, { useState, useEffect } from "react";
import {
  ProductImg,
  ProductCard,
  Title,
  SubTitle,
  Price,
  CardOverlay,
  DescriptionButton,
  OverlayText,
  ProfileImg
} from "./ItemCard_Styles";
import { CardText, CardBody, Collapse } from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";

const ItemCard = (props) => {
    const [icon, setIcon] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        </div>
    )
}

export default ItemCard;