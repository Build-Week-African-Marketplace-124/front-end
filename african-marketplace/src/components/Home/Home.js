import React from "react";
// nead a navbar? footer? card?
import {Header, Wrapper, Title, CardWrapper} from "./homeStyles";
import Navbar from "../Nav-bar/User-LoginNav";

const Home = (props) => {
    console.log("home props", props)

    return (
        <>
        <Navbar />
        <Wrapper>
        <Header>
        <Title>Welcome to the Market!</Title>
        </Header>
        <CardWrapper>
        </CardWrapper>
        </Wrapper>
        </>
    )

}

export default Home;