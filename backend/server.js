const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.post('/api/calculate-total', (req, res) => {
  const items = req.body.items;
  let totalCost = 0;

  items.forEach(item => {
    totalCost += item.quantity * item.price;
  });

  res.json({ totalCost });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
