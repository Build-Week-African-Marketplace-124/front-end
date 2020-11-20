import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import ItemCard from "./ItemCard";
// navbar??
import { Wrapper, ItemWrapper,
    Title,
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
        console.log("fetched products");
    }, [])


    return (
        <div>
        
        </div>
    )
  }

  export default connect(
      state => {
          return {
              productData: state.productData,
              isFetching: state.isFetching,
              error: state.error
          };
      },
      {fetchProducts}
  )(ItemList);