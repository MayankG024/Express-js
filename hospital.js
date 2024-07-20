const express = require('express');
const app = express();

//http server for hospital database 



const users = [{
    name: "don",    
    kidneys: [{
        healthy: true,
    }]
     
}];


if (users!=="don" ) {
    res.status(404).send("User not found")
    return;
};  

app.get("/", (req, res) => {

    const johnkidneys = users[0].kidneys;
    const noofkidneys = johnkidneys.length;

    console.log(johnkidneys);
    console.log(noofkidneys);
});



app.listen(5000);