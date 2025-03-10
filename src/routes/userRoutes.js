const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para obter todos os usuários
router.get('/', userController.getUsers);

// Rota para criar um novo usuário
router.post('/', userController.createUser);

module.exports = router;
