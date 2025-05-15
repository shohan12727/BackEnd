require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;


const apiData = {
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Ayesha Rahman",
      "email": "ayesha.rahman@example.com",
      "username": "ayesha_r",
      "phone": "+8801712345678",
      "address": {
        "street": "House 12, Road 4",
        "city": "Dhaka",
        "postalCode": "1207",
        "country": "Bangladesh"
      },
      "role": "admin",
      "createdAt": "2024-09-10T12:30:00Z",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Mehedi Hasan",
      "email": "mehedi.hasan@example.com",
      "username": "mehedi_h",
      "phone": "+8801811223344",
      "address": {
        "street": "Flat B2, Building 5",
        "city": "Chittagong",
        "postalCode": "4000",
        "country": "Bangladesh"
      },
      "role": "user",
      "createdAt": "2024-10-21T09:15:00Z",
      "isActive": false
    },
    {
      "id": 3,
      "name": "Tania Islam",
      "email": "tania.islam@example.com",
      "username": "tania_i",
      "phone": "+8801999887766",
      "address": {
        "street": "123 Main Street",
        "city": "Sylhet",
        "postalCode": "3100",
        "country": "Bangladesh"
      },
      "role": "editor",
      "createdAt": "2025-01-02T17:45:00Z",
      "isActive": true
    }
  ]
}

app.get('/api-email', (req, res) => {
  const userEmail = apiData.data.map(element => element.email);
  res.json(userEmail);
})

app.get("/api-userName", (req, res) => {
  const userName = apiData.data.map(element => element.username);
  res.json(userName);
} ) 


app.get ('/api-name', (req,res) => {
  const name = apiData.data.map(element =>  element.name);
  res.json(name);
})

app.get('/api-all', (req, res) =>  {
  res.json(apiData);
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Shohan");
});

app.get("/home", (req, res) => {
  res.send("<h1>You are at home</h1>");
});

app.get("/foot", (req, res) => {
  res.send("<h1>I am Footer</h1>");
})

app.get("/card", (req, res) => {
  res.send("<section>you are at card </section>");
});



app.get("/female", (req,res) => {
  res.send("<h1> You are at female section........</h1>")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
