import { IWarehouse, IWarehouseSummary } from "./types";

export abstract class Mapper {
    static Map(warehouse: IWarehouse): IWarehouseSummary {
        let quantitySum = 0;
        let materials = Object.keys(warehouse.storageItemsQuantity).map(key => {
            quantitySum += warehouse.storageItemsQuantity[key];
            return {
                materialId: key,
                quantity: warehouse.storageItemsQuantity[key]
            }
        })

        return {
            name: warehouse.name,
            materials: materials,
            totalQuantity: quantitySum
        }
    }
}