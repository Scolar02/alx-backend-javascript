import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const students = JSON.parse(data);
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};
