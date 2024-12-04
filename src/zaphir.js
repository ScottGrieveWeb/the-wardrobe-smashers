import baseImage from "./images/bases/base.png";
import shortHair from "./images/hair/z-short-hair.png";
import whiteHair from "./images/hair/white-hair.png";
import fancy from "./images/full-fit/full-fancy-fit.png";

export const zaphPage = (function(){

    function zaphLoad(id){
        const div = document.getElementById(id);

        const zaphBase = document.createElement("img");
        zaphBase.src = baseImage;
        zaphBase.classList.add("base-img");

        //hairstyles
        const shortHairStyle = document.createElement("img");
        shortHairStyle.src = shortHair;
        shortHairStyle.classList.add("layered-img");
        shortHairStyle.classList.add("hair");
        shortHairStyle.setAttribute("id", "hair-1");

        const whiteHairStyle = document.createElement("img");
        whiteHairStyle.src = whiteHair;
        whiteHairStyle.classList.add("layered-img");
        whiteHairStyle.classList.add("hair");
        whiteHairStyle.setAttribute("id", "hair-2");

        //full outfits
        const fancyFit = document.createElement("img");
        fancyFit.src = fancy;
        fancyFit.classList.add("layered-img");

        const dressBtn = document.createElement("button");
        const dressBtnText = document.createTextNode("Dress Me!");
        dressBtn.appendChild(dressBtnText);

        const hairSwitchBtn = document.createElement("button");
        const hairSwitchBtnText = document.createTextNode("Switch hairstyle");
        hairSwitchBtn.appendChild(hairSwitchBtnText);

        function removeElementsByClass(className) {
            let elements = document.getElementsByClassName(className);
            while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

        let currentHair = 0;
        hairSwitchBtn.addEventListener("click", () => {
            if (currentHair == 0){
                div.appendChild(whiteHairStyle);
                currentHair = 1;
            } else if (currentHair == 1){
                removeElementsByClass("hair");
                div.appendChild(shortHairStyle);
                currentHair = 2;
            } else {
                removeElementsByClass("hair");
                currentHair = 0;
            }
        });

        div.appendChild(zaphBase);
        div.appendChild(hairSwitchBtn);
        div.appendChild(dressBtn);

        dressBtn.addEventListener("click", () => {
            div.appendChild(fancyFit);
        });
        

        
    }

    return {
        zaphLoad
    }
})();