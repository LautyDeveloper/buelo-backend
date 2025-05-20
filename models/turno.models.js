import  pool  from '../database/connection.js'


export const getAllTurnos = async () => {
  const [rows] = await pool.query('SELECT * FROM Turnos');
  return rows;
};

export const getTurnoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM Turnos WHERE id = ?', [id]);
  return rows[0];
};

export const createTurno = async (turno) => {
  const { persona_mayor_id, dia, hora, especialidad, profesional, lugar } = turno;
  const [result] = await pool.query(
    'INSERT INTO Turnos (id, persona_mayor_id, dia, hora, especialidad, profesional, lugar) VALUES (UUID_TO_BIN(UUID()), ?, ?, ?, ?, ?, ?)',
    [persona_mayor_id, dia, hora, especialidad, profesional, lugar]
  );
  return result;
};

export const deleteTurno = async (id) => {
  const [result] = await pool.query('DELETE FROM Turnos WHERE id = ?', [id]);
  return result;
};
