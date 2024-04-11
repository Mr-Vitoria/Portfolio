import { Status } from "./status.js";

export class StatusList{
    statusList;
    statusTitleList;
    htmlObject;
    constructor(array, htmlObject){
        this.htmlObject = htmlObject;
        this.statusList = [];
        this.statusTitleList = [];

        for (let i = 0; i < array.length; i++) {
            let status = new Status(array[i].name, array[i].bgColor ?? "#11A1A6", array[i].percent);

            this.statusList.push(status);
            this.statusTitleList.push(array[i].name);
        }
    }

    render(){
        for (let i = 0; i < this.statusList.length; i++) {
            this.htmlObject.appendChild(this.statusList[i].render());
        }
        return this.htmlObject;
    }
}