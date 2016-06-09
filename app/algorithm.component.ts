import { Component, Input } from '@angular/core';

import { Algorithm } from './algorithm';

@Component({
    selector: 'algorithm',
    templateUrl: 'app/algorithm.component.html'
})
export class AlgorithmComponent {
    @Input()
    algorithm: Algorithm;
}
