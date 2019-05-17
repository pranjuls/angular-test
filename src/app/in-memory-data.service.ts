import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		const heroes = [
			{ id: 11, name: 'Mr. Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Test' },
			{ id: 15, name: 'Maenta' },
			{ id: 16, name: 'hero no 1' },
			{ id: 17, name: 'SOme random' },
			{ id: 18, name: 'Unknown' },
			{ id: 19, name: 'Dragon' },
			{ id: 20, name: 'failure' }
		];

		return { heroes };
	}

	constructor() { }

	genId(heroes: Hero[]): number {
		return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
	}
}
