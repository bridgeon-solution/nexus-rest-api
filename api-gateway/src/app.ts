import express from 'express';
import userRoutes from './routes/userRoutes';
import leaveRoutes from './routes/leaveRoutes';


const app = express();

app.use('/user', userRoutes);
app.use('/leave', leaveRoutes);

const PORT = process.env.PORT || 4008;
app.listen(PORT, () => {
    console.log(`/user/employees/${process.env.USER_SERVICE_URL}/api/v1/employees`);
    
    console.log(`API Gateway is running on port ${PORT}`);
});