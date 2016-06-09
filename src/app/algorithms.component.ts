import { Component, OnInit } from '@angular/core';

import { Algorithm } from './algorithm';
import { Database } from './database.service';

import { AlgorithmComponent } from './algorithm.component';

@Component({
    selector: 'algorithms',
    templateUrl: 'app/algorithms.component.html',
    directives: [AlgorithmComponent]
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
