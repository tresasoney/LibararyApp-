const express= require('express');
const signupRouter=express.Router();
signupRouter.get('/',function(req,res){
        res.render("Signup",{
        
            title:'Libarary',
            
        });
    });
    

module.exports=signupRouter;