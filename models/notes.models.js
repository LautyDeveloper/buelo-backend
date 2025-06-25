import pool from '../database/connection.js';

export const getNotesByPersonId = async (personId) => {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(id) AS id,
            BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
            BIN_TO_UUID(familiar_id) AS familiar_id,
            titulo,
            fecha_hora,
            cuerpo
     FROM Notas
     WHERE persona_mayor_id = UUID_TO_BIN(?)`,
    [personId]
  );
  return rows;
};

export const createNote = async ({ persona_mayor_id, familiar_id, titulo, cuerpo }) => {
  const [result] = await pool.query(
    `INSERT INTO Notas (id, persona_mayor_id, familiar_id, titulo, cuerpo)
     VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(?), UUID_TO_BIN(?), ?, ?)`,
    [persona_mayor_id, familiar_id, titulo, cuerpo]
  );
  return result;
};
