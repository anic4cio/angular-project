import { Component } from "@angular/core";

// é necessário importar o Component para usar o @
@Component({
    selector: 'meu-primeiro-component',
    template: `
    <h1 style="color: red;">Meu primeiro component com Angular!</h1>
    `
})

export class MeuPrimeiroComponent { }