import React from "react";
import {AiFillPlusCircle} from "react-icons/ai";
import {IconContext} from "react-icons"
import {
  ProductCard,
  ProductTitle,
  SubTitle,
  Price
} from "./Item-Styles";
import {CardBody} from "reactstrap";
import {addToCart} from "../actions/ShoppingCardActions";
import {connect} from "react-redux";

const ItemCard = (props) => {
  console.log("props from itemcard", props)
  // useEffect for icons???
  // will do username later
    // do we need imgs?

    function handleClick(id) {
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
        <span style={{color: 'orange', fontSize: '20px', fontWeight: 'bold'}}>Add to Cart <AiFillPlusCircle onClick={()=>{handleClick(props.data.id)}}/> </span>
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

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);