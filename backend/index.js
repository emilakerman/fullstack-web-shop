import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import itemsRoute from './routes/itemsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body (json).
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Middleware for handling CORS policy.
app.use(cors());

app.get('/', (req, res) => {
  res.send('Root Page!');
});

app.use('/items', itemsRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.log('Failed to connect to MongoDB', error);
});

