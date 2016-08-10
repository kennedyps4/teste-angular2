import {Injectable} from '@angular/core';
	
@Injectable()

export class CursoService{

	getCurso(){
		return ['Teste','Angular','Teste','Angular 2']
	}
}