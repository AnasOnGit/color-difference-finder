// get similarty between two colors
function getDifference(color1, color2) {
    var similarity = 0;
    var color1R = color1.substring(1, 3);
    var color1G = color1.substring(3, 5);
    var color1B = color1.substring(5, 7);
    var color2R = color2.substring(1, 3);
    var color2G = color2.substring(3, 5);
    var color2B = color2.substring(5, 7);
    var r = Math.abs(parseInt(color1R, 16) - parseInt(color2R, 16));
    var g = Math.abs(parseInt(color1G, 16) - parseInt(color2G, 16));
    var b = Math.abs(parseInt(color1B, 16) - parseInt(color2B, 16));
    similarity = (r + g + b) / 765;
    let convertToPercentage = similarity * 100;
    let roundedPercentage = convertToPercentage.toFixed(0);
    return roundedPercentage;
}
console.log(getDifference("#ffffff", "#ffffff"));

module.exports = {
    getDifference: getDifference,
};