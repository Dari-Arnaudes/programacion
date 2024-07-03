import { CategoryModel } from "../models/category.js";


export const getCategories = async (req, res) => {
    try {
        const categorias = await CategoryModel.Alls();
        res.render('category.ejs', {categorias})
    } catch (error) {
        throw error
    }
}

export const newCategory = (req, res) => {
    res.render('newCategory.ejs');
}


export const createCagory = async (req, res) => {
    try {
        const { categoria } = req.body;
        CategoryModel.Create(categoria);
        res.redirect('/categorias')
    } catch (error) {
        throw error
    }
}

export const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const result = await CategoryModel.Get(id)
        res.render('editCategory.ejs', {categoria: result[0]})
    } catch (error) {
        throw error
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { categoria, id } = req.body;
        
        CategoryModel.Update([categoria, id]);
        res.redirect('/categorias');
    } catch (error) {
        throw error
    }
}


export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        CategoryModel.Delete(id);
        res.redirect('/categorias');
    } catch (error) {
        throw error
    }
}