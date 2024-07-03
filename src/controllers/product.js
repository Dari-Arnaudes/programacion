import Swal from "sweetalert2";
import { ProductModel } from "../models/product.js";
import { CategoryModel } from "../models/category.js";

export const getProducts = async (req, res) => {
    try {
       const result = await ProductModel.Alls();
       res.render('products.ejs', {productos: result})
    } catch (error) {
        throw error
    }
}

export const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await ProductModel.Get(id);
        const categorias = await CategoryModel.Alls();
        res.render('editProduct.ejs', {producto: producto[0], categorias: categorias});
    } catch (error) {
        throw error
    }
}


export const newProduct = async (req, res) => {
    try {
      const result = await CategoryModel.Alls();
      res.render('newProduct.ejs', {categorias: result})
    } catch (error) {
      throw error
    }
}


export const CreateProduct = async (req, res) => {
    try {
      const {nombre, categoria, existencia, precio } = req.body;
      ProductModel.Create([nombre, categoria, existencia, precio ])
      res.redirect('/productos')
    } catch (error) {
      throw error
    }
}

export const UpdateProduct = async (req, res) => {
  try {
    const {nombre, categoria, existencia, precio, id_p } = req.body;
    
   ProductModel.Update([nombre, categoria, existencia, precio, id_p ]);
   res.redirect('/productos')
  } catch (error) {
    throw error
  }
}

export const deleteProduct = async (req, res) => {
  try {
      const {id} = req.params;
      ProductModel.Delete(id);
      res.redirect('/productos')
  } catch (error) {
      throw error
  }
}