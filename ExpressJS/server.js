import app from './src/app.js'
const 
const startServer = ()=>{
    const port = process.env.PORT || 4000 ;

    app.listen(port , ()=>{
        console.log(`Port is running on ${port}`);
    })
}

startServer(); 