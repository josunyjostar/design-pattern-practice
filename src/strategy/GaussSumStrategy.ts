import SumStrategy from './SumStrategy';

export default class GaussSumStrategy implements SumStrategy {
    get(N: number) {
        return (N * (N + 1)) / 2;
    }
}
