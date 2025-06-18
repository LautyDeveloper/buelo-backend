import * as TurnoModel from '../models/turno.models.js';

export const getTurnos = async (req, res) => {
  try {
    const turnos = await TurnoModel.getAllTurnos();
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTurno = async (req, res) => {
  try {
    const turno = await TurnoModel.getTurnoById(req.params.id);
    if (!turno) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json(turno);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export async function getTurnosByPersona(req, res) {
  const personaId = req.query.personaId;

  if (!personaId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }

  try {
    const turnos = await TurnoModel.getTurnosPorPersonaId(personaId);
    res.json(turnos);
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export const postTurno = async (req, res) => {
  try {
    const nuevoTurno = await TurnoModel.createTurno(req.body);
    res.status(201).json({ message: 'Turno creado', insertId: nuevoTurno.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    await TurnoModel.deleteTurno(req.params.id);
    res.json({ message: 'Turno eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
