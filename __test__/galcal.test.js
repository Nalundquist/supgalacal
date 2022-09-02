import GalAge from './../src/galcal.js';

describe ('GalAge', () => {

	let newAge;

	beforeEach(() => {
		newAge = new GalAge(72);
	});

	test('Should be a constructor capable of holding an earthAge key:value pair', () => {
		expect(newAge.earthAge).toEqual(72);
	})

	test('galCal method should take this.earthAge and convert it to Mercury Years (rounded to the nearest integer)', () => {
		expect(newAge.mercAge).toEqual(300);
	})
})