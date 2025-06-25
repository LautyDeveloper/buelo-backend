import pool from '../database/connection.js';

export const getMedicationsByPersonId = async (personId) => {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(id) AS id,
            BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
            nombre_medicacion,
            frecuencia,
            dosis,
            horarios
     FROM Medicaciones
     WHERE persona_mayor_id = UUID_TO_BIN(?)`,
    [personId]
  );
  return rows;
};

export const createMedication = async ({ persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios }) => {
  const [result] = await pool.query(
    `INSERT INTO Medicaciones (id, persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios)
     VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(?), ?, ?, ?, ?)`,
    [persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios]
  );
  return result;
};
