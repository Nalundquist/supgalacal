export default class GalAge {
	constructor(age){
		this.earthAge = age;
	}

	galCal() {
		this.mercAge = Math.round(this.earthAge / .24);
		this.venusAge = Math.round(this.earthAge / .62);
		this.marsAge = Math.round(this.earthAge / 1.88);
		this.jupiAge = Math.round(this.earthAge / 11.86);
	}

	lifeExp() {

	}
} 