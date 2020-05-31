import { injectable } from "tsyringe";
import WarehouseService from "../../components/warehouse/warehouseService";
import { IWarehouseSummary } from "../../common/types";


@injectable()
export default class warehouseController {
    constructor(private _warehouseService: WarehouseService) { }

    async allocateMaterials(input: string): Promise<void> {
        await this._warehouseService.allocateMaterialsToWarehousesFromStringAsync(input);
    }

    async getWarehousesSummary(): Promise<Array<IWarehouseSummary>> {
        let result = await this._warehouseService.getWarehousesSummary();
        result.forEach(x=>{
            x.materials.sort((a,b)=> {
                return a.materialId > b.materialId ? 1 : -1
            });
        })
        result.sort((a, b) => {
            return (a.totalQuantity > b.totalQuantity) ? -1 :
                (a.totalQuantity < b.totalQuantity) ? 1 :
                    (a.name > b.name) ? -1 : 1;
        });
        return result;
    }

}
