const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const port = 3000;

const userRouter = require('./routes/users')

app.use(cors());

// connect DB
mongoose.connect('mongodb+srv://vinhquy:5YXbS14jIl5u5xU2@cluster0.1ibzghu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
}).catch(error => console.log('Connect fail: ', error));

app.use(express.json({ extended: true }));


app.get('/', (req, res) => {
  res.send('API Running')
})

// router
app.use('/api/users', userRouter)

app.listen(port, () => {
  console.log(`Server Up and running localhost:${port}`)
})