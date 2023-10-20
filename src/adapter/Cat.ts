import Animal from './Animal';

export default class Cat extends Animal {
    constructor(protected name: string) {
        super(name);
    }
    sound(): void {
        console.log(`${this.name}가 야옹`);
    }
}
