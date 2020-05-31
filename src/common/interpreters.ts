import { StringInterpreter, IMaterial, IWarehouse } from "./types";
import Material from "../components/material/materialModel";


//splits can be replaced with regex for more sophisticated handling
export class MaterialInterpreter implements StringInterpreter<IMaterial> {
    interpret(context: string): IMaterial {
        let splittedInput = context.split(';');

        if (splittedInput.length < 2) {
            throw new Error(`Wrong input: ${context}`);
        }

        let materialId = splittedInput[1];
        let materialName = splittedInput[0];

        return (new Material(materialId, materialName));
    }
}


export class WarehouseInterpreter implements StringInterpreter<Array<{ warehouseName: string, quantity: number }>> {
    interpret(context: string): { warehouseName: string; quantity: number; }[] {
        let warehousesInput = context.split(';')[2];

        if (warehousesInput == null) {
            throw new Error(`Wrong input: ${context}`);
        }

        let warehouseList = new Array<{ warehouseName: string, quantity: number }>();
        warehousesInput.split('|').forEach(whString => {
            let whNameAndQuantity = whString.split(',');
            warehouseList.push({ warehouseName: whNameAndQuantity[0], quantity: Number(whNameAndQuantity[1]) })
        })

        return warehouseList;
    }
}

