/** @format */

import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

interface Personaje {
	nombre: string;
}

const personajes: Personaje[] = [
	{ nombre: 'Megaman' },
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
];

from(personajes).pipe(distinctUntilKeyChanged('nombre')).subscribe(console.log);
//Deja pasar solo los que la "propiedad" sea diferente.
