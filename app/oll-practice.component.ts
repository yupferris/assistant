import { Component, OnInit } from '@angular/core';

import { Algorithm, AlgorithmType } from './algorithm';
import { Database } from './database.service';

@Component({
    selector: 'oll-practice',
    templateUrl: 'app/oll-practice.component.html'
})
export class OllPracticeComponent implements OnInit {
    algorithms: Algorithm[];
    currentAlgorithm: Algorithm;

    constructor(private database: Database) { }

    ngOnInit() {
        this.getAlgorithms();
    }

    getAlgorithms() {
        this.database.getAlgorithms().then(
            algorithms => {
                this.algorithms = algorithms.filter(
                    x => x.type == AlgorithmType.Oll);

                // TODO: Randomize
                this.currentAlgorithm = this.algorithms[0];
            });
    }
}
