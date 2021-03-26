import { Component } from '@angular/core';

@Component({
    selector : 'hello',
    templateUrl : './hello.component.html'
})
export class HelloComponent {
    
    nome : string;
    clientes : Cliente[];

    constructor(){
        this.nome = 'Pádua';
        let fulano = new Cliente("Fulano", 30);
        let cicrano = new Cliente("cicrano", 20);
        let outro = new Cliente("outro", 32);
        this.clientes = [fulano, cicrano, outro];
    }

}

class Cliente {
    constructor(public nome: string, 
                public idade: number
        ){

    }
}