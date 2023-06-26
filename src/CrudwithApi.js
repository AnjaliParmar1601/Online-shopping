// import React from 'react'
// import axios from 'axios'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// export default function CrudwithApi() {
//   const [data,setData]=useState()
//   const [email ,setEmail]=useState()
//   const [password ,setPassword]=useState()
//   const [show , setShow]=useState(true)
//   const [id , setId]=useState()
//   let baseUrl = "http://localhost:7000/user";
//   useEffect(()=>{
//      getData()
//   },[])
//   const getData=()=>{
//      axios.get(baseUrl).then((res)=>{
//       console.log("res" ,res)
//       setData(res.data)
//      })
//   }
//   const delData=(item)=>{
//     console.log("item",item)
//      axios.delete(`http://localhost:7000/user/${item._id}`).then((res)=>{
//       console.log("res",res)
//       if(res?.data){
//         getData()

//       }
//      })
//   }
//   const submitDetails=(e)=>{
//     e.preventDefault()
//     if(show==false){
//       let obj= {
//         email:email,
//         password:password
//     }
//       axios.put(`http://localhost:7000/user/${id}`,obj).then((res=>{
//         console.log("res",res)
//         if(res.data){
//           getData()
//         }
//         setEmail("")
//         setPassword("")
//       }))
//     }
//     else{
//           let obj= {
//             email:email,
//             password:password
//         }
//       axios.post(baseUrl,obj).then((res=>{
//         console.log("res",res)
//         if(res.data){
//           getData()
//         }
//         setEmail("")
//         setPassword("")
//       }))
//     }
   
// }
// const editData=(item)=>{
//   setEmail(item.email)
//   setPassword(item.password)
//   setId(item._id)
//   setShow(false)
// }
//   return (
//     <>
//         <form onSubmit={submitDetails}>
//           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
//           <br />
//           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password'/>
//           {show ? <button>Submit</button> : <button>Edit</button>}
//         </form>
//         <Table striped>
//         <thead> 
//           <tr>
//             <th>id</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data?.map((item,index)=>{
//                 return(
//                   <tr>
//                   <td>{index}</td>
//                   <td>{item.email}</td>
//                   <td>{item.password}</td>   
//                   <td><Button onClick={()=>editData(item)}>EDIT</Button></td>  
//                   <td><Button onClick={()=>delData(item)}>DELETE</Button></td>   
//                 </tr>
//                 )
//             })
//           }

//         </tbody>
//     </Table>
//     </>
    
//   )
// }
// import axios from 'axios'
// import React from 'react'
// import { useEffect , useState } from 'react'
// import { Table } from 'react-bootstrap'
// export default function CrudwithApi() {
//   const [email , setEmail]=useState()
//   const [password ,setPassword]=useState()
//   const [data,setData]=useState()
//   const [show,setShow]=useState(true)
//   const [id , setId]=useState()
//   let baseUrl = "http://localhost:7000/user";
//   useEffect(()=>{
//     getData()
//   },[])
//   const getData=()=>{
//     axios.get(baseUrl).then((res)=>{
//       setData(res.data)
//     }).catch((error)=>{
//       console.log("error" , error)
//     })
//   }
//   const submitForm = (e)=>{
//     e.preventDefault()
//     if(show==false){
//       let obj = {
//         email:email,
//         password: password
//       }
//       axios.put(`http://localhost:7000/user/${id}`,obj).then((res)=>{
//         console.log("res",res)
//         if(res.data){
//          getData()
//         }
//       }).catch((error)=>{
//         console.log("error" , error)
//       })
//     }
//      else{
//       let obj = {
//         email:email,
//         password: password
//       }
//       axios.post(baseUrl,obj).then((res)=>{
//         console.log("res",res)
//         if(res.data){
//          getData()
//         }
//         setEmail("")
//         setPassword("")
//       }).catch((error)=>{
//         console.log("error" , error)
//       })
//      }
//   }
//   const onDel=(item)=>{
//     axios.delete(`http://localhost:7000/user/${item._id}`).then((res)=>{
//       if(res.data){
//         getData()
//       }
//     })
//   }
//   const onEdit=(item)=>{
//     setEmail(item.email)
//     setPassword(item.password)
//     setId(item._id)
//     setShow(false)
//   }
//   return (
//     <>
//     <form onSubmit={submitForm}>
//       <input type="text" value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
//       <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
//       {show ? <button>Submit</button> : <button>Edit</button>}
//     </form>
//     {
//       data?.map((item)=>{
//         console.log("item" , item)
//         return(
//           <>
//             <table>
//               <tr>
//                 <td>
                  
//                   {item.email}
//                 </td>
//                 <td>{item.password}</td>
//                 <td><button onClick={()=>onEdit(item)}>Edit</button></td>
//                 <td><button onClick={()=>onDel(item)}>Delete</button></td>
//               </tr>
//             </table>
//           </>
//         )
//       })
//     }
//     </>
    
//   )
// }
import React, { useState , useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
export default function CrudwithApi() {
  const [email,setEmail]=useState()
  const [data , setData]=useState()
  const [password , setPassword]=useState()
  const [id,setId]=useState()
  const [show , setShow]=useState(true)
  let baseUrl = "http://localhost:7000/user";
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(baseUrl).then((res)=>{
      console.log("res",res)
      setData(res.data)
    })
  }
  const submitForm=(e)=>{
    console.log("helllooo")
    e.preventDefault()
   if (show == false){
    let obj={
      email:email,
      password:password
    }
   axios.put(`http://localhost:7000/user/${id}`,obj).then((res)=>{
     if(res){
      getData()
     }
     setEmail("")
     setPassword("")
   })
   }
   else{
    let obj={
      email:email,
      password:password
    }
   axios.post(baseUrl,obj).then((res)=>{
     if(res){
      getData()
     }
     setEmail("")
     setPassword("")
   })
   }
  }
  const onDel=(elem)=>{
    console.log("elem" , elem)
    axios.delete(`http://localhost:7000/user/${elem._id}`).then((res)=>{
      if(res.data){
        getData()
      }
    })
  }
  const editData=(elem)=>{
    setEmail(elem.email)
    setPassword(elem.password)
    setId(elem._id)
    setShow(false)
  }
  return (
    <>
     <form onSubmit={submitForm}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
        {show ? <button>Submit</button> : <button>Edit</button>}
     </form>
     {
      data?.map((elem)=>{
        console.log("elem",elem)
        return(
          <Table striped="columns">
            <tr>
              <td>
                {elem.email}
              </td>
              <td>{elem.password}</td>
              <td><button onClick={()=>editData(elem)}>Edit</button></td>
              <td><button onClick={()=>onDel(elem)}>Delete</button></td>
            </tr>
          </Table>
        )
      })
     }
    </>
  )
}


