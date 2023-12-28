import express from 'express';
import mongoose, { Schema } from 'mongoose';

const app = express()
const port = 3100
app.use(express.json())


const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    isMarried: Boolean
});

const UserModel = mongoose.model('Users', userSchema);

app.get('/', async (req, res) => {
    const user = await UserModel.find({})
    res.send(user)
})

app.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id);
    const user = await UserModel.findById(id)
    res.send(user)
})

app.post('/', async (req, res) => {
    const { username, email, password, age, isMarried } = req.body;
    const newUser = new UserModel({ username, email, password, age, isMarried });
    await newUser.save();
    res.send('Başarıyla yüklendi');
});



app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password, age, isMarried } = req.body;
    const user = await UserModel.findByIdAndUpdate(id, { username, email, password, age, isMarried });
    res.send(user);
});


app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    res.send(user);
});

mongoose.connect('mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

