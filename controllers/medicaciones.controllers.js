import * as medicacionesModel from '../models/medicaciones.models.js';

export const getMedicaciones = async (req, res) => {
  try {
    const medicaciones = await medicacionesModel.getAllMedicaciones();
    res.json(medicaciones);
  } catch (error) {
    console.error('Error al obtener las medicaciones:', error.message);
    res.status(500).json({ error: 'Error al obtener las medicaciones' });
  }
};

export const getMedicacionesByPersona = async (req, res) => {
  const { id } = req.params;
  try {
    const medicaciones = await medicacionesModel.getMedicacionesByPersonaMayor(id);
    res.json(medicaciones);
  } catch (error) {
    console.error('Error al obtener las medicaciones por persona mayor:', error.message);
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
