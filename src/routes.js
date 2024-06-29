import {Router} from 'express';

const rutas = Router();

rutas.get('/', (req, res) => {
    res.redirect('/dashboard');
});

rutas.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs')
})


export default rutas;