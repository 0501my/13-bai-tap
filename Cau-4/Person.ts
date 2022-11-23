export class Person{
    private _fullName : string;
    private _age : number;
    private _job : string;
    private _passport : number;


    constructor(fullName: string, age: number, job: string, passport: number) {
        this._fullName = fullName;
        this._age = age;
        this._job = job;
        this._passport = passport;
    }

    get fullName(): string {
        return this._fullName;
    }

    get age(): number {
        return this._age;
    }

    get job(): string {
        return this._job;
    }

    get passport(): number {
        return this._passport;
    }
}