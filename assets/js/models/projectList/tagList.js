import { Tag } from "./tag.js";

export class TagList{
    htmlObject;
    tagList;
    onClickTag;
    constructor(tagTitleList, htmlObject, onClickTag){
        this.htmlObject = htmlObject;
        this.tagList = [];

        for (let i = 0; i < tagTitleList.length; i++) {
            let tag = new Tag(
                tagTitleList[i],
                (value) =>{
                    this.removeActive(value);
                    onClickTag(value);
                }
            );
            
            this.tagList.push(tag);
        }
    }
    removeActive(title){
        for (let i = 0; i < this.tagList.length; i++) {
            this.tagList[i].removeActive(title);
        }
    }

    render(){
        for (let i = 0; i < this.tagList.length; i++) {
            this.htmlObject.appendChild(this.tagList[i].render(i == 0));
        }
        return this.htmlObject;
    }
}