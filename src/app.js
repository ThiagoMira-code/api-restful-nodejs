const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();  // Carrega as variáveis do arquivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());  // Habilita CORS

// Definir as rotas
app.use('/api/usuarios', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
