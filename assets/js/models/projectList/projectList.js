import { Project } from "./project.js";

export class ProjectList{
    constructor(array, htmlObject, modalProject){
        this.htmlObject = htmlObject;
        this.projectList = [];
        this.modalProject = modalProject;

        for (let i = 0; i < array.length; i++) {
            let project = new Project(
                array[i],
                this.modalProject
            );
            
            this.projectList.push(project);
        }
    }

    render(){
        for (let i = 0; i < this.projectList.length; i++) {
            this.htmlObject.appendChild(this.projectList[i].render());
        }
        return this.htmlObject;
    }

    changeProjectList(tag){
        for (let i = 0; i < this.projectList.length; i++) {
            this.projectList[i].changeActive(tag);
        }
    }
}