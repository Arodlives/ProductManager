import React,{useState} from 'react';
import axios from 'axios';


const AllProducts = (props)  => {
    let[forminfo,setForminfo]=useState({});
    let[formErrors,setFormErrors]=useState({});

    const handler=(e)=>{
        //if(e.target.type == "checkbox"){
           // setForminfo({
               // ...forminfo,
               // [e.target.name]: e.target.checked
           // })
        // }else{}
        setForminfo({
            ...forminfo,
            [e.target.name]: e.target.value
        })
    }

    //*when having a form  incompletely res look like 
    //*response.data.errors
    //*when complete 
    //*response.data.results

    // if  error  save  error to state  variable


    //when submitting form
    const submitHandler=(e)=>{
        e.preventDefault();
        // 2nd argument is the data object from form ,1st argument is method
        axios.post("http://localhost:8000/api/createProduct",forminfo)
            .then(response=>{
                console.log("data received after submit",response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors); //saving error to state  variable when validation fails or empty form
                }else{
                    setFormErrors({})
                    props.setFormSubmitted(!props.formSubmitted)
                }
            })
            .catch(err=>{console.log(err)});
    }



    return(
        <div>
            <h1>Form </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handler}/>
                    {/*validations here  could cause not to load bec of missing?*/}
                    {/*
                        formErrors.title? formErrors.title.message:null*/}
                    <p  className='text-danger'>{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" onChange={handler} />
                    <p  className='text-danger'>{formErrors.price?.message}</p>
                </div>
                <div  className="form-group">
                    <label>Description</label>
                    <textarea name="description" id="" cols="30" rows="10"onChange={handler} ></textarea>
                    <p  className='text-danger'>{formErrors.description?.message}</p>
                    <input type="submit"value="Create" className='btn btn-success m-3'/>
                </div>
            </form>
        </div>
    );

};

export  default AllProducts;