const express = require('express');
const routes = require('./routes/users');
const app = express();
const port = 3333

app.use(routes)

app.listen(port, () => console.log(`Server is runing port ${port}`))