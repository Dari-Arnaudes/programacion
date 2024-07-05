import db from "./database/db.js";
import { categoryQuery } from "./database/queries.js";

 export class CategoryModel {
    static Alls () {
        return new Promise((resolve, reject) => {
            db.all(categoryQuery.alls, (err, data) => {
                if(err) return reject(err);
                resolve(data)
            })
        })
    }
    static Get (id) {
        return new Promise((resolve, reject) => {
            db.all(categoryQuery.get,[id], (err, data) => {
                if(err) return reject(err);
                resolve(data)
            })
        })
    }
    static Create (newCategory) {
        return new Promise((resolve, reject) => {
            db.all(categoryQuery.create, [newCategory],(err) => {
                if(err) return reject(err);
                resolve()
            })
        })
    }

    static Update (editCategory) {
        return new Promise((resolve, reject) => {
            db.all(categoryQuery.update, editCategory ,  (err) => {
                if(err) return reject(err);
                resolve()
            })
        })
    }

    static Delete (id) {
        return new Promise((resolve, reject) => {
            db.all(categoryQuery.delete, [id], (err, data) => {
                if(err) return reject(err);
                resolve()
            })
        })
    }
    
 }