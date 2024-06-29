import express from "express";
import path from 'path'

const app = express();
const PORT = process.env.PORT || 2024


app.use("/info", (req, res) => {
    res.send('Hello, World!');
})

app.use(express.static(path.join(process.cwd(), './client/dist')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), './client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on Port : ${PORT}`)
})