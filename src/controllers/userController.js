const users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
  ];
  
  const getUsers = (req, res) => {
    res.status(200).json(users);
  };
  
  const createUser = (req, res) => {
    const { id, nome } = req.body;
    users.push({ id, nome });
    res.status(201).json({ id, nome });
  };
  
  module.exports = { getUsers, createUser };
  