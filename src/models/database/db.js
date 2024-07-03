import sqlite3 from 'sqlite3'

sqlite3.verbose();

// Ruta y nombre del archivo de la base de datos
const dbPath = './src/models/database/tienda.db';

// Crear una nueva instancia de la base de datos SQLite
const db = new sqlite3.Database(dbPath ,(err) => {
  if (err) {
    console.error('Error al abrir la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos SQLite');
  }
});


/*db.run("INSERT INTO productos (producto, categoria_id, existencia_actual, precio) VALUES (?, ?, ?, ?)", ["Delineador de Ojos Negro", 2, 22, 9.99]);*/









export default db;