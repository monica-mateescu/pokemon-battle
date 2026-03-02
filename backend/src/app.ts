import '#db';
import express from 'express';
import cors from 'cors';
import { CLIENT_BASE_URL } from '#config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: CLIENT_BASE_URL, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pokemon API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
