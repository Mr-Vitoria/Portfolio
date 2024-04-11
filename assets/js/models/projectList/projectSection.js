import { ProjectList } from "./projectList.js";
import { TagList } from "./tagList.js";

export class ProjectSection{
    constructor(htmlObject, projectList, modalController){
        this.htmlObject = htmlObject;
        this.modalController = modalController;

        let tagList = ["Все"];

        for (let i = 0; i < projectList.length; i++) {
            let project = projectList[i];

            for (let j = 0; j < project.technologies.length; j++) {
                let tech = project.technologies[j].type;
                
                if(tagList.findIndex(value => value == tech) == -1){
                    tagList.push(tech);
                }
            }
            
        }

        this.ProjectList = new ProjectList(projectList, this.htmlObject.getElementsByClassName("projectList")[0], modalController);
        this.TagList = new TagList(tagList, this.htmlObject.getElementsByClassName("tagList")[0], (tagName) => {
            this.changeProjectList(tagName);
        });
    }

    render(){
        this.ProjectList.render();
        this.TagList.render();
    }

    changeProjectList(tagName){
        this.ProjectList.changeProjectList(tagName);
    }
}