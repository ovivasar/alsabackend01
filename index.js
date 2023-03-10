const express = require('express');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/',(req,res)=>{
  res.send('HOLA PERU')
})

// Routes
app.use('/apiprueba/',require('./src/routes/index'));

app.listen(5000);
console.log('Server on port', 5000);
