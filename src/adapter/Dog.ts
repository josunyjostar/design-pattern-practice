import Animal from './Animal';

export default class Dog extends Animal {
    constructor(protected name: string) {
        super(name);
    }
    sound(): void {
        console.log(`${this.name}가 멍멍`);
    }
}
