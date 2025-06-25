import * as personasMayoresModel from '../models/elderlyPersons.models.js';

export const getAllPersonasMayores = async (req, res) => {
  try {
    const personas = await personasMayoresModel.getAllPersonasMayores();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las personas mayores' });
  }
};

export const getPersonaMayorById = async (req, res) => {
  try {
    const persona = await personasMayoresModel.getPersonaMayorById(req.params.id);
    if (!persona) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la persona mayor' });
  }
};

export const createPersonaMayor = async (req, res) => {
  try {
    const result = await personasMayoresModel.createPersonaMayor(req.body);
    res.status(201).json({ message: 'Persona mayor creada', insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la persona mayor' });
  }
};

export const deletePersonaMayor = async (req, res) => {
  try {
    const result = await personasMayoresModel.deletePersonaMayor(req.params.id);
    res.json({ message: 'Persona mayor eliminada', affectedRows: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la persona mayor' });
  }
};
