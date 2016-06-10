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
// TODO: Look into why this is deprecated and what to use instead
var router_deprecated_1 = require('@angular/router-deprecated');
var database_service_1 = require('./database.service');
var solving_component_1 = require('./solving.component');
var oll_practice_component_1 = require('./oll-practice.component');
var pll_practice_component_1 = require('./pll-practice.component');
var algorithms_component_1 = require('./algorithms.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'assistant';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'assistant/app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                database_service_1.Database
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/solving',
                name: 'Solving',
                component: solving_component_1.SolvingComponent,
            },
            {
                path: '/oll-practice',
                name: 'OllPractice',
                component: oll_practice_component_1.OllPracticeComponent,
                useAsDefault: true
            },
            {
                path: '/pll-practice',
                name: 'PllPractice',
                component: pll_practice_component_1.PllPracticeComponent
            },
            {
                path: '/algorithms',
                name: 'Algorithms',
                component: algorithms_component_1.AlgorithmsComponent
            }
        ]),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
