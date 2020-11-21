import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import ItemCard from "./ItemCard";
import { Wrapper, ItemWrapper,
    MarketTitle,
    SearchBar,
    Heading,
    SearchInput
  } from "./Item-Styles";
  import { InputGroupAddon, InputGroupText, Spinner } from "reactstrap";
  import { FaSearch } from "react-icons/fa";
  import {fetchProducts} from "../actions/ProductActions";

  const ItemList = (props) => {
      //search bar
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // get item products
    useEffect(() => {
        props.fetchProducts();
        console.log("fetched products", props.productData);
    }, [])

    //searchbar function
  

    return (
        <div>
        </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
    productData: state.productsReducer.productData,
    isFetching: state.productsReducer.isFetching
    }
  }

  const mapDispatchToProps = {fetchProducts};

  export default connect(mapStateToProps, mapDispatchToProps)(ItemList);