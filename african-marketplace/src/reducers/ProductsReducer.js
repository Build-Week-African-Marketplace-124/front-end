import {
    FETCH_PRODUCTS_LOADING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE
  } from "../actions/ProductActions";

  
  const initialState = {
    productData: [],
    error: null,
    isFetching: false
  };
  
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_LOADING:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          productData: action.payload,
          error: null,
          isFetching: false
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          productData: [],
          isFetching: false,
          error: action.payload
        };
      case CREATE_PRODUCT_START:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case CREATE_PRODUCT_SUCCESS:
        return {
          productData: [...state, action.payload],
          error: null
        };
      case CREATE_PRODUCT_FAILURE:
        return {
          ...state,
          productData: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  