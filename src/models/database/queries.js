export const productQuery = {
    alls : 'select * from categorias as c inner join productos as p on c.id = p.categoria_id ',
    get : 'select * from categorias as c inner join productos as p on c.id = p.categoria_id where p.id = ? ',
    create : 'insert into productos (producto, categoria_id, existencia_actual, precio) values (?, ?, ?, ?)',
    update : 'update productos set producto = ?, categoria_id = ?, existencia_actual = ?, precio = ? WHERE id = ?',
    delete : 'delete from productos where id = ?'
}

export const categoryQuery = {
    alls : 'select  * from categorias',
    get : 'select * from categorias where id = ?',
    create : 'insert into categorias (categoria) values (?)',
    update : 'update categorias set categoria = ? where id = ?',
    delete : 'delete from categorias where id = ?'
}