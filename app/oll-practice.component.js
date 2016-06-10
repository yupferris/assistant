"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var algorithm_1 = require('./algorithm');
var algorithm_practice_component_1 = require('./algorithm-practice.component');
var OllPracticeComponent = (function () {
    function OllPracticeComponent() {
        this.algorithmType = algorithm_1.AlgorithmType.Oll;
    }
    OllPracticeComponent = __decorate([
        core_1.Component({
            selector: 'oll-practice',
            templateUrl: 'app/oll-practice.component.html',
            directives: [algorithm_practice_component_1.AlgorithmPracticeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OllPracticeComponent);
    return OllPracticeComponent;
}());
exports.OllPracticeComponent = OllPracticeComponent;
