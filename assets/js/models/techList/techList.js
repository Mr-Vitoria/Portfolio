import { TechContainer } from "./techContainer.js";

export class TechList{
    htmlObject;
    techContainerList;
    constructor(array, htmlObject){
        this.htmlObject = htmlObject;
        this.techContainerList = [];

        for (let i = 0; i < array.length; i++) {
            let tech = new TechContainer(array[i].list, htmlObject, array[i].title);
            
            this.techContainerList.push(tech);
        }
    }

    render(){
        for (let i = 0; i < this.techContainerList.length; i++) {
            let list = document.createElement("div");
            list.classList.add("list");
            this.techContainerList[i].render(list);

            this.htmlObject.appendChild(list);
        }

        return this.htmlObject;
    }
}