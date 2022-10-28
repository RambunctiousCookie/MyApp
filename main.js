//import packages
const express = require('express')
const morgan=require('morgan')

//configure our port

//check if it is set to the environment variable; if not then we default to 3000
//NODE JS USUALLY USE 3000

const port = process.env.PORT || 3000

//create an isntance of express applicaiton
const app = express()

//log all request
app.use(morgan('common'))


//previous
//console.info(`port = ${port}`)

//get/
//two input params, lambda function nameless
app.get('/',(req,resp)=>{
    //return HTML content
    resp.type('text/HTML')
    //set the status code
    resp.status(200)
    //send the response again
        //use backticks
        //there is a proper mvc way to do it but this is a shortcut
    resp.send(`<h1>The time is now ${new Date()}</h1><img src="/static/bunnie.png">`)

})


//serve static resource
app.use("/static",express.static(__dirname+"/static"))

//start our web application
app.listen(port,()=>{
    console.info(`Starting application on port ${port} at ${new Date()}`)
})

//syntax means- after server has started successfully, run this function ()=>

//ah jeez, need a new release