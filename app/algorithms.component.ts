import { Component, OnInit } from '@angular/core';

import { Algorithm } from './algorithm';
import { Database } from './database.service';

@Component({
    selector: 'algorithms',
    templateUrl: 'app/algorithms.component.html'
})
export class AlgorithmsComponent implements OnInit {
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
