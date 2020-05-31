import { IWarehouse, IMaterial } from "./../../common/types";

export default class Warehouse implements IWarehouse {
    constructor(name: string) {
        this._name = name;

    }

    _name: string;
    _storageItemsQuantity: { [key: string]: number } = {};

    get name() {
        return this._name;
    }

    get storageItemsQuantity() {
        return this._storageItemsQuantity;
    }

    addItemToStorage(item: IMaterial, quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity must be above 0.");
        }

        let currentItemQuantity = this._storageItemsQuantity[item.id];        
        this._storageItemsQuantity[item.id] = currentItemQuantity ? currentItemQuantity + quantity : quantity;
    };

}