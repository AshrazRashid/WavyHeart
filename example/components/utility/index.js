import {Dimensions} from 'react-native';

const maxHeight = Dimensions.get('window').height; // or something else
const maxWidth = Dimensions.get('window').width;

const ratioWidth = (srcWidth) => Math.min(maxWidth / srcWidth);
const ratioHeight = (srcHeight) => Math.min(maxHeight / srcHeight);

const widthRatio = (srcWidth) => srcWidth * ratioWidth;
const heightRatio = (srcHeight) => srcHeight * ratioHeight;

export default {widthRatio, heightRatio, smallMargin: heightRatio(8)};
