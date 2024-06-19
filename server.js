// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обслуживания статических файлов из папки 'public' и 'lessons'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lessons', express.static(path.join(__dirname, 'lessons')));

// Маршрут для основной страницы приложения
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
