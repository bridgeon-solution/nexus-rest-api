import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customErrorHandler';

const globalErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    stack: err.stack
  });
};

export default globalErrorHandler;
