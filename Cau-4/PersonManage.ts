import {Person} from "./Person";
export class PersonManage {
    static listPerson: Person[] = []

    static addPerson(Person: Person): void {
        PersonManage.listPerson.push(Person)
    }

    static displayPerson(): PersonManage {
        return this.listPerson
    }

    static findPerson(passport: string) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if (this.listPerson[i].passport === +passport) {
                return this.listPerson[i]
            }
        }
        return -1
    }

    static deletePerson(fullName: string):void {
        let index = this.findPerson(fullName);
        if (index === undefined) {
            console.log('Không tìm thấy người này!')
        } else {
            this.listPerson.splice(+index, 1);
            console.log('Xóa thành công!')
            console.log(`--------Sau khi Xoa-------`)
            console.table(PersonManage.displayPerson())
        }
    }
}