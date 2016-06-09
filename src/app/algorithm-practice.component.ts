import { Component, OnInit, Input } from '@angular/core';

import { Algorithm, AlgorithmType } from './algorithm';
import { Database } from './database.service';

import { AlgorithmComponent } from './algorithm.component';

enum State {
    Unitialized,
    Idle,
    Countdown,
    Running
}

@Component({
    selector: 'algorithm-practice',
    templateUrl: 'app/algorithm-practice.component.html',
    directives: [AlgorithmComponent],
    host: {
        '(document:keydown)': 'keydown($event)'
    }
})
export class AlgorithmPracticeComponent implements OnInit {
    @Input()
    algorithmType: AlgorithmType;

    algorithms: Algorithm[];

    currentAlgorithm: Algorithm;
    displayValue = "ready";
    showAlgorithm = false;

    private state = State.Unitialized;
    private startTime;
    private interval;

    constructor(private database: Database) { }

    ngOnInit() {
        this.database.getAlgorithms().then(
            algorithms => {
                this.algorithms = algorithms.filter(
                    x => x.type == this.algorithmType);

                this.initialize();
            });
    }

    private initialize() {
        this.state = State.Idle;
    }

    private keydown(event: KeyboardEvent) {
        if (event.keyCode == 32) {
            switch (this.state) {
            case State.Idle:
                this.state = State.Countdown;
                this.currentAlgorithm = null;
                this.showAlgorithm = false;
                this.displayValue = "3";
                setTimeout(() => {
                    this.displayValue = "2";
                    setTimeout(() => {
                        this.currentAlgorithm = this.algorithms[Math.floor(Math.random() * this.algorithms.length)];
                        this.displayValue = "1";
                        setTimeout(() => {
                            this.state = State.Running;
                            this.startTime = Date.now();
                            this.interval = setInterval(() => {
                                let elapsed = new Date(Date.now() - this.startTime);
                                this.displayValue = elapsed.getSeconds() + "." + elapsed.getMilliseconds();
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
    }
}
