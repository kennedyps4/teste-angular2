import {Injectable} from '@angular/core';

@Injectable()

export class NomeService{
	getNomes(){
		return ['Kennedy','Kemmely','Teste','Ana Leticia'];
	}
}