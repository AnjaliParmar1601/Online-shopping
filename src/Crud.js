// // import React, { useState } from "react";
// // import Table from 'react-bootstrap/Table';
// // import { Button } from "react-bootstrap";


// // export default function Crud() {
// //   const [email, setEmail] = useState();
// //   const [fname, setFname] = useState();
// //   const [address, setAddress] = useState();
// //   const [password, setPassword] = useState();
// //   const [data, setData] = useState([]);
// //   const [show, setShow] = useState(true);
// //   const [id, setId] = useState();
// //   const formSubmit = (e) => {
// //     e.preventDefault();
// //     if(!email){
// //       alert("please enter email")
// //     }else if(!fname){
// //       alert("please enter fname ")
// //     }else if(!address){
// //       alert("please enter address")
// //     }else if(!password){
// //       alert("please enter  password")
// //     }else{

    
// //     if (show === false) {
      
// //       let editedData = data.map((item) => {
// //         if (item.id == id) {
// //           return {
// //             ...item,
// //             email: email,
// //             fname: fname,
// //             address: address,
// //             password: password,
// //           };
// //         }
// //         return item;
// //       });
// //       setData(editedData);
// //       setShow(!show);
// //       setEmail("")
// //       setFname("")
// //       setAddress("")
// //       setPassword("")
// //     } else {
// //       let obj = {
// //         email: email,
// //         id: new Date().getTime(),
// //         fname: fname,
// //         address: address,
// //         password: password,
// //       };
    
// //       setData([...data, obj]);
// //       setEmail("")
// //       setFname("")
// //       setAddress("")
// //       setPassword("")
// //     }
// //   }
// //   };
// //   const onDelete = (id) => {
// //     let deletedData = data.filter((elem) => {
// //       return id !== elem.id;
// //     });
// //     setData(deletedData);
// //   };
// //   const onEdit = (item) => {
// //     setEmail(item.email);
// //     setFname(item.fname);
// //     setAddress(item.address);
// //     setPassword(item.password);
// //     setId(item.id);
// //     setShow(false);
// //   };
// //   return (
// //     <>
// //     <div className="main_div">
// //         <h1>Login Form</h1>
// //       <form onSubmit={formSubmit}>
// //         <input
// //           type="email"
// //           value={email}
// //           placeholder="Enter your Email"
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="Name"
// //           value={fname}
// //           placeholder="Enter Your Name"
// //           onChange={(e) => setFname(e.target.value)}
// //         />
// //         <input
// //           type="address"
// //           value={address}
// //           placeholder="Enter Your Address"
// //           onChange={(e) => setAddress(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           placeholder="Enter Your Password"
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         {show ? <button variant="success">Submit</button> : <Button variant="primary">Edit</Button>}
// //       </form>
         
// //           <>
// //           <Table striped bordered hover>
// //                   {
// //                     data?.length ?   <tr>
// //                     <th scope="col">id</th>
// //                     <th>email</th>
    
                    
// //                     <th>First Name</th>
// //                     <th>Address</th>
// //                     <th>Delete</th>
// //                     <th>Edit</th>
// //                   </tr> :
// //                   null
// //                   } 
// //                 {data?.map((item, index) => {
// //                   return (
// //                     <tbody>
// //                     <tr>
// //                       <td>{index}</td>
// //                       <td>{item.email}</td>
// //                       <td>{item.fname}</td>
// //                       <td>{item.address}</td>
// //                       <td>{item.password}</td>
// //                       <td>
// //                         <Button
// //                           variant="danger"
// //                           onClick={() => onDelete(item.id)}
// //                         >
// //                           Delete
// //                         </Button>
// //                       </td>
// //                       <td>
// //                         <Button variant="primary" onClick={() => onEdit(item)}>
// //                           Edit
// //                         </Button>
// //                       </td>
// //                     </tr>
                
              
// //               </tbody>
           
// //                 )})}
// //                  </Table>
// //           </>
       
// //           </div>

// //     </>
// //   );
// // }

