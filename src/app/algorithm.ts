export enum AlgorithmType {
    Oll,
    Pll
}

// TODO: moves should be a proper move array
// TODO: consider grouping moves
export class Algorithm {
    type: AlgorithmType;
    name: string;
    imageFileName: string;
    moves: string;
    comments: string;
}
