import express from 'express';
const app = express();

app.use((req, res) => {
  res.status(200).send('A Monk in Cloud');
});

const port = 80;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});