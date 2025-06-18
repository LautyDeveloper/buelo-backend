import pool from '../database/connection.js';

export const getAllTurnos = async () => {
  const [rows] = await pool.query(`
    SELECT 
      BIN_TO_UUID(id) AS id,
      BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
      dia,
      hora,
      especialidad,
      profesional,
      lugar
    FROM Turnos
  `);
  return rows;
};

export const getTurnosPorPersonaId = async (personaId) =>{
  const [rows] = await pool.query(
    `
    SELECT 
      BIN_TO_UUID(id) AS id,
      especialidad,
      profesional,
      lugar,
      dia,
      hora
    FROM Turnos
    WHERE persona_mayor_id = UUID_TO_BIN(?)
    ORDER BY dia ASC, hora ASC
    `,
    [personaId]
  );

  return rows;
}

export const getTurnoById = async (id) => {
  const [rows] = await pool.query(`
    SELECT 
      BIN_TO_UUID(id) AS id,
      BIN_TO_UUID(persona_mayor_id) AS persona_mayor_id,
      dia,
      hora,
      especialidad,
      profesional,
      lugar
    FROM Turnos
    WHERE id = UUID_TO_BIN(?)
  `, [id]);
  return rows[0];
};

export const createTurno = async (turno) => {
  const { persona_mayor_id, dia, hora, especialidad, profesional, lugar } = turno;
  const [result] = await pool.query(`
    INSERT INTO Turnos (
      id,
      persona_mayor_id,
      dia,
      hora,
      especialidad,
      profesional,
      lugar
    ) VALUES (
      UUID_TO_BIN(UUID()), UUID_TO_BIN(?), ?, ?, ?, ?, ?
    )
  `, [persona_mayor_id, dia, hora, especialidad, profesional, lugar]);

  return result;
};

export const deleteTurno = async (id) => {
  const [result] = await pool.query(`
    DELETE FROM Turnos
    WHERE id = UUID_TO_BIN(?)
  `, [id]);
  return result;
};
