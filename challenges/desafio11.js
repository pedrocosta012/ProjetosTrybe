db.produtos.find(
  { $and: [
    { nome: { $not: { $eq: "Big Mac" } } },
    { nome: { $not: { $eq: "McChicken" } } },
  ] },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 },
);
