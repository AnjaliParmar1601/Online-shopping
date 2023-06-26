import React from 'react'
import Navbar from './Navbar';
import { useEffect ,useState } from 'react';
import  axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from './constant/Data';
import { addCartdata } from './Redux/Action';
import {useDispatch , useSelector} from 'react-redux'
const Dashboard=()=>{
    const [data , setData]=useState(product)
    const [count,setCount]=useState(0)
    const[checkid,setCheckId]=useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
    
    },[])
    const selector = useSelector((elem)=>elem.data)
    
    const onAdd=(item)=>{  
       
      let checkdata =checkid.includes(item.id)
      console.log("checkdata",checkdata)
      if (checkdata == false){
        dispatch(addCartdata(item))   
       console.log("checkdata",checkdata)
       checkid.push(item.id)
       
      }
      else{

        alert("item is already in cart")
      
      }
    }
    const onDel=(item)=>{
      console.log("item",item)
    }
    return(
        <>
         <Navbar />
          
          <Container>
          <Container className='dashboard'>
  <Row>
    {data?.map((item) => (
      <Col key={item.id} xs={12} md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ width: "90%"}} variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.description}
            </Card.Text>
            <div style={{textAlign:'center'}}>
            <span style={{display:'block',fontSize:"18px",color:"Red"}}>${item.price}</span>
              <button  onClick={()=>onAdd(item)}>Add to Cart</button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
          </Container>
                
         <Footer />
        </>
    )
}
export default Dashboard;
