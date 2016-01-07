export default class animal {
	constructor (species, sound) {
		this.species = species;
		this.sound = sound;
		this.energy = 1000;
	}
	eat () {

	}
	sleep() {

	}
	sound () {
		console.log(`#sound: species ${this.species} sound ${this.sound}`);
	}
	doSoundOffAction () {
		this.sound();
		this.reportEnergy();
	}
	doRandomAction () {

	}
	reportEnergy() {
		console.log(`#reportEnergy: species ${this.species} energy level ${this.energy}`);
	}
}