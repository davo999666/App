import cloudImage11 from "../assets/images/cloud/clouds11.png";
import cloudImage12 from "../assets/images/cloud/clouds12.png";
import cloudImage13 from "../assets/images/cloud/clouds13.png";
import cloudImage21 from "../assets/images/cloud/clouds21.png";
import cloudImage22 from "../assets/images/cloud/clouds22.png";
import cloudImage23 from "../assets/images/cloud/clouds23.png";
import cloudImage31 from "../assets/images/cloud/clouds31.png";
import cloudImage32 from "../assets/images/cloud/clouds32.png";
import cloudImage33 from "../assets/images/cloud/clouds33.png";
import cloudImage34 from "../assets/images/cloud/clouds34.png";
import cloudImage41 from "../assets/images/cloud/clouds41.png";
import cloudImage42 from "../assets/images/cloud/clouds42.png";
import cloudImage43 from "../assets/images/cloud/clouds43.png";
import cloudImage51 from "../assets/images/cloud/clouds51.png";
import cloudImage52 from "../assets/images/cloud/clouds52.png";
import cloudImage53 from "../assets/images/cloud/clouds53.png";
const tiny = [cloudImage11, cloudImage12];
const small = [cloudImage13, cloudImage21];
const medium = [cloudImage22, cloudImage23];
const average = [cloudImage31, cloudImage32];
const large = [cloudImage33, cloudImage34];
const big = [cloudImage41, cloudImage42];
const huge = [cloudImage43, cloudImage51];
const gigantic = [cloudImage52, cloudImage53];

export const cloudImages = (type) => {
    let arr;

    switch (type) {
        case 'tiny':
            arr = tiny;
            break;
        case 'small':
            arr = small;
            break;
        case 'medium':
            arr = medium;
            break;
        case 'average':
            arr = average;
            break;
        case 'large':
            arr = large;
            break;
        case 'big':
            arr = big;
            break;
        case 'huge':
            arr = huge;
            break;
        case 'gigantic':
            arr = gigantic;
            break;
        default:
            arr = [];
    }
    if (arr.length === 0) return null;
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};