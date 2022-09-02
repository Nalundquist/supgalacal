import GalAge from './../src/galcal.js';

describe ('GalAge', () => {

	let newAge;

	beforeEach(() => {
		newAge = new GalAge(72);
		newAge.galCal();
	});

	test('Should be a constructor capable of holding an earthAge key:value pair', () => {
		expect(newAge.earthAge).toEqual(72);
	})

	test('galCal method should take this.earthAge and convert it to Mercury Years (rounded to the nearest integer)', () => {
		expect(newAge.mercAge).toEqual(300);
	})

	test('galCal method should take this.earthAge and convert it to Venus Years (rounded to the nearest integer)', () => {
		expect(newAge.venusAge).toEqual(116)
	})

	test('galCal method should take this.earthAge and convert it to Mars Years (rounded to the nearest integer)', () => {
		expect(newAge.marsAge).toEqual(38)
	})

	test('galCal method should take this.earthAge and convert it to Jupiter Years (rounded to the nearest integer)', () => {
		expect(newAge.jupiAge).toEqual(6)
	})

	test('lifeExp method should calculate average earth life expectancy modified by piousness; apply that to previous planet calculations', () => {
		newAge.piety = "god-fearing" 
		newAge.lifeExp();
		expect(newAge.earthExp).toEqual(91)
		expect(newAge.mercExp).toEqual(379)
		expect(newAge.venusExp).toEqual(147)
		expect(newAge.marsExp).toEqual(48)
		expect(newAge.jupiExp).toEqual(8)
	})
})