import express from 'express'
const app = express();
const PORT = process.env.PORT || 3000;
import { DbConnection } from './db/DbConfig';
import { StartUp } from './utils/StartUp'

StartUp.ConfigureRoutes(app)


DbConnection.connect()
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
