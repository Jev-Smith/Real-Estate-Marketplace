import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected");

    const port = 3000;
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}).catch(() => {
    console.log("Database not connected");
});

