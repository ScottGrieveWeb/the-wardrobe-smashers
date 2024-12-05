import baseImage from "./images/bases/base.png";
import shortHair from "./images/hair/z-short-hair.png";
import whiteHair from "./images/hair/white-hair.png";
import fancy from "./images/full-fit/full-fancy-fit.png";
import armourTop from "./images/top/armour.png";
import dragonSleeve from "./images/top/dragon-sleeve.png";
import { layer } from "./layers";
import { removeElementsByClass } from "./remove-elements";

export const zaphPage = (function(){

    function zaphLoad(id){
        const div = document.getElementById(id);

        const zaphBase = layer(baseImage, "base-img");

        //hairstyles
        const shortHairStyle = layer(shortHair, "layered-img");
        shortHairStyle.classList.add("hair");
        

        const whiteHairStyle = layer(whiteHair, "layered-img");
        whiteHairStyle.classList.add("hair");

        //full outfits
        const fancyFit = layer(fancy, "layered-img");

        //tops
        const armour = layer(armourTop, "layered-img");
        armour.classList.add("top");
        
        const dragonSleeveTop = layer(dragonSleeve, "layered-img");
        dragonSleeveTop.classList.add("top");

        // buttons
        const dressBtn = document.createElement("button");
        const dressBtnText = document.createTextNode("Dress Me!");
        dressBtn.appendChild(dressBtnText);

        const hairSwitchBtn = document.createElement("button");
        const hairSwitchBtnText = document.createTextNode("Switch hairstyle");
        hairSwitchBtn.appendChild(hairSwitchBtnText);

        const topSwitchBtn = document.createElement("button");
        const topSwitchBtnText = document.createTextNode("Switch top");
        topSwitchBtn.appendChild(topSwitchBtnText);

        //switches through hairstyles
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

        //switches through tops
        let currentTop = 0;
        topSwitchBtn.addEventListener("click", () => {
            if (currentTop == 0){
                div.appendChild(armour);
                currentTop = 1;
            } else if (currentTop == 1){
                removeElementsByClass("top");
                div.appendChild(dragonSleeveTop);
                currentTop = 2;
            } else {
                removeElementsByClass("top");
                currentTop = 0;
            }
        });
        div.appendChild(zaphBase);
        div.appendChild(hairSwitchBtn);
        div.appendChild(topSwitchBtn);
        div.appendChild(dressBtn);

        dressBtn.addEventListener("click", () => {
            div.appendChild(fancyFit);
        });
        

    }

    return {
        zaphLoad
    }
})();