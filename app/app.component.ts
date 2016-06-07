import { Component, OnInit } from '@angular/core';

import { Algorithm } from './algorithm';
import { Database } from './database.service';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
    providers: [Database]
})
export class AppComponent implements OnInit {
    title = 'assistant';
    algorithms: Algorithm[];

    constructor(private database: Database) { }

    ngOnInit() {
        this.getAlgorithms();
    }

    getAlgorithms() {
        this.database.getAlgorithms().then(
            algorithms => this.algorithms = algorithms);
    }
}
