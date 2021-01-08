const express= require('express');
const addbookRouter=express.Router();
function rout(nav){ 
    

addbookRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Libarary'
            
        });
    });
    addbookRouter.get('/add',function (req,res) 
    {
        res.send("Hey,I am added");
    })
    return addbookRouter;
}
module.exports=rout;