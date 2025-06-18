import * as notasModel from '../models/notas.models.js';
export const getNotasByPersona = async (req, res) => {
  const personaId = req.query.personaId;

    if (!personaId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }
  try {
    const notas = await notasModel.getNotasByPersonaMayor(personaId);
    res.json(notas);
  } catch (error) {
    console.error('Error al obtener las notas', error.message);
    res.status(500).json({ error: 'Error al obtener las notas' });
  }
};

export const postNota = async (req, res) => {
  const nuevaNota = req.body;
  try {
    const result = await notasModel.createNota(nuevaNota);
    res.status(201).json({ message: 'Nota creada con éxito', insertId: result.insertId });
  } catch (error) {
    console.error('Error al crear nota:', error.message);
    res.status(500).json({ error: 'Error al crear la nota' });
  }
};
