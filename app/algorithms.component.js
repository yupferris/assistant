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
var database_service_1 = require('./database.service');
var algorithm_component_1 = require('./algorithm.component');
var AlgorithmsComponent = (function () {
    function AlgorithmsComponent(database) {
        this.database = database;
    }
    AlgorithmsComponent.prototype.ngOnInit = function () {
        this.getAlgorithms();
    };
    AlgorithmsComponent.prototype.getAlgorithms = function () {
        var _this = this;
        this.database.getAlgorithms().then(function (algorithms) { return _this.algorithms = algorithms; });
    };
    AlgorithmsComponent = __decorate([
        core_1.Component({
            selector: 'algorithms',
            templateUrl: 'assistant/app/algorithms.component.html',
            directives: [algorithm_component_1.AlgorithmComponent]
        }),
        __metadata('design:paramtypes', [database_service_1.Database])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());
exports.AlgorithmsComponent = AlgorithmsComponent;
