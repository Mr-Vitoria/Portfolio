export class Tag{
    constructor(title, onCLick){
        this.title = title;
        this.onCLick = onCLick;
    }

    render(baseActive = false){
        this.tag = document.createElement("button");
        this.tag.classList.add("tag");
        this.tag.addEventListener("click", (ev) => {
            this.tag.classList.add("active");
            this.onCLick(this.title);
        });
        if(baseActive){
            this.tag.classList.add("active");
        }
        
        this.tag.textContent = this.title;

        return this.tag;
    }

    removeActive(title){
        if(this.title != title)
            this.tag.classList.remove("active");
    }
}