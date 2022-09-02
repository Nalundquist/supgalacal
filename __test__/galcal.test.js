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

	test('lifeExp method should calculate average earth life expectancy modified by high piousness; apply that to previous planet calculations', () => {
		newAge.piety = "god-fearing" 
		newAge.lifeExp();
		expect(newAge.earthExp).toEqual(91)
		expect(newAge.mercExp).toEqual(379)
		expect(newAge.venusExp).toEqual(147)
		expect(newAge.marsExp).toEqual(48)
		expect(newAge.jupiExp).toEqual(8)
	})

	test('lifeExp method should calculate average earth life expectancy modified by highest piousness; apply that to previous planet calculations', () => {
		newAge.piety = "zealot" 
		newAge.lifeExp();
		expect(newAge.earthExp).toEqual(104)
		expect(newAge.mercExp).toEqual(433)
		expect(newAge.venusExp).toEqual(168)
		expect(newAge.marsExp).toEqual(55)
		expect(newAge.jupiExp).toEqual(9)
	})

	test('lifeExp method should calculate average earth life expectancy modified by low piousness; apply that to previous planet calculations', () => {
		newAge.piety = "strayed" 
		newAge.lifeExp();
		expect(newAge.earthExp).toEqual(63)
		expect(newAge.mercExp).toEqual(263)
		expect(newAge.venusExp).toEqual(102)
		expect(newAge.marsExp).toEqual(34)
		expect(newAge.jupiExp).toEqual(5)
	})

	test('lifeExp method should calculate average earth life expectancy modified by lowest piousness; apply that to previous planet calculations', () => {
		newAge.piety = "apostate" 
		newAge.lifeExp();
		expect(newAge.earthExp).toEqual(55)
		expect(newAge.mercExp).toEqual(229)
		expect(newAge.venusExp).toEqual(89)
		expect(newAge.marsExp).toEqual(29)
		expect(newAge.jupiExp).toEqual(5)
	})
})