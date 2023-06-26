// import React from 'react'
// import { useState } from 'react';

// export default function Search() {
//   const [search , setSearch]=useState("")
//   const [result , setResults]=useState()
//   const [data, setData] = useState([
//     { id: 1, name: 'John', state: 'California' },
//     { id: 2, name: 'Jane', state: 'New York' },
//     { id: 3, name: 'Bob', state: 'California' },
//     { id: 4, name: 'Alice', state: 'Texas' },
//   ]);
//   const serchDetails=()=>{
//     const results = data.filter((items)=>{
//         console.log("items" , items)
//         return items.name.toLowerCase().includes(search.toLowerCase())
//     })
//     console.log("results", results)
//   }
//   return (
//     <>
//     <input type="text" value={search}  placeholder='search here' onChange={(e)=>setSearch(e.target.value)}/>
//     <button onClick={serchDetails}>Search</button>
// {
//   data?.map((item)=>{
//     return(
//       <div>{item?.name}</div>

//     )
//   })
// }
// </>
//   )
// }
// import React from 'react'
// import { useState } from 'react'
// export default function Search() {
//   const [name , setName]=useState()
//   const [address , setAdd]=useState()
//   const [data , setData]=useState([])
//   const [search , setSearch]=useState("")
//   const submitForm=(e)=>{
//     e.preventDefault()
//     let obj={
//       name:name,
//       address:address,
//       id: new Date().getTime()
//     }
//     setData([...data,obj])
//     setName("")
//     setAdd("")
//   }
//   const delData=(item)=>{
//     let deletedData = data.filter((elem)=>{
//       return elem.id !== item.id
//     })
//     setData(deletedData)
//   }
//   const handleSearch=()=>{
//     const serchResult = data.filter((items)=>{
//       console.log("items", items)
//       return items.name.toLowerCase().includes(search.toLowerCase())
//     }) 
//   }
//   return (
//     <>
//     <form onSubmit={submitForm}>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
//       <textarea type="text" value={address} onChange={(e)=>setAdd(e.target.value)} placeholder='enter address'/>
//        <button>Submit</button>
//     </form>
//     {
//       data?.map((item)=>{
//         return(
//           <>
//           <div>{item.name}</div>
//           <div>{item.address}</div>
//           <div><button onClick={()=>delData(item)}>delete</button></div>
//           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
//           <button onClick={handleSearch}>Search</button>
//           </>
//         )
//       })
//     }
//     </>
//   )
// }
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Search() {
  const[email , setEmail]=useState()
  const [password, setPassword]=useState()
  const [data, setData]=useState()
  const [id , setId]=useState()
  const [show , setShow]=useState(true)
  const [search , setResult]=useState("")
  let baseUrl= "http://localhost:7000/user";
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
      axios.get(baseUrl).then((res)=>{
        if(res.data)
        setData(res.data)
      })
  }
  const  submitForm =(e)=>{
    e.preventDefault()
    if (show==false){
      let obj={
        email:email,
        password:password,
       }
       axios.put(`http://localhost:7000/user/${id}`,obj).then((res)=>{
        if(res.data){
          getData()
        }
       })
    }
    else{
      let obj={
        email:email,
        password:password
       }
       axios.post(baseUrl,obj).then((res)=>{
        if(res.data){
          getData()
        }
       })
    }
  }
  const onDel=(item)=>{
    axios.delete(`http://localhost:7000/user/${item._id}`).then((res)=>{
      if(res.data){
        getData()
      }
      
    })
  }
  const onEdit=(item)=>{
   setEmail(item.email)
   setPassword(item.password)
   setShow(false)
   setId(item._id)
  }
  const handleSearch=()=>{
    const searchResult = data.filter((items)=>{
      console.log("items",items)
      return items?.email?.toLowerCase().includes(search?.toLowerCase())
    
    })
    console.log("searchResult",searchResult)
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {show  ? <button>submit</button> :  <button>Edit</button>}
      </form>
      {
        data?.map((item)=>{
          return(
          <>
              <div>{item.email}</div>
            <div>{item.password}</div>
            <div><button onClick={()=>onDel(item)}>Delete</button></div>
            <div><button onClick={()=>onEdit(item)}>Edit</button></div>
            
          </>
          )
        })
      }
      <input type="text" value={search} onChange={(e)=>setResult(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
    </>
  )
}


