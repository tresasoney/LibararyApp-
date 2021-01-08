const express= require('express');

const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom and jerry.jpg"
    
        },
        {
            title:'Harry Potter',
            author:'J.K. Rouling',
            genre:'Fantacy',
            img:"harry potter.jpg"
    
        },
        {
            title:'Pathummayude Adu',
            author:'Basheer',
            genre:'Drama',
            img:"pathu.jpg"
    
        },

        {
            title:'The Hunger Games ',
            author:'Suzanne Collins',
            genre: 'Fiction, Science Fiction  Fantasy, Young Adult ',
            img:"sbook.jpg"
    
        },
        
        {
            title:'Pride and Prejudice  ',
            author:'Jane Austen',
            genre: 'Fiction, Romance, Humor and Comedy  ',
            img:"jbook.jpg"
    
        },
        {
            title:' The Fault in Our Stars  ',
            author:'John Green',
            genre: ' Romance ',
            img:"fault.jpg"
    
        }
    
    
    
    
    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Libarary',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",
        {
            nav,
            title:'Libarary',
            book:books[id]
        });
    
    });
    return booksRouter;
}


module.exports= router;
