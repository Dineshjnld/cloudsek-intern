const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://dineshjnld00:Tw6w976EqRLRIWsE@cluster0.hz3aj77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/api/posts', postRoutes);
app.use('/api/posts', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



