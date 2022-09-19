import  React,{useState} from "react";
//making a  functional  component
const  Form = ()   => {
    //regular js  code
    //putting it in  a dictionary
    //const  [user ,setUser]=useState({
    //  first_name : '',
    //})

    // [] is  an array  and  to modify first word call on 2nd argument
    const[first_name,setFirst_name] = useState("");
    const[last_name,setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_passwordErr, setConfirm_PasswordErr] = useState({});



    const onSubmit=(e)=> {
        e.preventDefault();
        const isValid = formvalidate();
    }
    //validate form
    const formvalidate =()=>{
        const confirm_passwordErr ={};
        let isValid = true;
        if(confirm_password.length <8){
            confirm_passwordErr.lenmsg="Please enter a matching  password.";
            isValid = false;
        }
        if(confirm_password !==  password){
            confirm_passwordErr.msg="Passwords do not match.";
            isValid = false;
        }
        setConfirm_PasswordErr(confirm_passwordErr);
        return isValid;
    }
    

    return(
        <div  className="container">
            <h3>Fill  out this form below</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange={(e)=>setFirst_name(e.target.value)}  name="first_name"  type="text" className="form-control" id="first_name" />
                    {
                        first_name.length<2?
                        <p className="text-danger">First Name must be at least 2 characters</p>:null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange={(e)=>setLast_name(e.target.value)}   type="text" className="form-control" id="last_name" />
                    {
                        last_name.length<2?
                        <p className="text-danger">Last Name must be at least 2 characters</p>:null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" className="form-control" id="email" />
                    {
                        email.length<5?
                        <p className="text-danger">Email must be at least 5 characters</p>:null
                    }   
                    </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" />
                    {
                        password.length<8?
                        <p className="text-danger">Password must be at least 8 characters</p>:null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange={(e)=>setConfirm_password(e.target.value)} type="password" className="form-control" id="confirm_password" />
                    {Object.keys(confirm_passwordErr).map((key)=>{
                        return <div>{confirm_passwordErr[key]}</div>;
                    })}
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            <h1>Your Info:</h1>
            <p>Name:{first_name}{last_name}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm-Password:{confirm_password}</p>
        </div>
    )
}

export  default  Form;



return(
    <div>
        <h1>All Products:</h1>
        {
        product.map((aproduct)=>{
            return(
                <div key={aproduct._id} className='card mb-3'>
                    <h3>{aproduct.title}</h3>
                    <h4>Price:${aproduct.price}</h4>
                    <p>{aproduct.description}</p>
                </div>
            )
        })
        }
    </div>
);
};