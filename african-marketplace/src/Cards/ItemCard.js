import React, { useState, useEffect } from "react";
import {AiFillPlusCircle} from "react-icons/ai";
import {IconContext} from "react-icons"
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

    //need data from product endpoints: title, username
    // do we need imgs?

    //map through items...

    return (
        <IconContext.Provider value={{ style: {fontSize: '40px', color: 'yellow', cursor: 'pointer'}}}>
        <ProductCard>
        <Title>Name of product</Title>
        <CardOverlay>
            <OverlayText>User: data from username</OverlayText>
        </CardOverlay>
        <CardBody>
          <SubTitle>Description: data description</SubTitle>
        </CardBody>
      <Price>Price: data price</Price> 
        <div>
        <span style={{color: 'orange', fontSize: '20px', fontWeight: 'bold'}}>Add to Cart <AiFillPlusCircle /> </span>
        </div>
      </ProductCard>
    </IconContext.Provider>
    )
}

export default ItemCard;

// need to add an onClick to our icon
// onClick={() => handleClick(item.id)}
// create handleClick function for item
// handleClick = (id) => {addToCard(id)}
// need an addToCart in reducer/action/mapDispatchToProps
// need mapStateToProps for items... state.items