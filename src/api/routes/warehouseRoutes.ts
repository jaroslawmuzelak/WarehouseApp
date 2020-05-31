import express from "express";
import { container } from "tsyringe";
import warehouseController from "../controller/warehouseController";

const controller = container.resolve(warehouseController);
let router = express.Router();

router.post('', async function (req, res) {
    let input = req.body["input"];
    res.send(await controller.allocateMaterials(input));
});

router.get('', async function(req, res){
    res.send(await controller.getWarehousesSummary());
});

export = router;