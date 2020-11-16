import styled from "styled-components";
import {
  Card,
  CardImgOverlay,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export const ProductCard = styled(Card)`
  width: 30%;
  margin: 1%;
  background: #851618 !important;
  border: none;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Title = styled(CardTitle)`
  color: white;
  background-color: #e33734;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 2.5%;
  margin-bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 1;
`;

export const CardOverlay = styled(CardImgOverlay)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
`;
export const OverlayText = styled(CardText)`
  color: black;
  background: orange;
  padding: 3%;
  font-weight: bold;
`;

export const Price = styled(CardSubtitle)`
  color: white;
  background-color: black;
  font-size: 1.3rem;
  padding: 2%;
`;

export const SubTitle = styled(CardSubtitle)`
  color: orange;
  padding: 1%;
  font-size: 1.1rem;
  margin: 1%;
`;