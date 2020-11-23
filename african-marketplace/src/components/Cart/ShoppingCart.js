import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../../actions/ShoppingCardActions";

const Cart = (props) => {
    console.log("props from cart", props)
    let addedItems = props.productData.length ?
    (  
        props.productData.map(item=> {
            return(
               
                <li className="collection-item" key={item.id}>
                            <div className="description">
                                <span className="title">{item.name}</span>
                                <p>{item.description}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                </div>
                                <button>Remove</button>
                            </div>
                            
                       </li>                        
            )
        })
    ):

     (
        <p>Nothing is in the cart!</p>
     )
return(
    <div className="container">
        <div className="cart">
            <h5>You have ordered:</h5>
            <ul className="collection">
                {addedItems}
            </ul>
        </div>  
    </div>
)

}

const mapStateToProps = (state)=>{
    return{
        productData: state.productsReducer.productData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)