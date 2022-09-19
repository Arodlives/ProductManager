import  React,{useState,useEffect} from 'react';
import  axios  from 'axios';
import {useParams}  from 'react-router';
import {useNavigate} from 'react-router-dom'

const OneProduct =()=>{

    const {id}=useParams() 

    const[details,setDetails]=useState({})  //for one object
    const navigate=useNavigate();
    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/showoneProduct/${id}`)
        .then(response=>{
            console.log(response);
            setDetails(response.data.results);
        })
        .catch(err=>console.log(err));
    },[id])

    const deleteProduct=()=>{
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then(response=>{
            console.log("Item deleted",response)
            navigate("/")
        })
        .catch(err=>console.log(err));
    
    }

    return (
        <div>
            <h3>Details here{details.title}</h3>
            <h4>Price: ${details.price}</h4>
            <p>Description:{details.description}</p>
            <button onClick={deleteProduct} className='btn btn-danger'>Delete</button>
        </div>
    );
}

export default OneProduct;