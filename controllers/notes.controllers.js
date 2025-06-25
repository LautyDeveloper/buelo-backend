import * as notesModel from '../models/notes.models.js';
export const getNotesByPerson = async (req, res) => {
  const personId = req.query.personId;

    if (!personId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }
  try {
    const notes = await notesModel.getNotesByPersonId(personId);
    res.json(notes);
  } catch (error) {
    console.error('Error al obtener las notas', error.message);
    res.status(500).json({ error: 'Error al obtener las notas' });
  }
};

export const postNote = async (req, res) => {
  const nuevaNota = req.body;
  try {
    const result = await notesModel.createNota(nuevaNota);
    res.status(201).json({ message: 'Nota creada con éxito', insertId: result.insertId });
  } catch (error) {
    console.error('Error al crear nota:', error.message);
    res.status(500).json({ error: 'Error al crear la nota' });
  }
};
