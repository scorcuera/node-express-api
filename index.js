import express from 'express';
import bodyParser from 'body-parser';
import router from './router/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", router);

app.get("/", (req, res) => {
    res.send(" ¡Hola Andalucía !");
})

app.listen(PORT, () => console.log(`Server listening on port: http://localhost:${PORT}`));