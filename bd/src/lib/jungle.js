const jungle = {
	animals: [],
	soundOff () {
		this.animals.map( x => x.doSoundOffAction());
	},
	doRandomActivities () {
		this.animals.map( x => x.doRandomAction());
	},
	init () {
		setInterval(()=> {
			this.doRandomActivities();
		}, 500);
		setInterval(()=> {
			this.soundOff();
		}, 1000);
	}
};

export default jungle;