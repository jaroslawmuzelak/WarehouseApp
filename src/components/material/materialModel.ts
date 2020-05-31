import { IMaterial } from "../../common/types";

export default class Material implements IMaterial {
    constructor(id: string | number, name: string) {
        this._id = id;
        this._name = name;
    }

    public readonly _id: string | number;
    public _name: string

    get id(): string | number {
        return this._id;
    }

    get name(): string {
        return this._name
    }
}


