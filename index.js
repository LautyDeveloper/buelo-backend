import express from "express"
import turnoRoutes from "./routes/turno.routes.js"
import pool from "./database/connection.js"
import personasMayoresRoutes from './routes/personasMayores.routes.js';
import notasRoutes from './routes/notas.routes.js';
import medicacionesRoutes from './routes/medicaciones.routes.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Verificación de conexión a la DB
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
    return;
  }
  console.log('✅ Conexión exitosa a la base de datos MySQL');
  connection.release();
});

// Rutas
app.use('/turnos', turnoRoutes);
app.use('/personas-mayores', personasMayoresRoutes);
app.use('/notas', notasRoutes);
app.use('/medicaciones', medicacionesRoutes);


app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
