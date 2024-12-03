import baseImage from "./images/base.png";

export const zaphPage = (function(){

    function zaphLoad(id){
        const div = document.getElementById(id);

        const zaphBase = document.createElement("img");
        zaphBase.src = baseImage;
        zaphBase.classList.add("base-img");

        div.appendChild(zaphBase);
    }

    return {
        zaphLoad
    }
})();