/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
export const renderGradient = (colorId = 1) => {
    let gradient = "";
    switch(colorId) {
        case 1:
            gradient = `${"to right" + "," + "#42275a" + "," + "#734b6d"}`;
        case 2:
            gradient = `${"to right" + "," + "#45b649" + "," + "#a8e063"}`;
        default:
            return gradient;
    }
}