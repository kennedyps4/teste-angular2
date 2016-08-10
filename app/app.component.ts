import { Component } from '@angular/core';
import {MeuPrimeiroComponent} from './primeiro/meu-primeiro.component';
import {SegundoComponent} from './segundo/segundo.component';
import {TerceiroComponent} from './terceiro/terceiro.component';
import {CursoComponent} from './cursos/curso.component';
 
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <segundo-componente></segundo-componente>
        <terceiro-componente></terceiro-componente>
        <curso-lista></curso-lista>
        `,
    
    directives: [MeuPrimeiroComponent,SegundoComponent,TerceiroComponent,CursoComponent]	,    
})
export class AppComponent { }
