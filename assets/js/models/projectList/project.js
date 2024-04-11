export class Project{
    constructor(project, modalProject){
        this.project = project;
        this.modalProject = modalProject;
    }

    render(){
        this.projectObject = document.createElement("div");
        this.projectObject.classList.add("project");
        this.projectObject.classList.add("show");
        this.projectObject.classList.add("animation");

        this.projectObject.addEventListener("click", (ev) => {
            this.modalProject.openModal(this.project);
        });

        this.projectObject.innerHTML = `
        <div class="header"></div>
        <img src="${this.project.mainImg}" alt="Изображение">
        <div class="footer">
            <p>${this.project.title}</p>
            <p>Сделан ${this.project.author}</p>
        </div>
        `;
        return this.projectObject;
    }

    changeActive(tag){
        if(tag == "Все"){
            if(!this.projectObject.classList.contains("show"))
                this.projectObject.classList.add("show");
            
            return;
        }

        if(this.project.technologies.findIndex((tech => tech.type == tag)) != -1){
            if(!this.projectObject.classList.contains("show")){
                this.projectObject.classList.add("show");
            }
        }
        else{
            this.projectObject.classList.remove("show");
        }
    }
}