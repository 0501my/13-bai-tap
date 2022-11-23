import {Candidates} from "./Candidate";
export class Candidate {
    static listCandidate: Candidates[] = []

    static add(candidate: Candidates): void {
        Candidate.listCandidate.push(candidate)
    }

    static show(): Candidate {
        return this.listCandidate;
    }

    static find(id: number) {
        for (let i = 0; i < this.listCandidate.length; i++) {
            if (this.listCandidate[i].Id === +id) {
                return this.listCandidate[i]
            }
        }
    }
}
let input = require('readline-sync');
let choice = -1

function main() {
    do {
        showMenu()
        choice = +input.question(' moi ban lua chon : ')

        switch (choice) {
            case 1 :
                addCandidate();
                break;
            case 2:
                showCandidate();
                break;
            case 3 :
                findCandidate();
                break;
        }

    } while (choice !== 0)

}

main()

function showMenu() {
    let menu = `
1. thêm thí sinh
2. hiển thị thí sinh
3. tìm thí sinh
0. Thoát`
    console.log(menu)
}



function addCandidate() {
    let id = +input.question(`nhap id : `)
    let fullName = input.question(`nhap ten : `)
    let address = input.question(`nhap dia chi : `)
    let priority = input.question(`nhap khoi hoc : `)
    let candidate = new Candidates(id, fullName, address, priority)
    Candidate.add(candidate)
}

function showCandidate() {
    console.log(`--------Sau khi thêm------`)
    console.table(Candidate.show())
}

function findCandidate() {
    console.log(`--------------Sau Khi tìm------`)
    let id = +input.question(`nhap id can tim : `)
    console.log(Candidate.find(id))
}
