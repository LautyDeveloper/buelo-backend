import pool from '../database/connection.js';

export const getAllMedicaciones = async () => {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(id) AS id,
            BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
            nombre_medicacion,
            frecuencia,
            dosis,
            horarios
     FROM Medicaciones`
  );
  return rows;
};

export const getMedicacionesByPersonaMayor = async (personaMayorId) => {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(id) AS id,
            BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
            nombre_medicacion,
            frecuencia,
            dosis,
            horarios
     FROM Medicaciones
     WHERE persona_mayor_id = UUID_TO_BIN(?)`,
    [personaMayorId]
  );
  return rows;
};

export const createMedicacion = async ({ persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios }) => {
  const [result] = await pool.query(
    `INSERT INTO Medicaciones (id, persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios)
     VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(?), ?, ?, ?, ?)`,
    [persona_mayor_id, nombre_medicacion, frecuencia, dosis, horarios]
  );
  return result;
};
