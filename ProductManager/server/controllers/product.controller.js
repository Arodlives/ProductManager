const  Product =  require("../models/product.model");

//! Show  All 
module.exports.showAllProducts = (req,res)=>{
    Product.find()
    //*  If  successful
    //*  First param can be named anything 
    .then((foundProducts)=>{
        //* Respond with json object
        res.json({results: foundProducts})
    })
    //*  If  fails
    .catch(err=>{
        res.json({message:"Error missing some things",error:err})
    });
}

//! Show One 
//* Uses id parameter
module.exports.showOneProduct = (req, res)=>{   
    //* Findone is more flexible than find one by id which only accepts id
    Product.findOne({_id:req.params._id})
    .then((foundProduct)=>{
        res.json({results: foundProduct})
    })
    .catch(err=>{
        res.json({message:"Error missing some things",error:err})
    });
}


//! Create One
module.exports.createProduct =(req, res) => {
    //* Data should come from form data (req.body)
    Product.create(req.body)
    //* NewProduct is the new object 
    .then(newProduct => {
        res.json({results:newProduct});
    })
    .catch(err=>{
        res.json({err})
    });
}

//! Update One
module.exports.updateOneProduct = (req, res) => {
    Product.updateOne(
        {_id:req.params.id},//which Object to update
        req.body, //Form info used to update the book
        {new:true,runValidators:true}
        )
        .then(updatedProduct => {
        res.json({results:updatedProduct});
        })
        .catch(err=>{
            res.json({message:"Error missing some things",error:err})
        });
} 

//! Delete One
module.exports.deleteProduct = (req, res)=> {
    Product.deleteOne({_id:req.params.id})
    .then(deleteProduct =>{
        res.json({results:deleteProduct});
    })
    .catch(err=>{
        res.json({message:"Error deleting some things",error:err}) 
    });
}