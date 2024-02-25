import express from 'express';
import routes from './infra/http/routes';
import { MongoseDatabase } from './infra/database/mongo';

const app = express();
const port = 3000;
app.use('/api', routes);
app.listen(port, async () => {
  await MongoseDatabase.connect();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
