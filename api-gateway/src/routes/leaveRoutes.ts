import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const leaveRoutes = Router();

leaveRoutes.use('/', createProxyMiddleware({ target: `${process.env.LEAVE_SERVICE_URL}/api/v1/leaves`, changeOrigin: true }));


export default leaveRoutes;
