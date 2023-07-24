db.produtos.updateMany(
  { $and: [
    { nome: { $not: { $eq: "McChicken" } } },
    { ingredientes: { $not: { $all: ["ketchup"] } } },
  ] },
  { $push: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
