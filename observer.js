class Observable {
    constructor(){
        this.observables = [];
    }

    subscrible(fn){
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscrible(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const lodData1 = data => console.log(`Suscrible 1: ${data}`);
const lodData2 = data => console.log(`Suscrible 2: ${data}`);
const lodData3 = data => console.log(`Suscrible 3: ${data}`);

o.subscrible(lodData1);
o.subscrible(lodData2);
o.subscrible(lodData3);
o.notify('notified 1');
o.unsubscrible(lodData2);
o.notify('notified 2');
