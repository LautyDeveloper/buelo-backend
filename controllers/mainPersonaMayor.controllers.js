// controllers/personasMayoresController.js
import {
  getNotesByPersonId,
} from "../models/notas.models.js";
import {
  getShiftsByPersonId,
} from "../models/turno.models.js";
import {
  getMedicationsByPersonId,
} from "../models/medicaciones.models.js";

export async function getResumenPersonaMayor(req, res) {
  try {
  const personaId = req.query.personaId;

    if (!personaId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }

    const [turnos, notas, medicaciones] = await Promise.all([
      getShiftsByPersonId(personaId),
      getNotesByPersonId(personaId),
      getMedicationsByPersonId(personaId),
    ]);

    res.json({ turnos, notas, medicaciones });
  } catch (error) {
    console.error("Error al obtener el resumen:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
