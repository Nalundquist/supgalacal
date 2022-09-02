export default class GalAge {
	constructor(age, piety){
		this.earthAge = age;
		this.piety = piety;
	}

	galCal(age) {
		const mercAge = Math.round(age / .24);
		const venusAge = Math.round(age / .62);
		const marsAge = Math.round(age / 1.88);
		const jupiAge = Math.round(age / 11.86);
		const ageArray = [mercAge, venusAge, marsAge, jupiAge];
		return ageArray;
	}

	calAge() {
		const ageArray = this.galCal(this.earthAge);
		this.mercAge = ageArray[0];
		this.venusAge = ageArray[1];
		this.marsAge = ageArray[2];
		this.jupiAge = ageArray[3];
	}

	lifeExp() {
		let lifeMod;
		if (this.piety === "god-fearing"){
			lifeMod = .8;
		} else if (this.piety === "zealot"){
			lifeMod = .7;
		} else if (this.piety === "strayed"){
			lifeMod = 1.15;
		} else if (this.piety === "apostate"){
			lifeMod = 1.325;
		} else {
			lifeMod = 1;
		}
		this.earthExp = Math.round(73 / lifeMod);
		const expArray = this.galCal(this.earthExp);
		this.mercExp = expArray[0];
		this.venusExp = expArray[1];
		this.marsExp = expArray[2];
		this.jupiExp = expArray[3];
		if (this.earthAge > this.earthExp) {
			this.earthDiff = this.earthAge - this.earthExp;
			this.mercDiff = this.mercAge - this.mercExp;
			this.venusDiff = this.venusAge - this.venusExp;
			this.marsDiff = this.marsAge - this.marsExp;
			this.jupiDiff = this.jupiAge - this.jupiExp;
		}
	}
}