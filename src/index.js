import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${provess.env.PORT}!`),
);