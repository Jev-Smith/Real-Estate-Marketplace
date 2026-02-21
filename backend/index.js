import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express();
dotenv.config();
app.use(express.json());

//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//middleware
app.use((err, _, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server eror";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected");

    const port = 3000;
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}).catch(() => {
    console.log("Database not connected");
});

