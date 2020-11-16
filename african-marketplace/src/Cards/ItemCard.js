import React, { useState, useEffect } from "react";
import {
  ProductCard,
  Title,
  SubTitle,
  Price,
  CardOverlay,
  ToggleButton,
  OverlayText,
  ProfileImg
} from "./Item-Styles";
import { CardText, CardBody, Collapse } from "reactstrap";

const ItemCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //need data from product endpoints: title, username
    // do we need imgs?

    return (
        <ProductCard>
        <Title>Name of product</Title>
        <CardOverlay>
            <OverlayText>User: data from username</OverlayText>
        </CardOverlay>
        <CardBody>
          <SubTitle>Description: data description</SubTitle>
        </CardBody>
      <Price>Price: data price</Price>
    </ProductCard>
    )
}

export default ItemCard;