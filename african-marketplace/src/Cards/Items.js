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

    //searchbar function

    useEffect(() => {
        const results = props.productData.filter(
            descriptions =>
            descriptions.name.toLowerCase().includes(search.toLowerCase()) ||
            descriptions.category.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results)
    }, [search, props.productData]);

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
                username={props.productData.username}
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
                    username={props.productData.username}
                />
            ))}
            </ItemWrapper>
            </>
        );
    }

    console.log("props from Items", props)

    return (
        <>
        <Wrapper>
        <Heading>
            <Title>MARKET PLACE</Title>
            <SearchBar>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <FaSearch />
                    </InputGroupText>
                </InputGroupAddon>

               <SearchInput
                    onChange={handleChanges}
                    value={searchTerm}
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