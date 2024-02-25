import express from 'express';
import routes from './infra/http/routes';

const app = express();
const port = 3000;
app.use('/api', routes);

app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
