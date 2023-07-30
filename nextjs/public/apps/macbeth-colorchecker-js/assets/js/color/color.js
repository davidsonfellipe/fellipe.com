function cXYZ(X, Y, Z){
    return {
        "X": X,
        "Y": Y,
        "Z": Z
    };
}

function xyz_from_wavelength (ColorTemp, illuminant, currentCIE) {

    var nmMin = 380;
    var nmMax = 780;
    var degrees = 5;

    var XYZ = {x: 0,
               y: 0,
               z: 0};

    var nmMinIndex = nmMin - _CIEXYZ[currentCIE][0][0];
    var nmMaxIndex = _CIEXYZ[currentCIE].length - 1 -
                     (_CIEXYZ[currentCIE][_CIEXYZ[currentCIE].length - 1][0] - nmMax);

    var XSum = 0,
        YSum = 0,
        ZSum = 0;

    var wSum = 0,
        mac = 0;

    for (nm = nmMinIndex; nm <= nmMaxIndex; nm += degrees) {

        // calculate X
        XSum += _CIEXYZ[currentCIE][nm][1] * _Illuminant[illuminant][nm][1] * ColorTemp[mac];

        // calculate Y
        YSum += _CIEXYZ[currentCIE][nm][2] * _Illuminant[illuminant][nm][1] * ColorTemp[mac];

        // calculate Z
        ZSum += _CIEXYZ[currentCIE][nm][3] * _Illuminant[illuminant][nm][1] * ColorTemp[mac];

        wSum += _CIEXYZ[currentCIE][nm][2] * _Illuminant[illuminant][nm][1];
        // _CIEXYZ["1931"] 
        mac++;

    }

    return cXYZ(XSum/wSum, YSum/wSum, ZSum/wSum);
}

function corCIEXYZtoCIERGB(XYZ){

    var m = [2.960135,-0.471621,-0.563455, -0.500461,1.287182,0.086082, 0.036281,-0.052922,0.528317];

    var RGBTEMP = {R:0, G:0, B:0};

    RGBTEMP.R = m[0] * XYZ.X + m[1] * XYZ.Y + m[2] * XYZ.Z;
    RGBTEMP.G = m[3] * XYZ.X + m[4] * XYZ.Y + m[5] * XYZ.Z;
    RGBTEMP.B = m[6] * XYZ.X + m[7] * XYZ.Y + m[8] * XYZ.Z;

    return RGBTEMP;
}

function gamma_sRGB(x){

    var ft,
        t = (x > 0) ? x : -x;

    if (t > 0.0031308) {

        ft = 1.055 * Math.pow(t,1.0/2.4)-0.055;

    }
    else {

        ft = 12.92 * t;

    }

    return (x > 0) ? ft : -ft;
}

function corCIEXYZtosRGB(XYZ) {

    var RGBTEMP = {R:0,
                   G:0,
                   B:0};

    RGBTEMP.R = 3.2404542 * XYZ.X - 1.5371385 * XYZ.Y - 0.4985314 * XYZ.Z;
    RGBTEMP.G =-0.9692660 * XYZ.X + 1.8760108 * XYZ.Y + 0.0415560 * XYZ.Z;
    RGBTEMP.B = 0.0556434 * XYZ.X - 0.2040259 * XYZ.Y + 1.0572252 * XYZ.Z;

    //converter for 0-255 notation
    var cmultiply = 255;

    RGBTEMP.R = gamma_sRGB(RGBTEMP.R) * cmultiply;
    RGBTEMP.G = gamma_sRGB(RGBTEMP.G) * cmultiply;
    RGBTEMP.B = gamma_sRGB(RGBTEMP.B) * cmultiply;

    return RGBTEMP;
}