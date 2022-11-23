import {Candidates} from "./Candidate";

export class CandidateC extends Candidates{
    private _Literature : string = "môn văn"
   private _History :string = "môn sử"
   private _Geography: string = "môn địa"

    constructor(Id: number, fullName: string, address: string, priority: number, Literature: string, History: string, Geography: string) {
        super(Id, fullName, address, priority);
        this._Literature = Literature;
        this._History = History;
        this._Geography = Geography;
    }

    get Literature(): string {
        return this._Literature;
    }

    get History(): string {
        return this._History;
    }

    get Geography(): string {
        return this._Geography;
    }
}