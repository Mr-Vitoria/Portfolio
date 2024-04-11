export class ModalController{
    modalContainer = null;

    constructor(modalContainer){
        this.modalContainer = modalContainer;

        this.closeBtn = modalContainer.getElementsByClassName("close")[0];

        this.closeBtn.addEventListener("click", (ev) => {
            console.log("test");
            this.closeModal();
        });

        this.type = modalContainer.getElementsByClassName("type")[0];
        this.title = modalContainer.getElementsByClassName("title")[0];
        this.descr = modalContainer.getElementsByClassName("descr")[0];
        this.technologies = modalContainer.getElementsByClassName("technologies")[0];
        this.linkCode = modalContainer.getElementsByClassName("code")[0];
        this.linkSite = modalContainer.getElementsByClassName("site")[0];
        this.projectImg = modalContainer.getElementsByClassName("projectImg")[0];
    }

    openModal(project){
        this.modalContainer.classList.add("active");

        this.type.textContent = project.type;
        this.title.textContent = project.title;
        this.descr.textContent = project.description;
        let technologies = "";
        for (let i = 0; i < project.technologies.length; i++) {
            technologies += project.technologies[i].title 
            + (i == project.technologies.length - 1 ? " " : ", ");
        }
        this.technologies.textContent = "Используемые технологии: " + technologies;
        this.linkCode.href = project.gitLink;
        this.linkSite.href = project.siteLink;
        this.projectImg.src = project.mainImg;
    }

    closeModal(){
        this.modalContainer.classList.remove("active");
    }
}