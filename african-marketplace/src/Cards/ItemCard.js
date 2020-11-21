import React, { useState, useEffect } from "react";
import {AiFillPlusCircle} from "react-icons/ai";
import {IconContext} from "react-icons"
import {
  ProductCard,
  ProductTitle,
  SubTitle,
  Price,
  CardOverlay,
  ToggleButton,
  OverlayText
} from "./Item-Styles";
import { CardText, CardBody} from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";

const ItemCard = (props) => {
  const [iconState, setIcon] = useState();
  // useEffect for icons???
    //need data from product endpoints: id, username, name, description, price
    // do we need imgs?

    return (
        <IconContext.Provider value={{ style: {fontSize: '40px', color: 'yellow', cursor: 'pointer'}}}>
        <ProductCard>
        <ProductTitle>{props.data.name}</ProductTitle>
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