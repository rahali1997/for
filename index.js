const express=require('express')
const app=express()


app.get('/app',(req,res)=>{
    res.send('done')
})

app.listen(5000,()=>console.log('server is running'))