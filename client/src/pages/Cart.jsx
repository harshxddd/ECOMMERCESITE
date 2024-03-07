import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px" })}

`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
${mobile({ display:"none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection:"Column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"Column" })}
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
margin-top: 50px;

`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;



`
const ProductName = styled.div`
margin-bottom: 10px;
`;
const ProductId = styled.div`
margin-bottom: 10px;
`;

const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props=>props.color};
margin-bottom: 10px;
`
const ProductSize=styled.div``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;


`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin:"5px 15px" })}
`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom:"20px" })}

`;

const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  `;
  const SummaryTitle=styled.h1`
  font-weight: 200;


  `
  const SummaryItem=styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total"&&"500"};
  font-size: ${props=>props.type==="total"&&"24px"};
  
  `
  const SummaryItemText=styled.span``
  const SummaryItemPrice=styled.span``
  const Button=styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  
  `

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/VWPzTQq/image.png" />
                <Details>
                  <ProductName>
                    <b>Product</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor color="black"/>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
            <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
            </ProductAmountContainer>
            <ProductPrice>$30</ProductPrice>

              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product</b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor color="GRAY"/>
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
            <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
            </ProductAmountContainer>
            <ProductPrice>$30</ProductPrice>

              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>

            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$5.90</SummaryItemPrice>

            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$-5.90</SummaryItemPrice>

            </SummaryItem>
            <SummaryItem type ="total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>

            </SummaryItem>
            <Button>CHECKOUT NOW</Button>

             </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
