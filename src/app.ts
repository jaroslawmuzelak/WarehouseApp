import "reflect-metadata";
import express from "express";
const app = express();
const port = 8080;

let waregouseRouter = require ('./api/routes/warehouseRoutes');
let homeRouter = require ('./api/routes/homeRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/warehouse', waregouseRouter)
app.use('/', homeRouter);
app.listen(port, () =>console.log(`App listening at http://localhost:${port}`))

