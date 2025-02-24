
const express = require("express")
const app = express()
const cors = require("cors")

// CORSを許可する設定（全てのドメインからのリクエストを許可）
app.use(cors());

// ポート番号の設定
const port = 5000;

const fishData = []

// ミドルウェア設定: リクエストボディをJSONとしてパース
app.use(express.json());

// ルートパス (GETリクエスト)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// /api/hello パス (GETリクエスト)
app.get('/api/hello', (req, res) => {
    // res.send("hello APIsss")
  res.json({ message: 'Hello, API!' });
});

// /api/data パス (POSTリクエスト)
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  res.json({ message: `Hello ${name}, you are ${age} years old!` });
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});