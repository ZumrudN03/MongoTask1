import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './src/router/UserRouter.js';

const app = express()
const port = 3100
app.use(express.json())

app.use("/", userRouter)


mongoose.connect('mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

