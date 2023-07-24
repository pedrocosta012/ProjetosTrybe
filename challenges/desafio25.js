db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $addToSet: { tags: "muito sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
