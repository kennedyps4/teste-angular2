import {Component} from '@angular/core';

import {CursoService} from './curso.service';


import {NomeService} from './nome.service';



@Component({
	moduleId: module.id,
	selector: 'curso-lista',
	templateUrl: '/../../template/curso.html',

	providers: [CursoService,NomeService],
})


export class CursoComponent{
	
	cursos;

	nomes;

	constructor( cursoService: CursoService, nomeService:NomeService)
	{
		
		this.cursos = cursoService.getCurso();

		this.nomes = nomeService.getNomes();
	}
}