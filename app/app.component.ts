import { Component } from '@angular/core';
// TODO: Look into why this is deprecated and what to use instead
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Database } from './database.service';
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
        path: '/algorithms',
        name: 'Algorithms',
        component: AlgorithmsComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'assistant';
}
