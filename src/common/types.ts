export abstract class StringInterpreter<T>
{
    abstract interpret(context: string): T
}

export interface IMaterial {
    id: string | number,
    name: string
}

export interface IWarehouse {
    name: string,
    storageItemsQuantity: { [materialId: string]: number }
    
    addItemToStorage(item: IMaterial, quantity: number): void
}

export interface IWarehouseSummary{
    name: string,
    totalQuantity: number
    materials: Array<{materialId: string | number, quantity: number }>
}
