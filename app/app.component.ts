import { Component } from '@angular/core';
// TODO: Look into why this is deprecated and what to use instead
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Database } from './database.service';

import { SolvingComponent } from './solving.component';
import { OllPracticeComponent } from './oll-practice.component';
import { PllPracticeComponent } from './pll-practice.component';
import { AlgorithmsComponent } from './algorithms.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        Database
    ]
})
@RouteConfig([
    {
        path: '/solving',
        name: 'Solving',
        component: SolvingComponent,
        useAsDefault: true
    },
    {
        path: '/oll-practice',
        name: 'OllPractice',
        component: OllPracticeComponent
    },
    {
        path: '/pll-practice',
        name: 'PllPractice',
        component: PllPracticeComponent
    },
    {
        path: '/algorithms',
        name: 'Algorithms',
        component: AlgorithmsComponent
    }
])
export class AppComponent {
    title = 'assistant';
}
