import {Person} from "./Person";

export class Family extends Person{
    private _address : string;
    private _member : number


    constructor(name: string, age: number, job: string, passport: number, address: string, member: number) {
        super(name, age, job, passport);
        this._address = address;
        this._member = member;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get member(): number {
        return this._member;
    }

    set member(value: number) {
        this._member = value;
    }
}