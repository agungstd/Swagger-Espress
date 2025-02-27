let users = [
  { id: 1, name: "user 1", email: "exampleuser@email.com" },
  { id: 2, name: "user 2", email: "exampleuser2@email.com" },
  { id: 3, name: "user 3", email: "exampleuser3@email.com" },
  { id: 4, name: "user 4", email: "exampleuser4@email.com" },
  { id: 5, name: "user 5", email: "exampleuser5@email.com" },
  { id: 6, name: "user 6", email: "exampleuser6@email.com" },
  { id: 7, name: "user 7", email: "exampleuser7@email.com" },
  { id: 8, name: "user 8", email: "exampleuser8@email.com" },
  { id: 9, name: "user 9", email: "exampleuser9@email.com" },
  { id: 10, name: "user 10", email: "exampleuser10@email.com" }
];

export const getAll = (req, res) => {
  res.json(users);
};

export const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  } else {
    return res.json(user);
  }
};

export const create = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  } else {
    user.name = req.body.name;
    user.email = req.body.email;
    return res.json(user);
  }
};

export const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  } else {
    users = users.filter((b) => b.id !== id);
    return res.json(user);
  }
};
