
const express= require('express');
const authorsRouter=express.Router();
function router1(nav){
    var authors=[
        {
            name:'Joseph Barbera',
            BOD:'March 24, 1911 – December 18, 2006',
            genre:'Fantasy',
            img:'JBarbera.jpg'
        },
        {
            name:'J.K. Rowling',
            BOD:' 31 July 1965',
            genre:'Fantasy',
            img:'Rowling.jpg'
        },
        {
            name:'Vaikom Muhammad Basheer',
            BOD:' 21 January 1908 – 5 July 1994',
            genre:'Drama',
            img:'basheer.jpg'
        },
        {
            name:'Suzanne Collins',
            BOD:'August 10, 1962',
            genre:'Fiction, Science Fiction  Fantasy, Young Adult',
            img:'su.jpg'
        },
        {
            name:'Jane Austen',
            BOD:' December 16, 1775 July 18, 1817',
            genre:'Fiction, Romance, Humor and Comedy ',
            img:'jane.jpg'
        },
        {
            name:'John Green',
            BOD:' August 24, 1977',
            genre:'Romance',
            img:'john.jpg'
        }



    ]
    authorsRouter.get('/',function(req,res){
        res.render("author",{
            nav,
            title:'Libarary',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("singleauthor",
        {
            nav,
            title:'Libarary',
            singleauthor:authors[id]
        });
    
    });
    return authorsRouter;
}
module.exports= router1;

