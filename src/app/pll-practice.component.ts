import { Component } from '@angular/core';

import { AlgorithmType } from './algorithm';

import { AlgorithmPracticeComponent } from './algorithm-practice.component';

@Component({
    selector: 'pll-practice',
    templateUrl: 'app/pll-practice.component.html',
    directives: [AlgorithmPracticeComponent]
})
export class PllPracticeComponent {
    algorithmType = AlgorithmType.Pll;
}
