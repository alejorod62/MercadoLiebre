const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));  

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));  // Permite enviar un archivo HTML
 });

 app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
 });

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo");
});



