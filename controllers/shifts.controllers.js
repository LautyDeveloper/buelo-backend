import * as ShiftModel from '../models/shifts.models.js';


export const getShift = async (req, res) => {
  try {
    const shift = await ShiftModel.getShiftById(req.params.id);
    if (!shift) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json(shift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export async function getShiftsByPerson(req, res) {
  const personId = req.query.personId;

  if (!personId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }

  try {
    const shifts = await ShiftModel.getShiftsByPersonId(personId);
    res.json(shifts);
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export const postShift = async (req, res) => {
  try {
        console.log("Cuerpo recibido:", req.body); // 👈 LOGGUEÁ ESTO

    const newShift = await ShiftModel.createShift(req.body);
    res.status(201).json({ message: 'Turno creado', insertId: newShift.insertId });
  } catch (err) {
        console.error("Error al crear turno:", err); // 👈 también loggueá esto

    res.status(500).json({ error: err.message });
  }
};

export const deleteShift = async (req, res) => {
  try {
    await ShiftModel.deleteTurno(req.params.id);
    res.json({ message: 'Turno eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
