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
  import {postLoginUser} from "../actions/UserActions";

  const ItemList = (props) => {
      //search bar
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // get item products
    useEffect(() => {
        props.fetchProducts();
    }, [])

    useEffect(() => {
        props.postLoginUser();
        console.log("user fetched")
        console.log("username", props.userName);
    }, [])

    //searchbar function

    useEffect(() => {
        const results = props.productData.filter(
            descriptions =>
            descriptions.name.toLowerCase().includes(search.toLowerCase()) 
            // ||
            // descriptions.category.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results)
    }, [search]);

    const handleChanges = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    let listRender;

    if (search.length === 0) {
        listRender = (
            <>
            <ItemWrapper>
            {props.productData.map(item => (
                <ItemCard 
                key={item.id}
                data={item}
                allData={props.productData}
                username={props.userName}
                />
            ))}
            </ItemWrapper>
            </>
        );
    } else {
        listRender = (
            <>
            <ItemWrapper>
            {searchResults.map(item => (
                <ItemCard
                    key={item.id}
                    data={item}
                    allData={props.productData}
                    username={props.userName}
                />
            ))}
            </ItemWrapper>
            </>
        );
    }
  

    return (
        <>
        <Wrapper>
        <Heading>
            <MarketTitle>SEARCH OUR PRODUCTS</MarketTitle>
            <SearchBar>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <FaSearch />
                    </InputGroupText>
                </InputGroupAddon>

               <SearchInput
                    onChange={handleChanges}
                    value={search}
                    type="search"
                    placeholder="Search Products"
                    name="search"
               />
            </SearchBar>
        </Heading>
        {props.isFetching ? (
            <div>
            <Spinner color="danger" />
            <br />
            <p>Loading...</p>
            </div>
        ) : (
            listRender
        )} 
        </Wrapper>
        </>
    )
  }

  const mapStateToProps = (state) => {
    return {
    productData: state.productsReducer.productData,
    isFetching: state.productsReducer.isFetching,
    userName: state.postUserReducer.userName
    }
  }

  const mapDispatchToProps = {fetchProducts, postLoginUser};

  export default connect(mapStateToProps, mapDispatchToProps)(ItemList);