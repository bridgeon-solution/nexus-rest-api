import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/asyncErrorHandler";
import CustomError from "../utils/customErrorHandler";
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'

declare global {
  namespace Express {
    interface Request {
      user: number;
    }
  }
}

dotenv.config({ path: path.join(__dirname, '../.env') })

const verifyRole = (allowedRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const testToken: string = req.headers.authorization // Read the token
    let token: string
    if (testToken && testToken.startsWith('Bearer')) {
      token = testToken.split(' ')[1]
    }

    if (!token) {
      throw new CustomError("Unauthorized Access", 401)
      // validating the token
    }
    // decode the token

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_STR)

    const decodedPayload: JwtPayload = decodedToken as JwtPayload

    req.user = decodedPayload.id

    if (!allowedRoles.includes(decodedPayload.role)) {
      return res.status(403).json({
        status: 'forbidden',
        message: 'you dont have access to this route'
      })
    }

    next();
  })
}


export default verifyRole
