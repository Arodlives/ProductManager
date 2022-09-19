import React,{useState,useEffect} from 'react';
import axios from 'axios';
import{Routes,Route,Link} from 'react-router-dom'

const AllProducts = (props)  => {

    let[product,setProduct] =useState([]); 

    useEffect(()=>{
    axios.get('http://localhost:8000/api/products') // will rerender use useeffect to render once
        .then((productobj)=>{
            console.log("productobj",productobj);  //seen on browser,putting response into state var  to be  accessible
            setProduct(productobj.data.results);  
        })
        .catch(err=>console.log(err))
    },[props.formSubmmited])

    return(
        <div>
            <h1>All Products:</h1>
            {
            product.map((aproduct,)=>{
                return(
                    <div key={aproduct._id} className='card mb-3'>
                        <h3><Link to={`/products/${aproduct._id}`}>{aproduct.title}</Link></h3>
                        <Link to={`/products/edit/${aproduct._id}`} className='btn  btn-primary mt-3'>Edit</Link>
                    </div>
                )
            })
            }
        </div>
    );
};

export  default AllProducts;