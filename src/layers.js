export const layer = function(name, layerClass, clothingClass){
        const currentLayer = document.createElement("img");
        currentLayer.src = name;
        currentLayer.classList.add(layerClass);
        currentLayer.classList.add(clothingClass);

        return currentLayer;
}