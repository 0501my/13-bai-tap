import {Candidates} from "./Candidate";

export class CandidateA extends Candidates {
    private _math: string = 'môn toÁn'
    private _physic: string = 'môn lý'
    private _chemistry: string = "môn hóa"

    constructor(Id: number, fullName: string, address: string, priority: number, math: string, physic: string, chemistry: string) {
        super(Id, fullName, address, priority);
        this._math = math;
        this._physic = physic;
        this._chemistry = chemistry;
    }

    get math(): string {
        return this._math;
    }

    get physic(): string {
        return this._physic;
    }

    get chemistry(): string {
        return this._chemistry;
    }
}