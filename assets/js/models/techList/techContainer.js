import { Tech } from "./tech.js";

export class TechContainer{
    techList;
    title;
    constructor(array, htmlObject, title){
        this.title = title;
        this.techList = [];

        for (let i = 0; i < array.length; i++) {
            let tech = new Tech(array[i].name, array[i].mainColor, array[i].icon);
            
            this.techList.push(tech);
        }
    }

    render(htmlObject){
        for (let i = 0; i < this.techList.length; i++) {
            htmlObject.appendChild(this.techList[i].render());
        }

        return htmlObject;
    }
}