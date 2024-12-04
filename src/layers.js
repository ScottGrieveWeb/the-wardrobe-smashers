export const layer = function(name, classList){
        const currentLayer = document.createElement("img");
        currentLayer.src = name;
        currentLayer.classList.add(classList);

        return currentLayer;
}