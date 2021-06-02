const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/', (req, res) =>{
    res.json({
        msg: 'OK'
    })
})

app.get('/rotateste', (req, res) =>{
    res.json({ 
        name: "william",
        lastName: "Grohe",
        msg: "SUCESSO!"
    })
})

app.listen(PORT, () => {
    console.log('escutando na porta ' + PORT);
});