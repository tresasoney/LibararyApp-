const express= require('express');

const signinRouter=express.Router();

signinRouter.get('/',function(req,res){
    res.render("Signin",{
        
        title:'Libarary'
    });
});
module.exports=signinRouter;