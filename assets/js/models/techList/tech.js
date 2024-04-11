import { Color } from "../colorConverter/color.js";
import { Solver } from "../colorConverter/solver.js";


export class Tech {
    name;
    mainColor;
    icon;
    constructor(name, mainColor, icon) {
        this.name = name;
        this.mainColor = this.hexToRgb(mainColor);
        this.icon = icon;
    }

    render() {
        let tech = document.createElement("div");
        tech.classList.add("tech");
        let techImg = document.createElement("img");
        techImg.src = this.icon;
        techImg.alt = "Иконка";
        techImg.setAttribute("style", "filter: invert(97%) sepia(1%) saturate(13%) hue-rotate(234deg) brightness(102%) contrast(105%);")

        let techP = document.createElement("p");
        techP.textContent = this.name;
        tech.appendChild(techImg);
        tech.appendChild(techP);
        
        
        tech.addEventListener("mouseenter", (ev) => {
            tech.classList.add("active");
            const color = new Color(
                this.mainColor.r, 
                this.mainColor.g, 
                this.mainColor.b
            );
            const solver = new Solver(color);
            techImg.setAttribute("style", "filter: " + solver.solve().filter);
        })

        tech.addEventListener("mouseleave", (ev) => {
            tech.classList.remove("active");
            techImg.setAttribute("style", "filter: invert(97%) sepia(1%) saturate(13%) hue-rotate(234deg) brightness(102%) contrast(105%);")
        })
        return tech;
    }

    hexToRgb(hex) {
        var result = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}