import baseImage from "./images/bases/base.png";
import shortHair from "./images/hair/z-short-hair.png";
import fancy from "./images/full-fit/full-fancy-fit.png";

export const zaphPage = (function(){

    function zaphLoad(id){
        const div = document.getElementById(id);

        const zaphBase = document.createElement("img");
        zaphBase.src = baseImage;
        zaphBase.classList.add("base-img");

        const shortHairStyle = document.createElement("img");
        shortHairStyle.src = shortHair;
        shortHairStyle.classList.add("layered-img");

        const fancyFit = document.createElement("img");
        fancyFit.src = fancy;
        fancyFit.classList.add("layered-img");

        const dressBtn = document.createElement("button");
        const dressBtnText = document.createTextNode("Dress Me!");
        dressBtn.appendChild(dressBtnText);



        div.appendChild(zaphBase);
        div.appendChild(dressBtn);

        dressBtn.addEventListener("click", () => {
            div.appendChild(shortHairStyle);
            div.appendChild(fancyFit);
        });
        

        
    }

    return {
        zaphLoad
    }
})();