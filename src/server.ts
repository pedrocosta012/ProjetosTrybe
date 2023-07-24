import app from './app';
import 'dotenv/config';

import connectToDatabase from './Models/Connection';

const PORT = 3001;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
  });
}).catch((error) => {
  console.log('Falha na conexão com o banco de dados');
  console.log(error);
  console.log('Finalizando processo...');
  process.exit();
});
