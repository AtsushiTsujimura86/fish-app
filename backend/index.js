import express from 'express'; // require → import
import cors from 'cors'; // require → import
import mysql from 'mysql2/promise'; // require → import
import { db_config } from './db_config.js'; // require → import

const app = express();

// CORSを許可する設定（全てのドメインからのリクエストを許可）
const allowedOrigins = ['https://fish-creater.vercel.app'];  // フロントエンドのURLを指定
const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST'],  // 許可するHTTPメソッド
  allowedHeaders: ['Content-Type', 'Authorization'],  // 許可するヘッダー
};

// CORSを全てのルートに適用
app.use(cors(corsOptions));

// ポート番号の設定
const port = process.env.PORT || 5000;
console.log("lellll")

// MySQL データベース接続設定
const pool = mysql.createPool(db_config);
console.log(pool)

const fishData = [
  {
    name: 'fish1',
    color: '#efefef'
  }
];

// ミドルウェア設定: リクエストボディをJSONとしてパース
app.use(express.json());

// ルートパス (GETリクエスト)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// /api/hello パス (GETリクエスト)
app.get('/api/hello', (req, res) => {
  res.send('hello APIsss');
  // res.json({ message: 'Hello, API!' });
  res.json(fishData);
});

app.get('/api/fish', async (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    try {
        const [rows] = await pool.query('SELECT * FROM fish');
        res.json(rows); // クライアントに JSON でデータを返す
    } catch (error) {
        console.error('データ取得エラー:', error.message);
        res.status(500).json({ error: 'データ取得に失敗しました' });
    }
    });

app.post('/api/fish', async (req, res) => {
  const { name, headColor, bodyColor, finColor } = req.body;
  const query =
    'INSERT INTO fish (name, head_color, body_color, fin_color) VALUES(?,?,?,?);';
  try {
    const [result] = await pool.query(query, [
      name,
      headColor,
      bodyColor,
      finColor
    ]);
    // 成功したら追加したデータを返す
    res.status(201).json({
      id: result.insertId,
      name,
      headColor,
      bodyColor,
      finColor
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add fish' });
  }
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
