db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.produtos.findOne({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
