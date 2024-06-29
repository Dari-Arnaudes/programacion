import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import rutas from './routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000 || process.env.PORT;

//Rutas
app.use(rutas)




app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//Archivos Estaticos
app.use(express.static('recourses'));
app.use('/recourses', express.static(__dirname + '/recourses'))


app.listen(port, () => console.log(`Server on port ${port} localhost:${port}/`));