import "reflect-metadata";
import express from "express";
const app = express();


let waregouseRouter = require ('./api/routes/warehouseRoutes');
let homeRouter = require ('./api/routes/homeRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/warehouse', waregouseRouter)
app.use('/', homeRouter);
app.listen(3000, () =>console.log(`App listening at http://localhost:3000`))
