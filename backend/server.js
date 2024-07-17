const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/biodecodificacion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
