import express from "express"
import turnoRoutes from "./routes/turno.routes.js"
import pool from "./database/connection.js"
import personasMayoresRoutes from './routes/personasMayores.routes.js';
import notasRoutes from './routes/notas.routes.js';
import medicacionesRoutes from './routes/medicaciones.routes.js';
import mainRoutes from './routes/mainPersonaMayor.routes.js';
import { corsMiddleware } from "./middlewares/cors.js";


const app = express();
app.use(corsMiddleware())

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
app.use('/shifts', turnoRoutes);
app.use('/elderly-persons', personasMayoresRoutes);
app.use('/notes', notasRoutes);
app.use('/medications', medicacionesRoutes);
app.use('/summary', mainRoutes);


app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
