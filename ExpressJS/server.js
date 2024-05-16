import app from './src/app.js'
import {myConfig} from './src/config/config.js'

const startServer = ()=>{
    const port = myConfig.port || 4000 ;

    app.listen(port , ()=>{
        console.log(`Port is running on ${port}`);
    })
}

startServer(); 