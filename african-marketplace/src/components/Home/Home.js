import React from "react";
// nead a navbar? footer? card?
import {Header, Wrapper, Title, CardWrapper} from "./homeStyles";
import Navbar from "../Nav-bar/User-LoginNav";
import HomeCards from "../../Cards/Home-Cards";

const Home = (props) => {
    console.log("home props", props)

    return (
        <>
        <Navbar home={true}/>
        <Wrapper>
        <Header>
        <Title>Welcome to the Market!</Title>
        </Header>
        <CardWrapper>
            <HomeCards />
        </CardWrapper>
        </Wrapper>
        </>
    )

}

export default Home;