const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
/*
app.listen(
    PORT,
    () => console.log(`its a test monke on http://localhost:${PORT}/monke`)
)
*/
app.listen(
    PORT,
    () => console.log(`its a test monke on POST http://localhost:${PORT}/antimonke/34`)
)

app.get('/monke',(req,res) =>
{
    res.status(200).send({
        monke: 'ahh uhh ahh',
        size:'smoll'
    })
});

app.post('/antimonke/:id', (req,res) => {

    const { id } = req.params;
    const { tail } =req.body;

    if(!tail){
        res.status(418).send({message: 'congratulations you have evovled into human'})
    }
    res.send({
        message: `you are still an damn monke and you still have a tail at ${tail}`,
    })
})