import db from "./database/db.js";
import { productQuery } from "./database/queries.js";

export class ProductModel {
    static Alls () {
        return new Promise((resolve, reject) => {
            db.all(productQuery.alls, (err, data) => {
                if(err) return  reject(err);
                resolve(data)
            })
        })
    }
    static Get (id) {
        return new Promise((resolve, reject) => {
            db.all(productQuery.get, [id], (err, data) => {
                if(err) return  reject(err);
                resolve(data)
            })
        })
    } 
    static Create (newProduct) {
        return new Promise((resolve, reject) => {
            db.run(productQuery.create, newProduct, (err) => {
                if(err) return  reject(err);
            })
        })
    }
    static Update (editProduct) {
        return new Promise((resolve, reject) => {
            db.run(productQuery.update, editProduct, (err) => {
                if(err) return  reject(err);
            })
        })
    }
    static Delete (id) {
        return new Promise((resolve, reject) => {
            db.all(productQuery.delete, [id], (err) => {
                if(err) return  reject(err);
                resolve()
            })
        })
    } 
}