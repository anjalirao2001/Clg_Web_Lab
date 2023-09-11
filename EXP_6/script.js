let topLayerId = 'layer3';
function mover(layerId) {
 let topLayer = document.getElementById(topLayerId);
 let toTop = document.getElementById(layerId);
 topLayer.style.zIndex = "0";
 toTop.style.zIndex = "1";
 topLayerId = layerId;
}
