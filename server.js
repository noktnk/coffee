// server.js
const express = require('express');
const app = express();
const PORT = 8080;

// サンプルデータ
const coffees = [
  { id: 1, name: 'Ethiopian Yirgacheffe', origin: 'Ethiopia', flavor: 'Floral, citrus' },
  { id: 2, name: 'Colombian Supremo', origin: 'Colombia', flavor: 'Nutty, chocolate' },
  { id: 3, name: 'Sumatra Mandheling', origin: 'Indonesia', flavor: 'Earthy, spicy' }
];

// JSON ボディをパースするためのミドルウェア
app.use(express.json());

// ヘルスチェック用エンドポイント (Fargate/ALBで使用)
app.get('/', (req, res) => {
  res.status(200).send('Coffee API is running!');
});

// /coffee : 一覧を取得
app.get('/coffee', (req, res) => {
  res.json(coffees);
});

// /coffee/{id} : 詳細を取得
app.get('/coffee/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const coffee = coffees.find(c => c.id === id);

  if (coffee) {
    res.json(coffee);
  } else {
    res.status(404).send('Coffee not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});