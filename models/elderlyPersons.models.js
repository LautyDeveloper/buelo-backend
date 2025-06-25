import pool from '../database/connection.js';

export const getAllPersonasMayores = async () => {
    const [rows] = await pool.query(`
      SELECT BIN_TO_UUID(id) AS id, nombre, edad, dni, numero_tramite, obra_social, numero_afiliado, cantidad_familiares 
      FROM PersonasMayores
    `);
    return rows;
};


export const getPersonaMayorById = async (id) => {
  const [rows] = await pool.query('SELECT BIN_TO_UUID(id) AS id, nombre, edad, dni, numero_tramite, obra_social, numero_afiliado, cantidad_familiares FROM PersonasMayores WHERE id = UUID_TO_BIN(?)', [id]);
  return rows[0];
};

export const createPersonaMayor = async (data) => {
  const { nombre, edad, dni, numero_tramite, obra_social, numero_afiliado, cantidad_familiares } = data;
  const [result] = await pool.query(
    `INSERT INTO PersonasMayores (id, nombre, edad, dni, numero_tramite, obra_social, numero_afiliado, cantidad_familiares)
     VALUES (UUID_TO_BIN(UUID()), ?, ?, ?, ?, ?, ?, ?)`,
    [nombre, edad, dni, numero_tramite, obra_social, numero_afiliado, cantidad_familiares]
  );
  return result;
};

export const deletePersonaMayor = async (id) => {
  const [result] = await pool.query('DELETE FROM PersonasMayores WHERE id = UUID_TO_BIN(?)', [id]);
  return result;
};
