import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";
import { useState,useEffect } from "react";
import axios from 'axios'
const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
`;

const Products = ({cat,filter,sort}) => {
 

  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])

  useEffect(()=>{
    const getProducts=async()=>{

      try{
        const res=await axios.get(cat?`http://localhost:3000/api/products?category=${cat}`:'http://localhost:3000/api/products')
          console.log(res)

      }catch(err){

      }
    }

    getProducts()


  },[cat])


 
  return (
    <Container>
{popularProducts.map(item=>(
    <Product item={item} key={item.id} />
))}

    </Container>
    
  )
}

export default Products  