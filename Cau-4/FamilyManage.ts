import {Family} from "./Family";

export class FamilyManage {
    static listFamily: Family[] = []

    static addFamily(Family: Family): void {
        FamilyManage.listFamily.push(Family)
    }

    static displayFamily(): FamilyManage {
        let famIlys = [
            [`gia đình 1 :  1. fullName : hau , age : 27, job : ăn bám, passport : 1  +  \n +
            2.fullName : dai , age : 24, job : ăn bám, passport : 2  +  \n +
            3.fullName : vuong , age : 22, job : ăn bám, passport : 3  + \n +
            4.fullName : thinh , age : 15, job : ăn bám, passport : 4 ] + \n + 
            [gia đình 2 :   
             1.fullName : cao , age : 21, job : ăn bám, passport : 5 + \n +
             2.fullName : loc , age : 19, job : ăn bám, passport : 6`]
        ]
        console.log(famIlys)
        return this.listFamily
    }

    static findFamily(address: string) {
        for (let i = 0; i < this.listFamily.length; i++) {
            if (this.listFamily[i].address === address) {
                return this.listFamily[i]
            }
        }
        return -1
    }

    static deleteFamily(address: string): void {
        let index = this.findFamily(address);
        if (index === undefined) {
            console.log('Không tìm thấy gia đình này')
        } else {
            this.listFamily.splice(+index, 1);
            console.log('Xóa thành công!')
            console.log(`--------Sau khi Xóa-------`)
            console.table(FamilyManage.displayFamily())
        }
    }
}