// import react from 'react' ;
// import { useState , useEffect } from 'react';
// const Crud=()=>{
//   const [name , setName]=useState()
//   const [data , setData]=useState([])
//   const [email , setEmail]=useState()
//   const [id , setId]=useState()
//   const [show , setShow]=useState(true)
//   useEffect(() => {
//     // Retrieve data from localStorage on component mount
//     const storedData = localStorage.getItem('myData');
//     let items = JSON.parse(storedData)

//     console.log("storedData",items)
    
//     if (items) {
//       setData([items]);
//     }
//     console.log("data",data)
//   }, []);
//   const submitForm=(e)=>{
//     e.preventDefault()
//     if(show == false){
//        let editedData = data?.map((elem)=>{
//           if(elem.id == id){
//             return{
//               ...elem,
//               name:name,
//               email:email
//             }
//           }
//           return elem 
//        })
//        setData(editedData)
//     }
//    else {
//       let obj={
//         name:name,
//         id:new Date().getTime()
//       }
//       setData([...data,obj])
//       setName("")
//       setEmail("")
//       localStorage.setItem('myData', JSON.stringify(obj));

//     }
//    }
//   const delData=(item)=>{
  
//       let deletedData = data.filter((elem)=>{
//           return item.id !== elem.id 
//       })
//       setData (deletedData)
//   }
//   const editData=(item)=>{
//     setName(item.name)
//     setEmail(item.email)
//     setShow(false)
//     setId(item.id)
//   }
//   return(
//     <>
//        <form onSubmit={submitForm}>
//            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//           {show ?  <button>Submit</button> :  <button>Edit</button> }
//        </form> 
//        { 
//        data && data.length ?
//         data?.map((item)=>{
//           return(
//             <>
//             <table>
//               <tr>
//                 <td>{item.name}</td>
//                 <td><button onClick={()=>delData(item)}>Delete</button></td>
//                 <td><button onClick={()=>editData(item)}>Edit</button></td>
//               </tr>
//             </table>
            
//             </>
//           )
//         }):null
//        }
//     </>
//   )
// }
// export default Crud;
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import axios  from 'axios'
const Crud=()=>{
  const [email , setEmail]=useState()
  const [password , setPassword]=useState()
  const [data, setData] = useState([])
  const [show , setShow] =useState(true)
  const [id , setId] = useState()
  const navigate = useNavigate()
  const submitForm=(e)=>{
    console.log("data")
    e.preventDefault()
    let obj={
      email:email,
      password:password


    }



    axios.post("http://localhost:7000/user",obj).then((res)=>{
      console.log("res",res)
    
    })
     navigate("/dashboard")
    
    return

    if (show == false){
       let editedData = data?.map ((elem)=>{
        if(elem.id == data.id){
          return {...elem,email:email,password:password}
        }
       })
    }
    else{
      let obj={
        email:email,
        password:password,
        id:new Date().getTime()
       }
       setData([...data,obj])
       setEmail("")
       setPassword("")
    }
  }
  const delData=(item)=>{
    let deletedData = data.filter((elem)=>{
      return item.id !== elem.id
    })
    setData(deletedData)
  }
  const editData=(item)=>{
      setEmail(item.email)
      setPassword(item.password)
      setShow(false)
  }
  return(
    <>
    {/* <form onSubmit={submitForm}>
      <input type="email" value={email} placeholder='Enter Your Email Here'/>
      <input type="password" value={password} placeholder='Enter Your password' />
      <button>Submit</button>
    </form> */}
    <div className='w-full max-w-xs'>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
     { show ?     <button > submit</button> :      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Edit
      </button> }
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  {
       data?.map((item)=>{
        return(
          <>
            <table>
              <tr>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><Button onClick={()=>delData(item)}>Delete</Button></td>
                <td><Button onClick={()=>editData(item)}>Edit</Button></td>
              </tr>
            </table>
          </>
        )
       })
    }

    </div>
  </>
  )
}
export default Crud;
