
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Something is sending from home server roue 6/7/2022')
});
app.listen(port, ()=>{
    console.log(`listening to port creatino at 6/7/2022 ${port}`);
});

/* 
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Testing Home Route for server script')
});
// hardcoded json file use for time pass
const user = [
    { name: "Ranjit", email: "ranjit@gmail.com"},
    { name: "Ramen", email: "ramen@gmail.com"},
]
app.get('/user', (req, res)=>{
res.send(user);
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
 */

/* const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server is ready to run')
});

app.listen(port, ()=>{
    console.log(`LIstening to port ${port}`);
});

 */
/* 
const express = require('express');
const app = express();
const port = process.env.port || 500;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server app testing successfully')
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
 */
// const express = require('express');
// const app = express();
// const port = process.env.port || 5000;
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send('server app testing success');
// });

// app.listen(port, ()=>{
//     console.log(`listening to port ${port}`);
// });