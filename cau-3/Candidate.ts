export class Candidates {

    private _Id: number;
    private _fullName: string;
    private _address: string;
    private _priority: number

    constructor(Id: number, fullName: string, address: string, priority: number) {
        this._Id = Id;
        this._fullName = fullName;
        this._address = address;
        this._priority = priority;
    }


    get Id(): number {
        return this._Id;
    }

    get fullName(): string {
        return this._fullName;
    }

    get address(): string {
        return this._address;
    }

    get priority(): number {
        return this._priority;
    }
}
