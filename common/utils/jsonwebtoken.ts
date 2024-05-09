import jwt from 'jsonwebtoken'


const generateToken = ((id: number) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET_STR}`, { expiresIn: 60 * 60 * 24 })
})

export default generateToken