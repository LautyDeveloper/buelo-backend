import * as medicacionesModel from '../models/medicaciones.models.js';

export const getMedicacionesByPersona = async (req, res) => {
  const personaId = req.query.personaId;

  if (!personaId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }
  try {
    const medicaciones = await medicacionesModel.getMedicacionesByPersonaMayor(personaId);
    res.json(medicaciones);
  } catch (error) {
    console.error('Error al obtener las medicaciones', error.message);
    res.status(500).json({ error: 'Error al obtener las medicaciones' });
  }
};

export const postMedicacion = async (req, res) => {
  const nuevaMedicacion = req.body;
  try {
    const result = await medicacionesModel.createMedicacion(nuevaMedicacion);
    res.status(201).json({ message: 'Medicacion creada con éxito', insertId: result.insertId });
  } catch (error) {
    console.error('Error al crear la medicacion:', error.message);
    res.status(500).json({ error: 'Error al crear la medicacion' });
  }
};
