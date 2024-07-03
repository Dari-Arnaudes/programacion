import {Router} from 'express';
import { getProducts, getProduct, newProduct, CreateProduct, UpdateProduct, deleteProduct} from './controllers/product.js';
import { getCategories, getCategory,  createCagory, updateCategory, deleteCategory, newCategory } from './controllers/category.js';


const rutas = Router();

rutas.get('/', (req, res) => {
    res.redirect('/dashboard');
});

rutas.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs')
})

rutas.get('/productos', getProducts);

rutas.get('/producto/editar/:id', getProduct);

rutas.post('/producto/editar', UpdateProduct);

rutas.get('/producto/crear', newProduct);

rutas.post('/producto/crear', CreateProduct);

rutas.get('/producto/eliminar/:id', deleteProduct);


rutas.get('/categorias', getCategories);

rutas.get('/categoria/crear', newCategory);

rutas.post('/categoria/crear', createCagory);

rutas.get('/categoria/editar/:id', getCategory);

rutas.post('/categoria/editar', updateCategory);

rutas.get('/categoria/eliminar/:id', deleteCategory);






export default rutas;