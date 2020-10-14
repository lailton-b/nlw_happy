import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errors/handler';
import './database/connection';

const app = express();

/* Express */

app.use(cors);
app.use(express.json()); // Diz para o Express que utilizaremos JSON, sem isso ele não lerá JSON.
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);