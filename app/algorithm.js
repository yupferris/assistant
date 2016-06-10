"use strict";
(function (AlgorithmType) {
    AlgorithmType[AlgorithmType["Oll"] = 0] = "Oll";
    AlgorithmType[AlgorithmType["Pll"] = 1] = "Pll";
})(exports.AlgorithmType || (exports.AlgorithmType = {}));
var AlgorithmType = exports.AlgorithmType;
// TODO: moves should be a proper move array
// TODO: consider grouping moves
var Algorithm = (function () {
    function Algorithm() {
    }
    return Algorithm;
}());
exports.Algorithm = Algorithm;
