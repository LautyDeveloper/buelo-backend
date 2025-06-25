import * as medicationsModel from '../models/medicaciones.models.js';

export const getMedicationsByPerson = async (req, res) => {
  const personId = req.query.personId;

  if (!personId) {
    return res.status(400).json({ error: "Falta el parámetro personaId" });
  }
  try {
    const medications = await medicationsModel.getMedicationsByPersonId(personId);
    res.json(medications);
  } catch (error) {
    console.error('Error al obtener las medicaciones', error.message);
    res.status(500).json({ error: 'Error al obtener las medicaciones' });
  }
};

export const postMedication = async (req, res) => {
  const newMedication = req.body;
  try {
    const result = await medicationsModel.createMedication(newMedication);
    res.status(201).json({ message: 'Medicacion creada con éxito', insertId: result.insertId });
  } catch (error) {
    console.error('Error al crear la medicacion:', error.message);
    res.status(500).json({ error: 'Error al crear la medicacion' });
  }
};
