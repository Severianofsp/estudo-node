const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log('Acesse http://localhost:8080/')
    console.log('----------------------------')
    console.log('Servidor Executando na porta 3000')
})