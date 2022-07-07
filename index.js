const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Leading Home Route for Ranjit');
});
// get from mongodb api

const uri = "mongodb+srv://users:4p0QpTLyFR33djF0@cluster0.kwdbbxh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/* 
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */
async function run(){
    try{
        await client.connect();
        const userCollection = client.db('practice').collection('users');
        app.post('/user', async(req, res)=>{
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })
    }
    finally{

    }
}
run().catch(console.dir);

app.listen(port, ()=>{
    console.log(`Listening to port ${port} with Ranjit`);
});

/* 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());
app.use(express());

app.get('/', (req, res)=>{
    res.send('Home route done');
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
 */
/*
const express = require('express');
const app = express();
const port = process.env.port || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Testing Home rout app')
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
*/
/* 
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server is ready for coding')
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
 */
/* 
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
 */

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