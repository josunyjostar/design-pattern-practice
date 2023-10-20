import Animal from './Animal';
import Dog from './Dog';
import Cat from './Cat';
import TigerAdapter from './TigerAdapter';

const list = Array<Animal>();
list.push(new Dog('댕댕이'));
list.push(new Cat('츄츄르'));
list.push(new Cat('솜냥이'));
list.push(new TigerAdapter('타이가'));

list.forEach(v => {
    v.sound();
});
