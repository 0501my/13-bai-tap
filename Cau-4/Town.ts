import {Person} from "./Person";
import {FamilyManage} from "./FamilyManage";
import {Family} from "./Family";
import {PersonManage} from "./PersonManage";

let input = require('readline-sync');
let choice = -1

function main() {
    do {
        showMenu()
        choice = +input.question('lua chon cua ban : ')

        switch (choice) {
            case 1 :
                managePerson();
                break;
            case 2:
                manageFamily();
                break;
        }

    } while (choice !== 0)
}

main()

function showMenu() {
    let menu = `
1. Quan ly nguoi
2. Quan ly ho gia dinh
0. Thoat`
    console.log(menu)
}

function managePerson() {

    do {
        showMenuPerson()
        choice = +input.question(`nhap lua chon cua ban : `)
        switch (choice) {
            case 1:
                addPerson();
                break;
            case 2:
                showPerson();
                break;
            case 3:
                deletePerson();
                break;
            case 4:
                findPerson();
        }
    } while (choice !== 0)
}

function showMenuPerson() {
    let menu = `
    1. Them nguoi
    2. Hien thi danh sach nguoi
    3. Xoa nguoi
    4. Tim nguoi`
    console.log(menu)
}

function addPerson() {
    let name = input.question(` nhap ten : `);
    let age = +input.question(`nhap tuoi : `)
    let job = input.question(`nhap cong viec : `)
    let passport = input.question(` nhap chung minh nhan dan : `)
    let person = new Person(name, age, job, passport)
    PersonManage.addPerson(person)
}

function showPerson() {
    console.log(`---------Sau Khi thêm người ---------`)
    console.table(PersonManage.displayPerson())
}

function findPerson() {
    console.log(`--------------Sau Khi tìm------`)
    let fullName = input.question(`nhập tên cần tìm`)
    console.log(PersonManage.findPerson(fullName))
}

function deletePerson() {
    let idDelete = input.question(`nhap ten muon xoa`)
    PersonManage.deletePerson(idDelete)
}

function manageFamily() {
    do {
        showMenuFamily()
        choice = +input.question(`nhap lua chon cua ban : `)
        switch (choice) {
            case 1:
                addFamily();
                break;
            case 2:
                showFamily();
                break;
            case 3:
                deleteFamily();
                break;
            case 4:
                findFamily();
        }
    } while (choice !== 0)
}

function showMenuFamily() {
    let menu = `
    1. Them gia dinh
    2. Hien thi danh sach gia dinh
    3. Xoa gia dinh
    4. Tim gia dinh`
    console.log(menu)
}

function addFamily() {
    let name = input.question(` nhap ten : `);
    let age = +input.question(`nhap tuoi : `)
    let job = input.question(`nhap cong viec : `)
    let passport = +input.question(` nhap chung minh nhan dan : `)
    let address = input.question(` nhap dia chi : `);
    let member = +input.question(`nhap so thanh vien : `)
    let family = new Family(name, age, job, passport, address, member)
    FamilyManage.addFamily(family)
}

function showFamily() {
    console.log(`---------Sau Khi thêm người ---------`)
    console.table(FamilyManage.displayFamily())
}

function findFamily() {
    console.log(`--------------Sau Khi tìm------`)
    let fullName = input.question(`nhap ten can tim : `)
    console.log(FamilyManage.findFamily(fullName))
}

function deleteFamily() {
    let idDelete = input.question(`nhap gia dinh muon xoa : `)
    FamilyManage.deleteFamily(idDelete)
}
