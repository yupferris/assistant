import { Component } from '@angular/core';

import { AlgorithmType } from './algorithm';

import { AlgorithmPracticeComponent } from './algorithm-practice.component';

@Component({
    selector: 'oll-practice',
    templateUrl: 'app/oll-practice.component.html',
    directives: [AlgorithmPracticeComponent]
})
export class OllPracticeComponent {
    algorithmType = AlgorithmType.Oll;
}
