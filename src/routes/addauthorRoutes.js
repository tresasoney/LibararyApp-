const express= require('express');
const addauthorRouter=express.Router();
function rout(nav){ 
    

addauthorRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Libarary'
            
        });
    });
    addauthorRouter.get('/add',function (req,res) 
    {
        res.send("Hey,I am added");
    })
    return addauthorRouter;
}
module.exports=rout;