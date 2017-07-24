/* eslint-disable */
const express = require('express');
const cors = require('cors');

// const DEV = process.env.NODE_ENV === 'development';

const app = express();
app.use(cors());

app.get('/history', (req, res) => {
  res.json(
    {body: {orders: [
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1},
      {amount: 10, avg_price: 11, price: 12, deal_amount: 13, create_date: 32455234123, status: -1}
    ]}}
  );
});

app.listen(3001, () => {
  console.info('访问：http://localhost:3001/');
});
