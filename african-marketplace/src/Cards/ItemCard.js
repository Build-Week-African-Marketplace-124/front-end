import React, { useState, useEffect } from "react";
import {AiFillPlusCircle} from "react-icons/ai";
import {IconContext} from "react-icons"
import {
  ProductCard,
  ProductTitle,
  SubTitle,
  Price,
  CardOverlay,
  OverlayText
} from "./Item-Styles";
import { CardText, CardBody} from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";

const ItemCard = (props) => {
  console.log("props from itemcard", props)
  const [iconState, setIcon] = useState();
  // useEffect for icons???
  // will do username later
    // do we need imgs?

    handleClick = (id)=>{
      props.addToCart(id);
      }

    return (
        <IconContext.Provider value={{ style: {fontSize: '40px', color: 'yellow', cursor: 'pointer'}}}>
        <ProductCard>
        <ProductTitle>{props.data.name}</ProductTitle>
        <CardBody>
          <SubTitle>{props.data.description}</SubTitle>
        </CardBody>
      <Price>Price: {props.data.price}</Price> 
        <div>
        <span style={{color: 'orange', fontSize: '20px', fontWeight: 'bold'}}>Add to Cart <AiFillPlusCircle onClick={()=>{this.handleClick(item.id)}}/> </span>
        </div>
      </ProductCard>
    </IconContext.Provider>
    )
}

const mapStateToProps = state => {
  return {
    productData: state.productsReducer.productData
  }
}

const mapDispatchToProps = {addToCart}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);

// need to add an onClick to our icon check
// onClick={() => handleClick(item.id)} cgheck
// create handleClick function for item check
// handleClick = (id) => {addToCart(id)} check
// need an addToCart in reducer/action/mapDispatchToProps check
// need mapStateToProps for items... state.items