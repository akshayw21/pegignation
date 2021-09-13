const express=require('express');
const app=express();
app.use(express.json());

const Data=require('./document/test');

app.get('/api/pagination',(req,res)=>{
    if(!req.body.page){
        var page=1;
    }else{

        var page=req.body.page;
    }
    if(!req.body.limit){
        var limit=10;
    }else{
        var limit=req.body.limit;
    }
    var d1=Data.slice(page*limit-limit,page*limit)
    
    const pageCount=Math.ceil(Data.length/limit);
    if(page>pageCount){
        page=pageCount;
    }
    if (page==pageCount){
        d1.push({message:'this is end of the page.'})
    }
    
    res.json({
        page:page,
        pageCount:pageCount,
        data:d1
        
    });
});


app.listen(3001,console.log('server started on port.'))