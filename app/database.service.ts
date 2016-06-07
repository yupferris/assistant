import { Injectable } from '@angular/core';

import { Algorithm } from './algorithm';
import { ALGORITHMS } from './algorithms';

@Injectable()
export class Database {
    getAlgorithms() {
        return Promise.resolve(ALGORITHMS);
    }
}
