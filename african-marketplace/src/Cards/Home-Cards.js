import React from "react";
import { FaStore } from "react-icons/fa";
import {ProductCard, HomeImg, CardOverlay} from "./Card_Styles";
import MarketPlace from "../images/african-market-irene-jonker.jpg";

const Cards = (props) => {
console.log("props from Cards", props)
    return (
        <ProductCard>
        <HomeImg top width="110%" src={MarketPlace} alt="Market" />
        </ProductCard>
    )
}

export default Cards;