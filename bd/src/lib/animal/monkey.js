import animal from './lib/animal';
export default class monkey extends animal {
	play() {
		console.log('Oooo Oooo Oooo');
	}
	eat () {
		this.energy = this.energy - 3;
	}
}
