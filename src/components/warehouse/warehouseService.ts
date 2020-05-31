import WarehouseRepository from "./warehouseRepository";
import MaterialRepository from "../material/materialRepository";
import { IWarehouseSummary } from "../../common/types";
import { MaterialInterpreter, WarehouseInterpreter } from "../../common/interpreters";
import Warehouse from "./warehouseModel";
import { injectable } from "tsyringe";
import { Mapper } from "../../common/mapper";


@injectable()
export default class WarehouseService {
    constructor(
        private _warehouseRepository: WarehouseRepository,
        private _materialRepository: MaterialRepository,
        private _materialInterpreter: MaterialInterpreter,
        private _warehouseInterpreter: WarehouseInterpreter) {
    }


    async allocateMaterialsToWarehousesFromStringAsync(input: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.processInputString(input);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    };

    async getWarehousesSummary(): Promise<Array<IWarehouseSummary>> {
        return new Promise((resolve, reject) => {
            try {
                let warehouses = this._warehouseRepository.getAll().map(warehouse => {
                    return Mapper.Map(warehouse);
                })
                resolve(warehouses);
            } catch (err) {
                reject(err);
            }

        })

    }

    private processInputString(input: string) {
        input.split(/\r?\n/).forEach(row => {
            if (row.startsWith('#') || !row) {
                return;
            }
            try {
                let material = this._materialInterpreter.interpret(row);
                this._materialRepository.addMaterialsIfNotExsit(material);

                this._warehouseInterpreter.interpret(row).forEach(wh => {
                    let warehouse = this._warehouseRepository.getWarehouse(wh.warehouseName)
                    if (warehouse == undefined) {
                        warehouse = new Warehouse(wh.warehouseName);
                    }
                    warehouse.addItemToStorage(material, wh.quantity);
                    this._warehouseRepository.saveOrAddWarehouse(warehouse);
                });
            } catch (err) {
                console.log(err);
                return;
            }
        })
    }

}