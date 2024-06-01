import bcrypt from 'bcrypt'

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
  return await bcrypt.hash(password, salt);
}
export default hashPassword