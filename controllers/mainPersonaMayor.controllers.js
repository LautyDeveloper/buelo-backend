// controllers/personasMayoresController.js
import {
  getNotasByPersonaMayor,
} from "../models/notas.models.js";
import {
  getTurnosPorPersonaId,
} from "../models/turno.models.js";
import {
  getMedicacionesByPersonaMayor,
} from "../models/medicaciones.models.js";

export async function getResumenPersonaMayor(req, res) {
  try {
  const personaId = req.query.personaId;

    if (!personaId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }

    const [turnos, notas, medicaciones] = await Promise.all([
      getTurnosPorPersonaId(personaId),
      getNotasByPersonaMayor(personaId),
      getMedicacionesByPersonaMayor(personaId),
    ]);

    res.json({ turnos, notas, medicaciones });
  } catch (error) {
    console.error("Error al obtener el resumen:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
