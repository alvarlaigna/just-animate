"use strict";
var Helpers_1 = require('./Helpers');
/**
 * Handles transforming short hand key properties into their native form
 */
function keyframeTransformer(keyframe) {
    var x = 0;
    var y = 1;
    var z = 2;
    // transform properties
    var scale = new Array(3);
    var skew = new Array(3);
    var rotate = new Array(3);
    var translate = new Array(3);
    var output = {};
    for (var prop in keyframe) {
        var value = keyframe[prop];
        switch (prop) {
            case 'scale3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 3) {
                        throw Error('scale3d requires x, y, & z');
                    }
                    scale[x] = arr[x];
                    scale[y] = arr[y];
                    scale[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    scale[y] = value;
                    scale[z] = value;
                    continue;
                }
                throw Error('scale3d requires a number or number[]');
            case 'scale':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 2) {
                        throw Error('scale requires x & y');
                    }
                    scale[x] = arr[x];
                    scale[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    scale[y] = value;
                    continue;
                }
                throw Error('scale requires a number or number[]');
            case 'scaleX':
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    continue;
                }
                throw Error('scaleX requires a number');
            case 'scaleY':
                if (Helpers_1.isNumber(value)) {
                    scale[y] = value;
                    continue;
                }
                throw Error('scaleY requires a number');
            case 'scaleZ':
                if (Helpers_1.isNumber(value)) {
                    scale[z] = value;
                    continue;
                }
                throw Error('scaleZ requires a number');
            case 'skew3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 3) {
                        throw Error('skew3d requires x, y, & z');
                    }
                    skew[x] = arr[x];
                    skew[y] = arr[y];
                    skew[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    skew[y] = value;
                    skew[z] = value;
                    continue;
                }
                throw Error('skew3d requires a number, string, string[], or number[]');
            case 'skew':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 2) {
                        throw Error('skew requires x & y');
                    }
                    skew[x] = arr[x];
                    skew[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    skew[y] = value;
                    continue;
                }
                throw Error('skew requires a number, string, string[], or number[]');
            case 'skewX':
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    continue;
                }
                throw Error('skewX requires a number or string');
            case 'skewY':
                if (Helpers_1.isNumber(value)) {
                    skew[y] = value;
                    continue;
                }
                throw Error('skewY requires a number or string');
            case 'skewZ':
                if (Helpers_1.isNumber(value)) {
                    skew[z] = value;
                    continue;
                }
                throw Error('skewZ requires a number or string');
            case 'rotate3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 3) {
                        throw Error('rotate3d requires x, y, & z');
                    }
                    rotate[x] = arr[x];
                    rotate[y] = arr[y];
                    rotate[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    rotate[x] = value;
                    rotate[y] = value;
                    rotate[z] = value;
                    continue;
                }
                throw Error('rotate3d requires a number or number[]');
            case 'rotate':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 2) {
                        throw Error('rotate requires x & y');
                    }
                    rotate[x] = arr[x];
                    rotate[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    rotate[x] = value;
                    rotate[y] = value;
                    continue;
                }
                throw Error('rotate requires a number or number[]');
            case 'rotateX':
                if (Helpers_1.isNumber(value)) {
                    rotate[x] = value;
                    continue;
                }
                throw Error('rotateX requires a number');
            case 'rotateY':
                if (Helpers_1.isNumber(value)) {
                    rotate[y] = value;
                    continue;
                }
                throw Error('rotateY requires a number');
            case 'rotateZ':
                if (Helpers_1.isNumber(value)) {
                    rotate[z] = value;
                    continue;
                }
                throw Error('rotateZ requires a number');
            case 'translate3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 3) {
                        throw Error('translate3d requires x, y, & z');
                    }
                    translate[x] = arr[x];
                    translate[y] = arr[y];
                    translate[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    translate[y] = value;
                    translate[z] = value;
                    continue;
                }
                throw Error('translate3d requires a number, string, string[], or number[]');
            case 'translate':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length != 2) {
                        throw Error('translate requires x & y');
                    }
                    translate[x] = arr[x];
                    translate[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    translate[y] = value;
                    continue;
                }
                throw Error('translate requires a number, string, string[], or number[]');
            case 'translateX':
                if (Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    continue;
                }
                throw Error('translateX requires a number or string');
            case 'translateY':
                if (Helpers_1.isNumber(value)) {
                    translate[y] = value;
                    continue;
                }
                throw Error('translateY requires a number or string');
            case 'translateZ':
                if (Helpers_1.isNumber(value)) {
                    translate[z] = value;
                    continue;
                }
                throw Error('translateZ requires a number or string');
            default:
                output[prop] = value;
                break;
        }
    }
    var transform = '';
    // combine scale
    var isScaleX = scale[x] !== undefined;
    var isScaleY = scale[y] !== undefined;
    var isScaleZ = scale[z] !== undefined;
    if (isScaleX && isScaleZ || isScaleY && isScaleZ) {
        var scaleString = scale.map(function (s) { return s || '1'; }).join(',');
        transform += " scale3d(" + scaleString + ")";
    }
    else if (isScaleX && isScaleY) {
        transform += " scale(" + (scale[x] || 1) + ", " + (scale[y] || 1) + ")";
    }
    else if (isScaleX) {
        transform += " scaleX(" + scale[x] + ")";
    }
    else if (isScaleY) {
        transform += " scaleX(" + scale[y] + ")";
    }
    else if (isScaleZ) {
        transform += " scaleX(" + scale[z] + ")";
    }
    else {
    }
    // combine skew
    var isskewX = skew[x] !== undefined;
    var isskewY = skew[y] !== undefined;
    var isskewZ = skew[z] !== undefined;
    if (isskewX && isskewZ || isskewY && isskewZ) {
        var skewString = skew.map(function (s) { return s || '1'; }).join(',');
        transform += " skew3d(" + skewString + ")";
    }
    else if (isskewX && isskewY) {
        transform += " skew(" + (skew[x] || 1) + ", " + (skew[y] || 1) + ")";
    }
    else if (isskewX) {
        transform += " skewX(" + skew[x] + ")";
    }
    else if (isskewY) {
        transform += " skewX(" + skew[y] + ")";
    }
    else if (isskewZ) {
        transform += " skewX(" + skew[z] + ")";
    }
    else {
    }
    // combine rotate
    var isrotateX = rotate[x] !== undefined;
    var isrotateY = rotate[y] !== undefined;
    var isrotateZ = rotate[z] !== undefined;
    if (isrotateX && isrotateZ || isrotateY && isrotateZ) {
        var rotateString = rotate.map(function (s) { return s || '1'; }).join(',');
        transform += " rotate3d(" + rotateString + ")";
    }
    else if (isrotateX && isrotateY) {
        transform += " rotate(" + (rotate[x] || 1) + ", " + (rotate[y] || 1) + ")";
    }
    else if (isrotateX) {
        transform += " rotateX(" + rotate[x] + ")";
    }
    else if (isrotateY) {
        transform += " rotateX(" + rotate[y] + ")";
    }
    else if (isrotateZ) {
        transform += " rotateX(" + rotate[z] + ")";
    }
    else {
    }
    // combine translate
    var istranslateX = translate[x] !== undefined;
    var istranslateY = translate[y] !== undefined;
    var istranslateZ = translate[z] !== undefined;
    if (istranslateX && istranslateZ || istranslateY && istranslateZ) {
        var translateString = translate.map(function (s) { return s || '1'; }).join(',');
        transform += " translate3d(" + translateString + ")";
    }
    else if (istranslateX && istranslateY) {
        transform += " translate(" + (translate[x] || 1) + ", " + (translate[y] || 1) + ")";
    }
    else if (istranslateX) {
        transform += " translateX(" + translate[x] + ")";
    }
    else if (istranslateY) {
        transform += " translateX(" + translate[y] + ")";
    }
    else if (istranslateZ) {
        transform += " translateX(" + translate[z] + ")";
    }
    else {
    }
    if (transform) {
        output.transform = transform;
    }
    return output;
}
exports.keyframeTransformer = keyframeTransformer;
