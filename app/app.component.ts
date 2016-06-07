import { Component } from '@angular/core';
import { AlgorithmType, Algorithm } from './algorithm';
import { ALGORITHMS } from './algorithms';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
    title = 'assistant';
}
