import jwt from "jsonwebtoken";

const generateToken = ((id: number, role: string) => {
  return jwt.sign({ id, role }, `${process.env.JWT_SECRET_STR}`, { expiresIn: 60 * 60 * 24 })
});

export default generateToken