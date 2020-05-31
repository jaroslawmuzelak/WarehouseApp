import { IMaterial } from "../../common/types";

export default class MaterialRepository {
    private _materials = new Array<IMaterial>();
    constructor() { }

    addMaterialsIfNotExsit(materials: IMaterial | Array<IMaterial>): void {
        if (Array.isArray(materials)) {
            materials.forEach(item => this.addIfNotExists(item));
        } else {
            this.addIfNotExists(materials);
        }
    }

    private addIfNotExists(material: IMaterial): void {
        if (!this._materials.includes(material)) {
            this._materials.push(material);
        }
    }
}