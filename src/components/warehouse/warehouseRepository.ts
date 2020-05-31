import { IWarehouse } from "../../common/types";

export default class WarehouseRepository {
    private _warehouses: Array<IWarehouse> = new Array<IWarehouse>();

    getWarehouse(name: string): IWarehouse | undefined {
        return this._warehouses.find(x => x.name == name);
    }

    getAll() {
        return this._warehouses;
    }

    saveOrAddWarehouse(warehouse: IWarehouse) {
        let existingWarehouse = this._warehouses.find(x => x.name == warehouse.name);

        if (existingWarehouse == undefined) {
            this._warehouses.push(warehouse);
        } else {
            this._warehouses[this._warehouses.indexOf(existingWarehouse)] = warehouse;
        }

    }
}