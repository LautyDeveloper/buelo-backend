// controllers/personasMayoresController.js
import {
  getNotesByPersonId,
} from "../models/notes.models.js";
import {
  getShiftsByPersonId,
} from "../models/shifts.models.js";
import {
  getMedicationsByPersonId,
} from "../models/medications.models.js";

export async function getSummaryElderlyPerson(req, res) {
  try {
  const personId = req.query.personId;

    if (!personId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }

    const [shifts, notes, medications] = await Promise.all([
      getShiftsByPersonId(personId),
      getNotesByPersonId(personId),
      getMedicationsByPersonId(personId),
    ]);

    res.json({ shifts, notes, medications });
  } catch (error) {
    console.error("Error al obtener el resumen:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
