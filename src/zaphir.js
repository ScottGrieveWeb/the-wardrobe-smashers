import baseImage from "./images/bases/base.png";
import shortHair from "./images/hair/z-short-hair.png";
import whiteHair from "./images/hair/white-hair.png";
import fancy from "./images/full-fit/full-fancy-fit.png";
import armourTop from "./images/overshirts/armour.png";
import dragonSleeve from "./images/overshirts/dragon-sleeve.png";
import boots from "./images/footwear/boots.png";
import booties from "./images/footwear/booties.png";
import slippies from "./images/footwear/slippies.png";
import { layer } from "./layers";
import { removeElementsByClass } from "./remove-elements";

export const zaphPage = (function(){

    function zaphLoad(id){
        const div = document.getElementById(id);

        const zaphBase = layer(baseImage, "base-img");

        //hairstyles
        const shortHairStyle = layer(shortHair, "layered-img", "hair");
        const whiteHairStyle = layer(whiteHair, "layered-img", "hair");

        //full outfits
        const fancyFit = layer(fancy, "layered-img", "full-fit");

        //tops
        const armour = layer(armourTop, "layered-img", "top");
        const dragonSleeveTop = layer(dragonSleeve, "layered-img", "top");

        //footwear
        const zaphBoots = layer(boots, "layered-img", "foot");
        const zaphBooties = layer(booties, "layered-img", "foot");
        const zaphSlippies = layer(slippies, "layered-img", "foot");

        // buttons
        const dressBtn = document.createElement("button");
        const dressBtnText = document.createTextNode("Full Outfits");
        dressBtn.appendChild(dressBtnText);

        const hairSwitchBtn = document.createElement("button");
        const hairSwitchBtnText = document.createTextNode("Hairstyle");
        hairSwitchBtn.appendChild(hairSwitchBtnText);

        const topSwitchBtn = document.createElement("button");
        const topSwitchBtnText = document.createTextNode("Tops");
        topSwitchBtn.appendChild(topSwitchBtnText);

        const footSwitchBtn = document.createElement("button");
        const footSwitchBtnText = document.createTextNode("Footwear");
        footSwitchBtn.appendChild(footSwitchBtnText);

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

        //switches through footwear
        let currentFoot = 0;
        footSwitchBtn.addEventListener("click", () => {
            if (currentFoot == 0){
                div.appendChild(zaphBoots);
                currentFoot = 1;
            } else if (currentFoot == 1){
                removeElementsByClass("foot");
                div.appendChild(zaphBooties);
                currentFoot = 2;
            } else if (currentFoot == 2){
                removeElementsByClass("foot");
                div.appendChild(zaphSlippies);
                currentFoot = 3;
            } else {
                removeElementsByClass("foot");
                currentFoot = 0;
            }
        });

        //switches through full outfits, removing any currently selected clothes
        let currentOutfit = 0;
        dressBtn.addEventListener("click", () => {
            if (currentOutfit == 0){
                removeElementsByClass("top");
                removeElementsByClass("foot");
                div.appendChild(fancyFit);
                currentOutfit = 1;
            } else {
                removeElementsByClass("full-fit");
                currentOutfit = 0;
            }
        });
        // adds buttons to content div
        div.appendChild(zaphBase);
        div.appendChild(hairSwitchBtn);
        div.appendChild(topSwitchBtn);
        div.appendChild(footSwitchBtn);
        div.appendChild(dressBtn);
    }

    return {
        zaphLoad
    }
})();