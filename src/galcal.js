export default class GalAge {
	constructor(age){
		this.earthAge = age;
	}

	galCal() {
		this.mercAge = Math.round(this.earthAge / .24);
	}
} 