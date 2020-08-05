import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001);

// Parametros
// Corpo (Request Body): Dados para criação ou atualização de um registro
//
// Route Params: Identificar qual recurso eu quero atualizar ou deletar. 
//      ex.: app.delete('/users/:id', ...)
// E para recuperar o parameto 'id' é só usar: request.params.id
//
// Query Params: Usado para paginação, filtros, ordenação.: 
//      ex.: http://localhost:3001/users?page=2&sort=name
// E para acessar esses parametros usamos: request.query.page || request.query.sort