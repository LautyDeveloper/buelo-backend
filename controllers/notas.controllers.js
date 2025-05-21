import * as notasModel from '../models/notas.models.js';

export const getNotas = async (req, res) => {
  try {
    const notas = await notasModel.getAllNotas();
    res.json(notas);
  } catch (error) {
    console.error('Error al obtener las notas:', error.message);
    res.status(500).json({ error: 'Error al obtener las notas' });
  }
};

export const getNotasByPersona = async (req, res) => {
  const { id } = req.params;
  try {
    const notas = await notasModel.getNotasByPersonaMayor(id);
    res.json(notas);
  } catch (error) {
    console.error('Error al obtener las notas por persona mayor:', error.message);
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
