import { Request, Response } from "express";
import { Admin } from "../../models/adminInterface";
import { adminLoginSrvc } from "../../services/adminServices";
import generateToken from '../../../../common/utils/jsonwebtoken'

const adminLogin = async (req: Request, res: Response) => {
  try {
    const admin: Admin = req.body
    if (!admin.username || !admin.password) {
      res.status(400).json({
        status: "failed",
        message: 'Missing username or password'
      })
    } else {
      const adminlogin: Admin = await adminLoginSrvc(admin)
      const token = await generateToken(adminlogin.id)
      if (adminlogin) {
        res.status(200).json({
          status: "success",
          token: token,
          data: adminlogin
        })
      }
    }
  } catch (error) {
    res.status(500).json({
      message: `internal server error ${error}`
    })
  }
}

export {
  adminLogin
}