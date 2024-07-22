import express from 'express'
import createPermission from '../controllers/permissions/createPermission.controller'
import assignPermission from '../controllers/permissions/assignPermission.controller'
import getPermission from '../controllers/permissions/getPermissions.controller'
import getAllPermission from '../controllers/permissions/getAllPermissions.controller'

const permissionRouter = express.Router()

permissionRouter.post('/create', createPermission)
permissionRouter.put('/:employeeId/:permissionId', assignPermission)
permissionRouter.get('/:employeeId', getPermission)
permissionRouter.get('/', getAllPermission)
export default permissionRouter