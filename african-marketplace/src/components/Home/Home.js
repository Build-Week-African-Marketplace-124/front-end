import React from "react";
// nead a navbar? footer? card?
import {Header, Wrapper, Title, CardWrapper} from "./homeStyles";

const Home = (props) => {
    console.log("home props", props)

    return (
        <>
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