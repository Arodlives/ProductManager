import  React,{useState,useEffect} from 'react';
import  axios  from 'axios';
import {useParams}  from 'react-router';
import {useNavigate} from 'react-router-dom'

const EditProduct =()=>{

    const {id}=useParams() 
    const[details,setDetails]=useState({})  //for one object+ store  info
    const navigate=useNavigate();

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/showoneProduct/${id}`)
        .then(response=>{
            console.log(response);
            setDetails(response.data.results);
        })
        .catch(err=>console.log(err));
    },[id])

    const changeHandler = (e) =>{
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`,details)
        .then(response=>{
            console.log("response when  submitting",response)
            navigate("/")
        })
        .catch(err=>console.log(err));
    }

    return (
        <div>
        <h1>Edit Form </h1>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" onChange={changeHandler}  value={details.title}/>
                {/*validations here  could cause not to load bec of missing?*/}
                {/*
                    formErrors.title? formErrors.title.message:null*/}
                
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text" name="price" onChange={changeHandler} value={details.price} />
                
            </div>
            <div  className="form-group">
                <label>Description</label>
                <textarea name="description" id="" cols="30" rows="10"onChange={changeHandler} value={details.description} ></textarea>

                <input type="submit"value="Complete" className='btn btn-success m-3'/>
            </div>
        </form>
        </div>
    );
}

export default EditProduct;