import {Candidates} from "./Candidate";

export class CandidateB extends Candidates{
    private _math : string = "môn toÁn"
    private _chemistry :string = "môn hóa"
    private _biology : string = 'môn sinh'

    constructor(Id: number, fullName: string, address: string, priority: number, math: string, chemistry: string, biology: string) {
        super(Id, fullName, address, priority);
        this._math = math;
        this._chemistry = chemistry;
        this._biology = biology;
    }

    get math(): string {
        return this._math;
    }

    get chemistry(): string {
        return this._chemistry;
    }

    get biology(): string {
        return this._biology;
    }
}