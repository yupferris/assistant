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
var database_service_1 = require('./database.service');
var algorithm_component_1 = require('./algorithm.component');
var State;
(function (State) {
    State[State["Unitialized"] = 0] = "Unitialized";
    State[State["Idle"] = 1] = "Idle";
    State[State["Countdown"] = 2] = "Countdown";
    State[State["Running"] = 3] = "Running";
})(State || (State = {}));
var AlgorithmPracticeComponent = (function () {
    function AlgorithmPracticeComponent(database) {
        this.database = database;
        this.displayValue = "ready";
        this.showAlgorithm = false;
        this.state = State.Unitialized;
    }
    AlgorithmPracticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.database.getAlgorithms().then(function (algorithms) {
            _this.algorithms = algorithms.filter(function (x) { return x.type == _this.algorithmType; });
            _this.initialize();
        });
    };
    AlgorithmPracticeComponent.prototype.initialize = function () {
        this.state = State.Idle;
    };
    AlgorithmPracticeComponent.prototype.keydown = function (event) {
        var _this = this;
        if (event.keyCode == 32) {
            switch (this.state) {
                case State.Idle:
                    this.state = State.Countdown;
                    this.currentAlgorithm = null;
                    this.showAlgorithm = false;
                    this.displayValue = "3";
                    setTimeout(function () {
                        _this.displayValue = "2";
                        setTimeout(function () {
                            _this.currentAlgorithm = _this.algorithms[Math.floor(Math.random() * _this.algorithms.length)];
                            _this.displayValue = "1";
                            setTimeout(function () {
                                _this.state = State.Running;
                                _this.startTime = Date.now();
                                _this.interval = setInterval(function () {
                                    var elapsed = new Date(Date.now() - _this.startTime);
                                    _this.displayValue = elapsed.getSeconds() + "." + elapsed.getMilliseconds();
                                }, 0);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                    break;
                case State.Running:
                    this.state = State.Idle;
                    clearInterval(this.interval);
                    this.showAlgorithm = true;
                    break;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
    ], AlgorithmPracticeComponent.prototype, "algorithmType", void 0);
    AlgorithmPracticeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'algorithm-practice',
            templateUrl: 'algorithm-practice.component.html',
            directives: [algorithm_component_1.AlgorithmComponent],
            host: {
                '(document:keydown)': 'keydown($event)'
            }
        }),
        __metadata('design:paramtypes', [database_service_1.Database])
    ], AlgorithmPracticeComponent);
    return AlgorithmPracticeComponent;
}());
exports.AlgorithmPracticeComponent = AlgorithmPracticeComponent;
