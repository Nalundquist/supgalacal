export default class GalAge {
	constructor(age, piety){
		this.earthAge = age;
		this.piety = piety;
	}

	galCal() {
		this.mercAge = Math.round(this.earthAge / .24);
		this.venusAge = Math.round(this.earthAge / .62);
		this.marsAge = Math.round(this.earthAge / 1.88);
		this.jupiAge = Math.round(this.earthAge / 11.86);
	}

	lifeExp() {
		let lifeMod = 1;
		if (this.piety === "god-fearing"){
			lifeMod = .8;
		} else if (this.piety === "zealot"){
			lifeMod = .7;
		} else if (this.piety === "strayed"){
			lifeMod = 1.15;
		}
		this.earthExp = Math.round(73 / lifeMod);
		this.mercExp = Math.round(this.earthExp / .24);
		this.venusExp = Math.round(this.earthExp / .62);
		this.marsExp = Math.round(this.earthExp / 1.88);
		this.jupiExp = Math.round(this.earthExp / 11.86);
	}
} 