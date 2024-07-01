import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, '../../.env') });

const userRoutes = Router();

userRoutes.use('/employees/', createProxyMiddleware({ target: `${process.env.USER_SERVICE_URL}/api/v1/employees`, changeOrigin: true }));
userRoutes.use('/founders/', createProxyMiddleware({ target: `${process.env.USER_SERVICE_URL}/api/v1/founders`, changeOrigin: true }));
userRoutes.use('/departments', createProxyMiddleware({ target: `${process.env.USER_SERVICE_URL}/api/v1/departments`, changeOrigin: true }));
userRoutes.use('/users', createProxyMiddleware({ target: `${process.env.USER_SERVICE_URL}/api/v1/users`, changeOrigin: true }));

export default userRoutes;
