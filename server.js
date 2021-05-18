const express =require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended :true}));

app.get('/',(req,res) => {
    res.sendFile(__dirname +"/index.html");
});

app.post('/',(req,res) => {
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    const result = num1/(num2*num2);
    res.send("The answer is "  + result);

});

app.listen(3000,function() {
    console.log("Server has started on port 3000.");
});
