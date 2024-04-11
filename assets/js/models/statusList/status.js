export class Status{
    bgColor;
    percent;
    name;

    constructor(name, bgColor, percent){
        this.name = name;
        this.bgColor = bgColor;
        this.percent = percent;
    }

    render(){
        
        let status = document.createElement("div");
        status.classList.add("circle-wrap");

        status.innerHTML = `
        <div class="circle">
        <div class="mask full per-${Math.floor(this.percent/10)}">
            <div class="fill per-${Math.floor(this.percent/10)}" style="background-color: ${this.bgColor};"></div>
        </div>
        <div class="mask half">
            <div class="fill per-${Math.floor(this.percent/10)}" style="background-color: ${this.bgColor};"></div>
        </div>
        <div class="inside-circle"> ${this.name} </div>
    </div>
        `;
        return status;
    }
}