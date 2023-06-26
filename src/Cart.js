
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { Container, Table } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect , useState } from 'react';
import axios from 'axios';
import "./Cart.css";
import { product } from './constant/Data';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Myorder() {
  const selector = useSelector((elem)=>elem.data)

  const [data,setData]=useState(selector)
  const navigate = useNavigate()
  console.log("selector",selector)
  const addQuantity=(p)=>{

    let product = selector.find((pr) => pr.id === p.id);
    console.log("product",product)
    product.quantity += 1;
    const updatedProducts = selector.map(p => {
        if (product.id === p.id) return product;

        return p;
    });
    console.log("updateddata",updatedProducts)
    setData(updatedProducts)
  }
  const delQuantity=(p)=>{
    if(p.quantity>1){
      let product = selector.find((pr) => pr.id === p.id);
      console.log("product",product)
      product.quantity -= 1;
      const updatedProducts = selector.map(p => {
          if (product.id === p.id) return product;
  
          return p;
      });
      console.log("updateddata",updatedProducts)
      setData(updatedProducts)
    }
    else{
      alert("invalid value")
    }
   
  }
  return (
      <>
         
        <Navbar />
        <Container className='main_cart_container'>{
          selector.length == 0 ? <div className='empty-cart'>
            <h2>you have no items in your cart</h2>
            <img src={require("./image/empty-cart.png")}/>

            <button onClick={()=>navigate("/dashboard")}>Continue Shopping</button>
          </div> : 
             <Table striped bordered hover cart style={{marginTop:"10%"}}>
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Product</th>
                 <th>Title</th>
                 <th>Price</th>
                 <th>Description</th>
                 <th>Quantity</th>
               </tr>
             </thead>
             <tbody>
              
                 {
                   selector?.map((item,index)=>{
                     return(
                       <tr>
                         <td>{index}</td>
                         <td><img src={item.image} style={{width:"50px",height:"50px"}}/></td>
                         <td>{item.title}</td>
                         <td>{item.price*item.quantity}</td>
                         <td>{item.description}</td>
                         <td><button onClick={()=>addQuantity(item)} style={{border:"1px solid black",marginRight:"5px"}}>+</button>{item.quantity}<button style={{border:"1px solid black",marginLeft:"5px"}} onClick={()=>delQuantity(item)}>-</button></td>
                       </tr>
       
                     )
                   })
                 }
             
             </tbody>
           </Table>
          }
     
        </Container>
    
      <Footer />

   </>
  )
}

